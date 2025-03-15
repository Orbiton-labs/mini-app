import { useCallback, useEffect, useMemo } from "react";

import { useInfoTickData } from "@/hooks/pool-detail/usePoolTickData";
import { Pool } from "@/types/Pool";
import { ChartEntry } from "./types";

export function useDensityChartData({
  poolAddr,
  pool,
  isSorted,
}: {
  poolAddr: string;
  pool: Pool | undefined | null;
  isSorted: boolean;
}) {
  const {
    fetchTicksSurroundingPrice: {
      ticksResult,
      fetchTicksSurroundingPrice,
      ticksLoading,
    },
  } = useInfoTickData();

  useEffect(() => {
    if (!pool) return;
    fetchTicksSurroundingPrice(pool, poolAddr);
  }, [pool]);

  const formatData = useCallback(() => {
    if (!ticksResult) {
      return undefined;
    }

    const data = ticksResult.ticksProcessed;

    const newData: ChartEntry[] = [];

    for (let i = 0; i < data.length; i++) {
      const t = data[i];

      const chartEntry: ChartEntry = {
        liquidity: parseFloat(t.liquidityActive.toString()),
        price: isSorted
          ? parseFloat(t.price0.toString())
          : parseFloat(t.price1.toString()),
      };

      if (chartEntry.liquidity > 0) {
        newData.push(chartEntry);
      }
    }

    return newData;
  }, [ticksResult, isSorted]);

  return useMemo(
    () => ({
      isLoading: ticksLoading,
      formattedData: !ticksLoading ? formatData() : undefined,
    }),
    [ticksLoading, formatData]
  );
}
