import { Address } from "@ton/core";
import keyBy from "lodash.keyby";
import { useState } from "react";

import { FEE_TIER_SCALE } from "@/constants/contract";
import { parseJetton } from "@/helper/transform";
import { useTonWalletStore } from "@/store";
import { Pool } from "@/types/Pool";
import {
  Functions,
  Jetton,
  TickMath,
  tickToPrice,
} from "@orbiton_labs/v3-contracts-sdk";
import { TonClient } from "@ton/ton";
import { getAllTicks } from "./useAllTicks";

interface TickProcessed {
  liquidityActive: bigint;
  tickIdx: number;
  liquidityNet: bigint;
  price0: string;
  price1: string;
  liquidityGross: bigint;
}

interface TicksResult {
  ticksProcessed: TickProcessed[];
  tickSpacing: number;
  activeTickIdx: number;
  token0: Jetton;
  token1: Jetton;
}

export function useInfoTickData() {
  const numSurroundingTicks = 500;
  const PRICE_FIXED_DIGITS = 8;

  const client = useTonWalletStore((state) => state.queryClient);

  const [ticksResult, setTicksResult] = useState<TicksResult | null>(null);
  const [ticksLoading, setTicksLoading] = useState(false);

  async function fetchInitializedTicks(client: TonClient, poolAddress: string) {
    const surroundingTicksResult = await getAllTicks(client, poolAddress);

    return { ticks: surroundingTicksResult, loading: false, error: false };
  }

  async function fetchTicksSurroundingPrice(pool: Pool, poolAddr: string) {
    setTicksLoading(true);

    try {
      if (
        !client ||
        !pool.token1.address ||
        !pool.token2.address ||
        ticksLoading ||
        ticksResult
      )
        return undefined;

      console.log(pool);

      const {
        tick: poolCurrentTick,
        liquidity,
        token1: token0,
        token2: token1,
      } = pool;

      const tickSpacing = Number(pool.tickSpacing);

      const activeTickIdx =
        Math.floor(poolCurrentTick / tickSpacing) * tickSpacing;

      const initializedTicksResult = await fetchInitializedTicks(
        client,
        poolAddr
      );

      if (initializedTicksResult.error || initializedTicksResult.loading) {
        return {
          error: initializedTicksResult.error,
          loading: initializedTicksResult.loading,
        };
      }

      const { ticks: initializedTicks } = initializedTicksResult;

      const tickIdxToInitializedTick = keyBy(initializedTicks, "tickIdx");

      let activeTickIdxForPrice = activeTickIdx;
      if (activeTickIdxForPrice < TickMath.MIN_TICK) {
        activeTickIdxForPrice = TickMath.MIN_TICK;
      }
      if (activeTickIdxForPrice > TickMath.MAX_TICK) {
        activeTickIdxForPrice = TickMath.MAX_TICK;
      }

      const jetton0 = parseJetton(token0);
      const jetton1 = parseJetton(token1);

      await jetton0.setWalletAddress(
        client,
        Address.parse(process.env.NEXT_PUBLIC_ROUTER_ADDRESS || "")
      );
      await jetton1.setWalletAddress(
        client,
        Address.parse(process.env.NEXT_PUBLIC_ROUTER_ADDRESS || "")
      );

      const activeTickProcessed = {
        liquidityActive: BigInt(liquidity.toString()),
        tickIdx: activeTickIdx,
        liquidityNet: BigInt(0),
        price0: tickToPrice(jetton0, jetton1, activeTickIdxForPrice).toFixed(
          PRICE_FIXED_DIGITS
        ),
        price1: tickToPrice(jetton1, jetton0, activeTickIdxForPrice).toFixed(
          PRICE_FIXED_DIGITS
        ),
        liquidityGross: BigInt(0),
      };

      const activeTick = tickIdxToInitializedTick[activeTickIdx];
      if (activeTick) {
        activeTickProcessed.liquidityGross = BigInt(activeTick.liquidityGross);
        activeTickProcessed.liquidityNet = BigInt(activeTick.liquidityNet);
      }

      const Direction = {
        ASC: "ASC",
        DESC: "DESC",
      };

      // Computes the numSurroundingTicks above or below the active tick.
      const computeSurroundingTicks = (
        _activeTickProcessed: TickProcessed,
        _tickSpacing: number,
        _numSurroundingTicks: number,
        direction: string
      ) => {
        let previousTickProcessed = {
          ..._activeTickProcessed,
        };

        // Iterate outwards (either up or down depending on 'Direction') from the active tick,
        // building active liquidity for every tick.
        let processedTicks = [];
        for (let i = 0; i < _numSurroundingTicks; i += 1) {
          const currentTickIdx =
            direction === Direction.ASC
              ? previousTickProcessed.tickIdx + _tickSpacing
              : previousTickProcessed.tickIdx - _tickSpacing;

          if (
            currentTickIdx < TickMath.MIN_TICK ||
            currentTickIdx > TickMath.MAX_TICK
          ) {
            break;
          }

          const currentTickProcessed = {
            liquidityActive: previousTickProcessed.liquidityActive,
            tickIdx: currentTickIdx,
            liquidityNet: BigInt(0),
            price0: tickToPrice(jetton0, jetton1, currentTickIdx).toFixed(
              PRICE_FIXED_DIGITS
            ),
            price1: tickToPrice(jetton1, jetton0, currentTickIdx).toFixed(
              PRICE_FIXED_DIGITS
            ),
            liquidityGross: BigInt(0),
          };

          const currentInitializedTick =
            tickIdxToInitializedTick[currentTickIdx.toString()];
          if (currentInitializedTick) {
            currentTickProcessed.liquidityGross = BigInt(
              currentInitializedTick.liquidityGross
            );
            currentTickProcessed.liquidityNet = BigInt(
              currentInitializedTick.liquidityNet
            );
          }

          if (direction === Direction.ASC && currentInitializedTick) {
            currentTickProcessed.liquidityActive =
              BigInt(previousTickProcessed.liquidityActive) +
              BigInt(currentInitializedTick.liquidityNet);
          } else if (
            direction === Direction.DESC &&
            BigInt(previousTickProcessed.liquidityNet) !== BigInt(0)
          ) {
            currentTickProcessed.liquidityActive =
              BigInt(previousTickProcessed.liquidityActive) -
              BigInt(previousTickProcessed.liquidityNet);
          }

          processedTicks.push(currentTickProcessed);
          previousTickProcessed = currentTickProcessed;
        }

        if (direction === Direction.DESC) {
          processedTicks = processedTicks.reverse();
        }

        return processedTicks;
      };

      const subsequentTicks = computeSurroundingTicks(
        activeTickProcessed,
        tickSpacing,
        numSurroundingTicks,
        Direction.ASC
      );

      const previousTicks = computeSurroundingTicks(
        activeTickProcessed,
        tickSpacing,
        numSurroundingTicks,
        Direction.DESC
      );

      const ticksProcessed = previousTicks
        .concat(activeTickProcessed)
        .concat(subsequentTicks);

      setTicksResult({
        ticksProcessed,
        tickSpacing: Number(tickSpacing),
        activeTickIdx,
        token0: jetton0,
        token1: jetton1,
      });
      return undefined;
    } catch (err) {
      throw new Error(err as string);
    } finally {
      setTicksLoading(false);
    }
  }

  return {
    fetchTicksSurroundingPrice: {
      ticksResult,
      ticksLoading,
      fetchTicksSurroundingPrice,
    },
  };
}
