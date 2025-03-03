import { FeeTier } from "./FeeTier";
import { TokenInfo } from "./Token";

export type Position = {
    id: number;
    pool: string;
    token0: TokenInfo;
    token1: TokenInfo;
    feeTier: FeeTier;
    priceLower: string;
    priceUpper: string;
    amount0: string;
    amount1: string;
    valueUSD: string;
    createdAt: string;
}