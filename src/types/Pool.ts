import { TokenInfo } from "./Token";

export type Pool = {
  address: string;
  token1: TokenInfo;
  token2: TokenInfo;
  feeTier: string;
  tvl: number;
  volume24h: number;
  apr: number;
  txCount: number;
  feesUSD: number;
  jetton0Price: number;
  jetton1Price: number;
  tickSpacing: number;
  tick: number;
  liquidity: string;
  sqrtPrice: string;
};
