import client from "@/apis/blockchain/ton-client";
import { FEE_TIER_SCALE } from "@/constants/contract";
import { FEE_MAP } from "@/constants/corresponding-fee";
import { PTON_ROUTER_WALLET } from "@/constants/pton";
import { useTonWalletStore } from "@/store";
import { AddLiquidityStatus, useAddLiquidityStore } from "@/store/add-liquidity-store";
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
import Decimal from "decimal.js";
import { useEffect, useRef } from "react";
import useDebounce from "../useDebounce";

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

  const addLiquidityStore = useAddLiquidityStore();
  const prevPositionRef = useRef<Position | null>(null);

  const debounceAmount0 = useDebounce(addLiquidityStore.amount0, 1000);
  const debounceAmount1 = useDebounce(addLiquidityStore.amount1, 1000);

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

    addLiquidityStore.setStatus(AddLiquidityStatus.CALCULATING);

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
      addLiquidityStore.setStatus(AddLiquidityStatus.IDLE);
      return;
    }

    // Only update position if it has changed
    if (
      !prevPositionRef.current ||
      prevPositionRef.current.liquidity !== newPosition.liquidity
    ) {
      prevPositionRef.current = newPosition;

      if (focus === FocusToken.TOKEN_0) {
        addLiquidityStore.setAmount1(new Decimal(newPosition.amount1.quotient.toString()).toString());
      } else {
        addLiquidityStore.setAmount0(new Decimal(newPosition.amount0.quotient.toString()).toString());
      }
    }
  };

  // Simplified onChange handlers
  const onChangeAmount0 = (value: string | undefined) => {
    const newAmount0 = new Decimal(value || 0);
    addLiquidityStore.setAmount0(newAmount0.toString());
  };

  const onChangeAmount1 = (value: string | undefined) => {
    const newAmount1 = new Decimal(value || 0);
    addLiquidityStore.setAmount1(newAmount1.toString());
  };

  // Effect to trigger position calculation with debounced values
  useEffect(() => {
    if (debounceAmount0 !== "0") {
      calculatePosition(FocusToken.TOKEN_0, new Decimal(debounceAmount0));
    } else if (debounceAmount1 !== "0") {
      calculatePosition(FocusToken.TOKEN_1, new Decimal(debounceAmount1));
    }
  }, [debounceAmount0, debounceAmount1, tickPair]);

  // Effect for estimation
  useEffect(() => {
    const emulateMint = async () => {
      if (!tonApiClient || !sender?.address || !prevPositionRef.current) return;

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

      try {
        await jetton0Sender.setWalletAddress(queryClient!, sender.address);
        await jetton1Sender.setWalletAddress(queryClient!, sender.address);

        const sqrtRatioAX96 = TickMath.getSqrtRatioAtTick(tickPair[0]);
        const sqrtRatioBX96 = TickMath.getSqrtRatioAtTick(tickPair[1]);

        const { amount0: newAmount0, amount1: newAmount1 } = prevPositionRef.current;

        const calculatedLiquidity = maxLiquidityForAmounts(
          BigInt(pool.sqrtPrice),
          sqrtRatioAX96,
          sqrtRatioBX96,
          newAmount0.quotient.toString(),
          newAmount1.quotient.toString(),
          false
        );

        prevPositionRef.current.liquidity = calculatedLiquidity;

        const result = await PoolMessageBuilder.createEmulatedMintMessage(
          tonApiClient,
          walletVersion,
          sender?.address,
          jettons[0]!,
          jettons[1]!,
          JettonAmount.fromRawAmount(jetton0Sender, prevPositionRef.current.amount0.quotient),
          JettonAmount.fromRawAmount(jetton1Sender, prevPositionRef.current.amount1.quotient),
          prevPositionRef.current,
          sender?.address,
          0,
          Chain.Testnet,
          {
            ROUTER: process.env.NEXT_PUBLIC_ROUTER_ADDRESS!,
            PTON_ROUTER_WALLET: PTON_ROUTER_WALLET,
          }
        );

        addLiquidityStore.setMessages(result.messages);
        addLiquidityStore.setStatus(AddLiquidityStatus.ADD_LIQUIDITY_READY);
      } catch (err) {
        console.log(err);
        addLiquidityStore.setError("Failed to calculate position");
        addLiquidityStore.setStatus(AddLiquidityStatus.IDLE);
      }
    };

    if (prevPositionRef.current) {
      emulateMint();
    }
  }, [prevPositionRef.current]);

  return {
    onChangeAmount0,
    onChangeAmount1,
  };
};
