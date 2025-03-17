// src/store/types.ts
import { FeeTier } from "@/types/FeeTier";
import { Pool } from "@/types/Pool";
import { Token } from "@/types/Token";
import {
  TransactionCreatePoolEstimation,
  TransactionSwapEstimation,
} from "@/types/Transaction";
import { WalletVersion } from "@orbiton_labs/v3-contracts-sdk/build/@types";
import { TonApiClient } from "@ton-api/client";
import { Sender, SenderArguments } from "@ton/core";
import { TonClient } from "@ton/ton";
import {
  TonConnectUI,
  Wallet,
  WalletInfoWithOpenMethod,
} from "@tonconnect/ui-react";

export interface TonWalletState {
  queryClient: TonClient | null;
  tonApiClient: TonApiClient | null;
  friendlyAddress: string | null;
  rawAddress: string | null;
  wallet: Wallet | (Wallet & WalletInfoWithOpenMethod) | null;
  ui: TonConnectUI | null;
  sender:
  | (Sender & {
    sendMultiple: (args: SenderArguments[]) => Promise<void>;
  })
  | null;
  balance: number;
  accounts: string[];
  balanceLoading: boolean;
  walletVersion: WalletVersion | null;
}

export interface TokenListState {
  tokensList: Record<string, Token>;
  filteredTokens: Token[];
}

export interface SwapState {
  token1: Token | null;
  token2: Token | null;
  swapMessage: SenderArguments[] | null;
  transactionEstimation?: TransactionSwapEstimation;
}

export interface CreatePoolState {
  token1: Token | null;
  token2: Token | null;
  feeTier: FeeTier | null;
  existPoolFeeTier: FeeTier[];
  transactionEstimation?: TransactionCreatePoolEstimation;
}

export interface PendingTxState {
  show: boolean;
}

export interface PoolState {
  poolList: Pool[];
  selectedPool: Pool | null;
}
