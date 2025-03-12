import { FeeTier } from "./FeeTier";
import { Position } from "./Position";
import { Token } from "./Token";

export type ActiveLiquidity = {
    price: number;
    liquidity: number;
}

export type Pool = {
    token1: Token;
    token2: Token;
    address: string;
    feeTier: FeeTier;
    tvl: string;
    volume24h: string;
    fee24h: string;
    apr: string;
    positionList?: Position[];
    activeLiquidity?: ActiveLiquidity[];
}