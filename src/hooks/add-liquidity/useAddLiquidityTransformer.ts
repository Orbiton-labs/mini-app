import { Pool } from "@/types/Pool";
import Decimal from "decimal.js";
import { useMemo, useState } from "react";

export const useAddLiquidityTransformer = (pool: Pool) => {
  const [isToken0Base, setIsToken0Base] = useState<boolean>(true);

  const [base, quote] = useMemo(() => {
    if (!pool) return [null, null];

    const t0 = pool.token1.symbol;
    const t1 = pool.token2.symbol;
    if (isToken0Base) {
      return [t0, t1];
    }
    return [t1, t0];
  }, [isToken0Base, pool]);

  const price = useMemo(() => {
    if (!pool) return 0;

    const price = new Decimal(pool.sqrtPrice).div(2 ** 96).pow(2);
    return isToken0Base ? price : new Decimal(1).div(price);
  }, [pool, isToken0Base]);

  return {
    base,
    quote,
    price,
    isToken0Base,
    setIsToken0Base,
  };
};
