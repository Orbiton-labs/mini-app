import client from "@/apis/blockchain/ton-client";
import { FEE_TIER_SCALE } from "@/constants/contract";
import { useTonWalletStore } from "@/store";
import { Pool } from "@/types/Pool";
import {
  Jetton,
  JettonAmount,
  Percent,
  PoolMessageBuilder,
  Pool as PoolSDK,
  PoolWrapper,
  Position,
} from "@orbiton_labs/v3-contracts-sdk";
import {
  FeeAmount,
  WalletVersion,
} from "@orbiton_labs/v3-contracts-sdk/build/@types";
import { Trace } from "@ton-api/client";
import { Address, OpenedContract, SenderArguments } from "@ton/core";
import Decimal from "decimal.js";
import { useEffect, useState } from "react";

export enum FocusToken {
  TOKEN_0,
  TOKEN_1,
}

export const useHandleChangeSubmitAmount = (
  pool: Pool,
  jettons: [Jetton | null, Jetton | null],
  tickPair: [number, number]
) => {
  const tonApiClient = useTonWalletStore((state) => state.tonApiClient);
  const walletVersion = useTonWalletStore((state) => state.walletVersion);
  const sender = useTonWalletStore((state) => state.sender);
  const queryClient = useTonWalletStore((state) => state.queryClient);

  const [focusOn, setFocusOn] = useState<FocusToken | null>();
  const [amount0, setAmount0] = useState<Decimal>(new Decimal(0));
  const [amount1, setAmount1] = useState<Decimal>(new Decimal(0));
  const [position, setPosition] = useState<Position | null>(null);
  const [poolContractInfo, setPoolContractInfo] = useState<{
    fee: bigint;
    tickSpacing: bigint;
    tick: bigint;
    sqrtPriceX96: bigint;
    liquidity: bigint;
  } | null>(null);
  const [estimateRes, setEstimateRes] = useState<{
    messages: SenderArguments[];
    result: Trace;
  } | null>(null);

  useEffect(() => {
    if (!pool || !queryClient) return;

    (async () => {
      const poolContract = new PoolWrapper.Pool(Address.parse(pool.address));
      const poolQuery = queryClient.open(
        poolContract
      ) as OpenedContract<PoolWrapper.Pool>;

      const info = await poolQuery.getPoolInfo();
      setPoolContractInfo(info);
      console.log("got info");
    })();
  }, [pool, queryClient]);

  const onChangeAmount0 = async (value: string | undefined) => {
    if (!pool) {
      console.log("No pool found");
      return;
    }

    if (!jettons[0] || !jettons[1]) {
      console.log("No jettons found");
      return;
    }

    if (!client) {
      console.log("No ton client found");
      return;
    }

    if (!poolContractInfo) {
      console.log("no pool contract info");
      return;
    }

    const amount0 = new Decimal(value || 0);

    setAmount0(amount0);

    console.log({
      pool,
    });

    console.log({
      pool: new PoolSDK(
        jettons[0],
        jettons[1],
        FeeAmount.MEDIUM,
        poolContractInfo.sqrtPriceX96,
        poolContractInfo.liquidity,
        Number(poolContractInfo.tick),
        Number(poolContractInfo.tickSpacing)
      ),
      amount0: amount0.toString(),
      tickLower: tickPair[0],
      tickUpper: tickPair[1],
    });

    const position = Position.fromAmount0({
      pool: new PoolSDK(
        jettons[0],
        jettons[1],
        FeeAmount.MEDIUM,
        poolContractInfo.sqrtPriceX96,
        poolContractInfo.liquidity,
        Number(poolContractInfo.tick),
        Number(poolContractInfo.tickSpacing)
      ),
      amount0: amount0.toString(),
      tickLower: tickPair[0],
      tickUpper: tickPair[1],
      useFullPrecision: false,
    });

    console.log({
      liquidity: position.liquidity,
      amount0: position.amount0.quotient,
      amount1: position.amount1.quotient,
    });

    const res = position.mintAmountsWithSlippage(new Percent(1, 100));

    console.log({
      liquidity: position.liquidity,
      amount0: res.amount0,
      amount1: res.amount1,
    });

    if (position.liquidity === 0n) {
      return;
    }

    setPosition(position);
    setAmount1(new Decimal(position.amount1.quotient.toString()));
  };

  useEffect(() => {
    (async () => {
      console.log({ tonApiClient, walletVersion, sender, position });
      if (!tonApiClient || !walletVersion || !sender?.address || !position)
        return;

      const jetton0Sender = new Jetton(
        pool.token1.address!,
        pool.token1.decimals,
        pool.token1.symbol
      );
      const jetton1Sender = new Jetton(
        pool.token2.address!,
        pool.token2.decimals,
        pool.token2.symbol
      );

      await jetton0Sender.setWalletAddress(queryClient!, sender.address);
      await jetton1Sender.setWalletAddress(queryClient!, sender.address);

      // console.log({
      //   router0: jettons[0]!.walletAddress?.toString(),
      //   router1: jettons[1]!.walletAddress?.toString(),
      //   user0: JettonAmount.fromRawAmount(
      //     jetton0Sender,
      //     position.amount0.quotient
      //   ).jetton.walletAddress?.toString(),
      //   user1: JettonAmount.fromRawAmount(
      //     jetton1Sender,
      //     position.amount1.quotient
      //   ).jetton.walletAddress?.toString(),
      //   tS: pool.tickSpacing,
      //   fee: Number(pool.feeTier) * FEE_TIER_SCALE,
      //   tL: tickPair[0],
      //   tU: tickPair[1],
      //   liquid: position?.liquidity,
      // });

      const result = await PoolMessageBuilder.createEmulatedMintMessage(
        tonApiClient,
        WalletVersion.V4R2,
        sender?.address,
        Address.parse(process.env.NEXT_PUBLIC_ROUTER_ADDRESS!),
        jettons[0]!,
        jettons[1]!,
        JettonAmount.fromRawAmount(jetton0Sender, position.amount0.quotient),
        JettonAmount.fromRawAmount(jetton1Sender, position.amount1.quotient),
        pool.tickSpacing,
        Number(pool.feeTier) * FEE_TIER_SCALE,
        BigInt(tickPair[0]),
        BigInt(tickPair[1]),
        position?.liquidity,
        sender?.address
      );

      setEstimateRes(result);
      console.log("success", result.result.transaction.success);
    })();
  }, [tonApiClient, position, pool, sender, walletVersion]);

  const handleMint = async () => {
    const res = await sender?.sendMultiple(estimateRes?.messages!);

    console.log({ res });
  };

  return {
    amount0,
    setAmount0,
    amount1,
    setAmount1,
    handleMint,
    onChangeAmount0,
  };
};

//25054648172197637616232824832
//25054648172197637687608393824
