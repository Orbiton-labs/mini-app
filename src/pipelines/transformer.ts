import { FEE_TIER_SCALE } from "@/constants/contract";
import { PTON_MASTER } from "@/constants/pton";
import { UNKNOWN_IMAGE_URL } from "@/constants/unknown";
import {
  ListPositionInPoolQuery,
  PoolListQueryQuery,
} from "@/graphql/generated/graphql";
import { checkPositionType } from "@/helper/filter";
import { Pool } from "@/types/Pool";
import { Position } from "@/types/Position";
import { TokenInfo, TokenType } from "@/types/Token";
import { Address } from "@ton/core";

export const positionTransform = (
  positionList: ListPositionInPoolQuery | undefined
): Position[] => {
  if (!positionList) return [];

  return positionList.position.map((position, index): Position => {
    const liquidity = position.liquidity;
    const tickLower = Number(position.tickLower);
    const tickUpper = Number(position.tickUpper);
    const currentTick = Number(position.pool!.tick);

    return {
      id: index,
      address: position.id,
      owner: position.owner,
      token0: jettonTransform(position.jetton0!),
      token1: jettonTransform(position.jetton1!),
      amount0: Number(position.depositedJetton0),
      amount1: Number(position.depositedJetton1),
      tickLower,
      tickUpper,
      liquidity,
      pool: {
        address: position.pool!.id,
        tick: currentTick,
        sqrtPrice: position.pool!.sqrtPrice,
      },
      fee1Earned: Number(position.collectedFeeJetton0),
      fee2Earned: Number(position.collectedFeeJetton1),
      status: checkPositionType(liquidity, tickLower, tickUpper, currentTick),
      createdAt: "Unknown",
    };
  });
};

export const poolTransform = (
  poolList: PoolListQueryQuery | undefined
): Pool[] => {
  if (!poolList) return [];

  return poolList.pool.map((pool): Pool => {
    return {
      address: pool.id,
      token1: jettonTransform(pool.jetton0!),
      token2: jettonTransform(pool.jetton1!),
      feeTier: (Number(pool.feeTier) / FEE_TIER_SCALE).toString(),
      tvl: Number(pool.totalValueLockedUSD),
      volume24h: Number(pool.volumeUSD),
      apr: 0,
      txCount: Number(pool.txCount),
      feesUSD: Number(pool.feesUSD),
      jetton0Price: Number(pool.jetton0Price),
      jetton1Price: Number(pool.jetton1Price),
      tickSpacing: Number(pool.tickSpacing),
      tick: Number(pool.tick),
      liquidity: pool.liquidity,
      sqrtPrice: pool.sqrtPrice,
    };
  });
};

export const jettonTransform = (jetton: {
  id: string;
  image?: string | null;
  name: string;
  symbol: string;
  derivedUSD: string;
  decimals: number;
}): TokenInfo => {
  if (Address.parse(jetton.id).equals(Address.parse(PTON_MASTER))) {
    return {
      type: TokenType.JETTON,
      address: jetton.id,
      name: jetton.name,
      symbol: "TON",
      image: "https://assets.dedust.io/images/ton.webp",
      decimals: jetton.decimals,
      price: Number(jetton.derivedUSD),
    };
  }

  return {
    type: TokenType.JETTON,
    address: jetton.id,
    name: jetton.name,
    symbol: jetton.symbol,
    image: jetton.image || UNKNOWN_IMAGE_URL,
    decimals: jetton.decimals,
    price: Number(jetton.derivedUSD),
  };
};
