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

      console.log(jetton0, jetton1);

      await jetton0.setWalletAddress(queryClient, routerAddress);
      await jetton1.setWalletAddress(queryClient, routerAddress);

      console.log({ jetton0, jetton1 });

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
      console.log("no amount");
      return;
    }

    if (loading) {
      console.log("is loading");
      return;
    }

    if (!data?.pool) {
      console.log("no pool data");
      return;
    }

    if (data?.pool.length > 0) {
      console.log("Pool existed");
    }

    if (!queryClient) {
      console.log("no client");
      return;
    }

    const router = queryClient.open(
      RouterWrapper.Router.createFromAddress(routerAddress)
    );

    if (!sender) {
      console.log("no sender");
      return;
    }

    if (!jetton0 || !jetton1) {
      console.log("no jetton");
      return;
    }

    console.log({
      kind: "OpCreatePool",
      query_id: 0,
      jetton0_wallet: jetton0.walletAddress?.toString(),
      jetton1_wallet: jetton1.walletAddress?.toString(),
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
    });

    if (!jetton0.walletAddress || !jetton1.walletAddress) {
      return;
    }

    try {
      const res = await router.sendCreatePool(
        sender,
        {
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
        },
        {
          value: toNano("0.1"),
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    price,
    jetton0,
    jetton1,
    handleCreatePool,
  };
};
