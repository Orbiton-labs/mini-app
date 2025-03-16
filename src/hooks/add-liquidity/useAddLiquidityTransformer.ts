import { Pool } from "@/types/Pool";
import { Jetton, tickToPrice } from "@orbiton_labs/v3-contracts-sdk";
import { useMemo, useState } from "react";

export const useAddLiquidityTransformer = (
  pool: Pool,
  jettons: [Jetton | null, Jetton | null]
) => {
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
    if (!pool || !jettons[0] || !jettons[1]) return 0;

    // const price = new Decimal(pool.sqrtPrice).div(2 ** 96).pow(2);
    const price = tickToPrice(jettons[0], jettons[1], pool.tick);
    return isToken0Base
      ? price.toSignificant(6)
      : price.invert().toSignificant(6);
  }, [pool, jettons, isToken0Base]);

  return {
    base,
    quote,
    price,
    isToken0Base,
    setIsToken0Base,
  };
};
