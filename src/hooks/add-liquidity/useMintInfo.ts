import { parseJetton } from "@/helper/transform";
import { useTonWalletStore } from "@/store";
import { Pool } from "@/types/Pool";
import {
  Jetton,
  nearestUsableTick,
  TickMath,
  tickToPrice,
} from "@orbiton_labs/v3-contracts-sdk";
import { Address } from "@ton/core";
import { useEffect, useMemo, useState } from "react";

export const INIT_NUM_TICK = 100;

export const useMintInfo = (pool: Pool) => {
  const queryClient = useTonWalletStore((state) => state.queryClient);
  const [tickPair, setTickPair] = useState<[number, number]>([0, 0]);
  const [jettons, setJettons] = useState<[Jetton | null, Jetton | null]>([
    null,
    null,
  ]);

  const [minTick, maxTick] = useMemo(() => {
    if (!pool) return [TickMath.MIN_TICK, TickMath.MAX_TICK];

    const minTick = nearestUsableTick(TickMath.MIN_TICK, pool.tickSpacing);
    const maxTick = nearestUsableTick(TickMath.MAX_TICK, pool.tickSpacing);

    return [minTick, maxTick];
  }, [pool]);

  // init Jetton
  useEffect(() => {
    if (!pool || !queryClient) return;

    (async () => {
      const jetton0 = parseJetton(pool.token1);
      const jetton1 = parseJetton(pool.token2);

      await jetton0.setWalletAddress(
        queryClient,
        Address.parse(process.env.NEXT_PUBLIC_ROUTER_ADDRESS || "")
      );
      await jetton1.setWalletAddress(
        queryClient,
        Address.parse(process.env.NEXT_PUBLIC_ROUTER_ADDRESS || "")
      );

      setJettons([jetton0, jetton1]);
    })();
  }, [pool, queryClient]);

  // this init the tickLower and tickUpper for a position
  useEffect(() => {
    if (!pool || !minTick || !maxTick) return;

    (async () => {
      const nearestActiveTick = nearestUsableTick(pool.tick, pool.tickSpacing);
      const activeTick =
        nearestActiveTick > pool.tick
          ? nearestActiveTick
          : nearestActiveTick - pool.tickSpacing;

      const lowerTick =
        activeTick - INIT_NUM_TICK >= minTick
          ? activeTick - INIT_NUM_TICK
          : minTick;
      const upperTick =
        activeTick + INIT_NUM_TICK < maxTick
          ? activeTick + INIT_NUM_TICK
          : maxTick;

      setTickPair([lowerTick, upperTick]);
    })();
  }, [pool, minTick, maxTick]);

  const [priceLower, priceUpper] = useMemo(() => {
    if (!jettons[0] || !jettons[1]) return [null, null];

    const tickLower = tickPair[0];
    const tickUpper = tickPair[1];

    console.log({ tickPair });

    const price0 = tickToPrice(jettons[0], jettons[1], tickLower);
    const price1 = tickToPrice(jettons[0], jettons[1], tickUpper);

    console.log({
      price0: price0.toSignificant(6),
      price1: price1.toSignificant(6),
    });

    return [price0, price1];
  }, [tickPair, jettons]);

  return {
    priceLower,
    priceUpper,
    tickPair,
    minTick,
    maxTick,
    jettons,
    setTickPair,
  };
};
