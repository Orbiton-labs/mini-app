// src/store/types.ts
import { FeeTier } from "@/types/FeeTier";
import { Pool } from "@/types/Pool";
import { Sender } from "@/types/Sender";
import { Token } from "@/types/Token";
import {
  TransactionCreatePoolEstimation,
  TransactionSwapEstimation,
} from "@/types/Transaction";
import { WalletVersion } from "@orbiton_labs/v3-contracts-sdk/build/@types";
import { TonApiClient } from "@ton-api/client";
import { SenderArguments } from "@ton/core";
import { TonClient } from "@ton/ton";
import {
  TonConnectUI,
  Wallet,
  WalletInfoWithOpenMethod,
} from "@tonconnect/ui-react";
import { CreatePoolStatus } from "./create-pool-store";

export interface TonWalletState {
  queryClient: TonClient | null;
  tonApiClient: TonApiClient | null;
  friendlyAddress: string | null;
  rawAddress: string | null;
  wallet: Wallet | (Wallet & WalletInfoWithOpenMethod) | null;
  ui: TonConnectUI | null;
  sender: Sender | null;
  balance: number;
  accounts: string[];
  balanceLoading: boolean;
  walletVersion: WalletVersion | null;
}

export interface TokenListState {
  tokensList: Record<string, Token>;
  filteredTokens: Token[];
}

export enum SwapStatus {
  IDLE = 'IDLE',
  FINDING_ROUTES = 'FINDING_ROUTES',
  NO_ROUTE_FOUND = 'NO_ROUTE_FOUND',
  INSUFFICIENT_BALANCE = 'INSUFFICIENT_BALANCE',
  INSUFFICIENT_LIQUIDITY = 'INSUFFICIENT_LIQUIDITY',
  PRICE_IMPACT_TOO_HIGH = 'PRICE_IMPACT_TOO_HIGH',
  SWAP_READY = 'SWAP_READY',
  SWAPPING = 'SWAPPING',
  SWAP_SUCCESS = 'SWAP_SUCCESS',
  SWAP_ERROR = 'SWAP_ERROR',
  CONNECT_WALLET = 'CONNECT_WALLET',
  REFETCHING = 'REFETCHING'
}

export interface SwapState {
  token1: Token | null;
  token2: Token | null;
  swapMessage: SenderArguments[] | null;
  transactionEstimation?: TransactionSwapEstimation;
  status: SwapStatus;
  error: string | null;
  priceImpact: number;
  slippage: number;
  memo: string | null;
}

export interface CreatePoolState {
  token1: Token | null;
  token2: Token | null;
  status: CreatePoolStatus;
  error: string | null;
  feeTier: FeeTier | null;
  existPoolFeeTier: FeeTier[];
  transactionEstimation?: TransactionCreatePoolEstimation;
}

export interface PendingTxState {
  show: boolean;
  title: string;
  description: string;
  txHash: string;
  toastInfo: {
    title: string;
    description: string;
    txHash: string;
  } | null;
  latestTransaction: {
    title: string;
    description: string;
    txHash: string;
  } | null;
}

export interface PoolState {
  poolList: Pool[];
  selectedPool: Pool | null;
}
