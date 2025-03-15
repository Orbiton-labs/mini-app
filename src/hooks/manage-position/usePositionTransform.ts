import { parseJetton } from "@/helper/transform";
import { useTonWalletStore } from "@/store";
import { Pool } from "@/types/Pool";
import { Position } from "@/types/Position";
import { Jetton, Price, tickToPrice } from "@orbiton_labs/v3-contracts-sdk";
import { Address } from "@ton/core";
import Decimal from "decimal.js";
import { useEffect, useMemo, useState } from "react";

export const usePositionTransform = (position: Position, pool: Pool) => {
  const queryClient = useTonWalletStore((state) => state.queryClient);

  const [isToken0Base, setIsToken0Base] = useState<boolean>(true);
  const [prices, setPrices] = useState<
    [Price<Jetton, Jetton> | null, Price<Jetton, Jetton> | null]
  >([null, null]);

  const [base, quote] = useMemo(() => {
    if (!position) return [null, null];

    const t0 = position.token0.symbol;
    const t1 = position.token1.symbol;
    if (isToken0Base) {
      return [t0, t1];
    }
    return [t1, t0];
  }, [isToken0Base, position]);

  const [amount0Usd, amount1Usd] = useMemo(() => {
    if (!position) return [0, 0];

    return [
      position.amount0 * position.token0.price,
      position.amount1 * position.token1.price,
    ];
  }, [position]);

  const [percent0, percent1] = useMemo(() => {
    if (amount0Usd === 0 && amount1Usd === 0) return [50, 50];
    if (amount0Usd === 0) {
      return [0, 100];
    }
    if (amount1Usd === 0) {
      return [100, 0];
    }
    const total = amount0Usd + amount1Usd;
    const percent0 = (amount0Usd / total) * 100;
    const percent1 = 100 - percent0;
    return [percent0, percent1];
  }, [amount0Usd, amount1Usd]);

  useEffect(() => {
    (async () => {
      if (!position || !queryClient) {
        return;
      }

      const jetton0 = parseJetton(position.token0);
      const jetton1 = parseJetton(position.token1);

      await jetton0.setWalletAddress(
        queryClient,
        Address.parse(process.env.NEXT_PUBLIC_ROUTER_ADDRESS || "")
      );
      await jetton1.setWalletAddress(
        queryClient,
        Address.parse(process.env.NEXT_PUBLIC_ROUTER_ADDRESS || "")
      );

      const price0 = tickToPrice(jetton0, jetton1, position.tickLower);
      const price1 = tickToPrice(jetton0, jetton1, position.tickUpper);

      if (isToken0Base) {
        setPrices([price0, price1]);
        return;
      }
    })();
  }, [position, queryClient, isToken0Base]);

  const price = useMemo(() => {
    if (!position) return 0;

    const price = new Decimal(position.pool.sqrtPrice).div(2 ** 96).pow(2);
    return isToken0Base ? price : new Decimal(1).div(price);
  }, [position, isToken0Base]);

  return {
    base,
    quote,
    amount0Usd,
    amount1Usd,
    percent0,
    percent1,
    totalUsd: amount0Usd + amount1Usd,
    price0: prices[0],
    price1: prices[1],
    price,
    isToken0Base,
    setIsToken0Base,
  };
};
