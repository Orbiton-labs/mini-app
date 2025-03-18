import { FEE_TIER_SCALE } from "@/constants/contract";
import { usePoolExistQueryQuery } from "@/graphql/generated/graphql";
import { parseJetton } from "@/helper/transform";
import { useTonWalletStore } from "@/store";
import { Token } from "@/types/Token";
import {
  encodeSqrtRatioX96,
  Functions,
  Jetton,
  RouterWrapper,
} from "@orbiton_labs/v3-contracts-sdk";
import { OpCreatePool } from "@orbiton_labs/v3-contracts-sdk/build/tlbs/router";
import { Address, toNano } from "@ton/core";
import { useEffect, useMemo, useState } from "react";

export const useCreatePool = (
  token1: Token | null,
  token2: Token | null,
  fee: number,
  tickSpacing: number
) => {
  const queryClient = useTonWalletStore((state) => state.queryClient);
  const sender = useTonWalletStore((state) => state.sender);
  const [poolAddress, setPoolAddress] = useState<Address | null>(null);
  const [jetton0, setJetton0] = useState<Jetton | null>(null);
  const [jetton1, setJetton1] = useState<Jetton | null>(null);

  const isSorted = useMemo(() => {
    if (!jetton0 || !jetton1) return true;
    return jetton0.sortsBefore(jetton1);
  }, [jetton0, jetton1]);

  const routerAddress = Address.parse(
    process.env.NEXT_PUBLIC_ROUTER_ADDRESS || ""
  );

  const { data, loading } = usePoolExistQueryQuery({
    variables: {
      where: {
        id: {
          eq: poolAddress ? poolAddress.toString() : "",
        },
      },
    },
  });

  useEffect(() => {
    (async () => {
      if (!token1 || !token2 || !fee || !queryClient) return;

      const jetton0 = parseJetton(token1.token);
      const jetton1 = parseJetton(token2.token);

      await jetton0.setWalletAddress(queryClient, routerAddress);
      await jetton1.setWalletAddress(queryClient, routerAddress);

      const [jetton0Sorted, jetton1Sorted] = jetton0.sortsBefore(jetton1)
        ? [jetton0, jetton1]
        : [jetton1, jetton0];

      const poolAddress = Functions.computePoolAddress(
        Address.parse(process.env.NEXT_PUBLIC_ROUTER_ADDRESS!),
        jetton0Sorted.address,
        jetton1Sorted.address,
        BigInt(fee * FEE_TIER_SCALE),
        BigInt(tickSpacing)
      );

      setPoolAddress(poolAddress);
      setJetton0(jetton0Sorted);
      setJetton1(jetton1Sorted);
    })();
  }, [token1, token2, fee]);

  const price = useMemo(() => {
    if (!token1?.amount || !token2?.amount) return 0;

    const value = !isSorted
      ? Number(token2.amount) / Number(token1.amount)
      : Number(token1.amount) / Number(token2.amount);

    return value;
  }, [token1, token2, isSorted]);

  const handleCreatePool = async () => {
    if (!token1?.amount || !token2?.amount) {
      throw new Error("Please enter amounts");
    }

    if (loading) {
      throw new Error("Loading pool data");
    }

    if (!data?.pool) {
      throw new Error("No pool data");
    }

    if (data?.pool.length > 0) {
      throw new Error("Pool already exists");
    }

    if (!queryClient) {
      throw new Error("No client");
    }

    if (!sender) {
      throw new Error("Please connect your wallet");
    }

    if (!jetton0 || !jetton1) {
      throw new Error("No jetton data");
    }

    if (!jetton0.walletAddress || !jetton1.walletAddress) {
      throw new Error("No wallet addresses");
    }

    const router = queryClient.open(
      RouterWrapper.Router.createFromAddress(routerAddress)
    );

    const createPoolParams = {
      kind: "OpCreatePool",
      query_id: 0,
      jetton0_wallet: jetton0.walletAddress,
      jetton1_wallet: jetton1.walletAddress,
      fee: fee * FEE_TIER_SCALE,
      sqrt_price_x96: encodeSqrtRatioX96(
        BigInt(token1.amount),
        BigInt(token2.amount)
      ),
      tick_spacing: tickSpacing,
      jetton_master_ref: {
        kind: "JettonMasterRef",
        jetton0_master: jetton0.address,
        jetton1_master: jetton1.address,
      },
    };

    try {
      const res = await router.sendCreatePool(
        sender,
        createPoolParams as OpCreatePool,
        {
          value: toNano("0.1"),
        }
      );
      return res;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to create pool");
    }
  };

  return {
    price,
    jetton0,
    jetton1,
    handleCreatePool,
  };
};
