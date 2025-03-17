import client from "@/apis/blockchain/ton-client";
import { FEE_TIER_SCALE } from "@/constants/contract";
import { FEE_MAP } from "@/constants/corresponding-fee";
import { PTON_ROUTER_WALLET } from "@/constants/pton";
import { useTonWalletStore } from "@/store";
import { Pool } from "@/types/Pool";
import {
  Jetton,
  JettonAmount,
  PoolMessageBuilder,
  Pool as PoolSDK,
  Position,
  TickMath,
} from "@orbiton_labs/v3-contracts-sdk";
import { Chain } from "@orbiton_labs/v3-contracts-sdk/build/constants";
import { maxLiquidityForAmounts } from "@orbiton_labs/v3-contracts-sdk/build/utils/maxLiquidityForAmounts";
import { Trace } from "@ton-api/client";
import { SenderArguments } from "@ton/core";
import Decimal from "decimal.js";
import { useEffect, useRef, useState } from "react";
import useDebounce from "../useDebounce";
import { JettonMaster } from "@ton/ton";

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
  const loadWalletVersion = useTonWalletStore(
    (state) => state.loadWalletVersion
  );

  const [focusOn, setFocusOn] = useState<FocusToken | null>(null);
  const [amount0, setAmount0] = useState<Decimal>(new Decimal(0));
  const [amount1, setAmount1] = useState<Decimal>(new Decimal(0));
  const [position, setPosition] = useState<Position | null>(null);
  const [estimateRes, setEstimateRes] = useState<{
    messages: SenderArguments[];
    result: Trace;
  } | null>(null);

  const debounceAmount0 = useDebounce(amount0, 1000);
  const debounceAmount1 = useDebounce(amount1, 1000);

  const prevPositionRef = useRef<Position | null>(null);

  // Function to calculate position based on focus and value
  const calculatePosition = async (focus: FocusToken, value: Decimal) => {
    if (!pool || !jettons[0] || !jettons[1] || !client) {
      console.log("Missing required data");
      return;
    }

    const fee = FEE_MAP.find(
      (fee) => fee === Number(pool.feeTier) * FEE_TIER_SCALE
    );

    if (!fee) {
      console.log("Not found fee");
      return;
    }

    let newPosition: Position;

    if (focus === FocusToken.TOKEN_0) {
      newPosition = Position.fromAmount0({
        pool: new PoolSDK(
          jettons[0],
          jettons[1],
          fee,
          pool.sqrtPrice,
          pool.liquidity,
          pool.tick,
          pool.tickSpacing
        ),
        amount0: value.toString(),
        tickLower: tickPair[0],
        tickUpper: tickPair[1],
        useFullPrecision: false,
      });
    } else {
      newPosition = Position.fromAmount1({
        pool: new PoolSDK(
          jettons[0],
          jettons[1],
          fee,
          pool.sqrtPrice,
          pool.liquidity,
          pool.tick,
          pool.tickSpacing
        ),
        amount1: value.toString(),
        tickLower: tickPair[0],
        tickUpper: tickPair[1],
      });
    }

    if (newPosition.liquidity === 0n) {
      return;
    }

    // Only update position if it has changed
    if (
      !prevPositionRef.current ||
      prevPositionRef.current.liquidity !== newPosition.liquidity
    ) {
      setPosition(newPosition);
      prevPositionRef.current = newPosition;

      if (focus === FocusToken.TOKEN_0) {
        setAmount1(new Decimal(newPosition.amount1.quotient.toString()));
      } else {
        setAmount0(new Decimal(newPosition.amount0.quotient.toString()));
      }
    }
  };

  // Simplified onChange handlers
  const onChangeAmount0 = (value: string | undefined) => {
    const newAmount0 = new Decimal(value || 0);
    setAmount0(newAmount0);
    setFocusOn(FocusToken.TOKEN_0);
  };

  const onChangeAmount1 = (value: string | undefined) => {
    const newAmount1 = new Decimal(value || 0);
    setAmount1(newAmount1);
    setFocusOn(FocusToken.TOKEN_1);
  };

  // Effect to trigger position calculation with debounced values
  useEffect(() => {
    if (focusOn === FocusToken.TOKEN_0 && !debounceAmount0.isZero()) {
      calculatePosition(FocusToken.TOKEN_0, debounceAmount0);
    } else if (focusOn === FocusToken.TOKEN_1 && !debounceAmount1.isZero()) {
      calculatePosition(FocusToken.TOKEN_1, debounceAmount1);
    }
  }, [debounceAmount0, debounceAmount1, focusOn, tickPair]);

  // Effect for estimation
  useEffect(() => {
    const emulateMint = async () => {
      if (!tonApiClient || !sender?.address || !position) return;

      if (!walletVersion) {
        await loadWalletVersion();
        return;
      }

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

      console.log({
        poolAddress: pool.address,
        jettonMaster0: pool.token1.address,
        JettonMaster1: pool.token2.address,
        jettonWallet0: jettons[0]!.address.toString(),
        jettonWallet1: jettons[1]!.address.toString(),
        router: 'EQBkY8koHBO51KvkrKEc_f4weiATV-4I-1pwDGxPNT1fUyIt'
      })

      try {
        await jetton0Sender.setWalletAddress(queryClient!, sender.address);
        await jetton1Sender.setWalletAddress(queryClient!, sender.address);

        const sqrtRatioAX96 = TickMath.getSqrtRatioAtTick(tickPair[0]);
        const sqrtRatioBX96 = TickMath.getSqrtRatioAtTick(tickPair[1]);

        const { amount0: newAmount0, amount1: newAmount1 } = position;

        const calculatedLiquidity = maxLiquidityForAmounts(
          BigInt(pool.sqrtPrice),
          sqrtRatioAX96,
          sqrtRatioBX96,
          newAmount0.quotient.toString(),
          newAmount1.quotient.toString(),
          false
        );

        position.liquidity = calculatedLiquidity;

        console.log(
          tonApiClient,
          walletVersion,
          sender?.address,
          jettons[0]!,
          jettons[1]!,
          JettonAmount.fromRawAmount(jetton0Sender, position.amount0.quotient),
          JettonAmount.fromRawAmount(jetton1Sender, position.amount1.quotient),
          position,
          sender?.address,
          0,
          Chain.Testnet
        );

        const result = await PoolMessageBuilder.createEmulatedMintMessage(
          tonApiClient,
          walletVersion,
          sender?.address,
          jettons[0]!,
          jettons[1]!,
          JettonAmount.fromRawAmount(jetton0Sender, position.amount0.quotient),
          JettonAmount.fromRawAmount(jetton1Sender, position.amount1.quotient),
          position,
          sender?.address,
          0,
          Chain.Testnet,
          {
            ROUTER: process.env.NEXT_PUBLIC_ROUTER_ADDRESS!,
            PTON_ROUTER_WALLET: PTON_ROUTER_WALLET,
          }
        );

        setEstimateRes(result);
        console.log("success", result.result.transaction.success);
      } catch (err) {
        console.log(err);
      }
    };

    emulateMint();
  }, [position]); // Only depend on position

  const handleMint = async () => {
    const res = await sender?.sendMultiple(estimateRes?.messages!);
    console.log({ res });
  };

  return {
    amount0,
    amount1,
    focusOn,
    setFocusOn,
    setAmount0,
    setAmount1,
    handleMint,
    onChangeAmount0,
    onChangeAmount1,
  };
};
