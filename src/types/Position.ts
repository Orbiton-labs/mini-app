import { TokenInfo } from "./Token";

export enum PositionStatus {
  IN_RANGE = "In range",
  OUT_RANGE = "Out range",
  CLOSED = "Closed",
}

export type Position = {
  id: number;
  address: string;
  owner: string;
  token0: TokenInfo;
  token1: TokenInfo;
  amount0: number;
  amount1: number;
  tickLower: number;
  tickUpper: number;
  liquidity: string;
  pool: {
    address: string;
    tick: number;
    sqrtPrice: string;
  };
  fee1Earned: number;
  fee2Earned: number;
  status: PositionStatus;
  createdAt: string;
};
