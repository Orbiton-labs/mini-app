import { useTonWalletStore } from "@/store";
import { PoolWrapper } from "@orbiton_labs/v3-contracts-sdk";
import { Address, OpenedContract } from "@ton/core";
import { TonClient } from "@ton/ton";
import { useEffect, useState } from "react";

export interface GraphTick {
  tickIdx: string;
  liquidityGross: string;
  liquidityNet: string;
}

export async function getAllTicks(
  client: TonClient | null,
  poolAddress: string | undefined
): Promise<GraphTick[] | undefined> {
  if (!client || !poolAddress) return undefined;

  const poolContract = new PoolWrapper.Pool(Address.parse(poolAddress));
  const pool = client.open(poolContract) as OpenedContract<PoolWrapper.Pool>;

  const ticksInfo = await pool.getTicks();

  const ticks = ticksInfo.map(([tickIdx, tickInfo]) => ({
    tickIdx: tickIdx.toString(),
    liquidityGross: tickInfo.liquidity_gross.toString(),
    liquidityNet: tickInfo.liquidity_net.toString(),
  }));

  const sortedTicks = ticks.sort(
    (a, b) => Number(a.tickIdx) - Number(b.tickIdx)
  );

  console.log("ticks from contract", sortedTicks);

  return sortedTicks;
}

export function useAllTicks(poolAddress: string | undefined) {
  const [ticks, setTicks] = useState<GraphTick[] | undefined>();
  const client = useTonWalletStore((state) => state.queryClient);

  useEffect(() => {
    if (!poolAddress || !client) return;
    getAllTicks(client, poolAddress).then(setTicks);
  }, [poolAddress, client]);

  return ticks;
}
