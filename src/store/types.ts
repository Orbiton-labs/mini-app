// src/store/types.ts
import { FeeTier } from "@/types/FeeTier";
import { Token } from "@/types/Token";
import { TransactionCreatePoolEstimation, TransactionSwapEstimation } from "@/types/Transaction";
import { Sender } from "@ton/core";
import { TonConnectUI, Wallet, WalletInfoWithOpenMethod } from "@tonconnect/ui-react";

export interface TonWalletState {
    friendlyAddress: string | null;
    rawAddress: string | null;
    wallet: Wallet | (Wallet & WalletInfoWithOpenMethod) | null;
    ui: TonConnectUI | null;
    sender: Sender | null;
    balance: number;
    accounts: string[];
    balanceLoading: boolean;
}

export interface TokenListState {
    tokensList: Token[];
    filteredTokens: Token[];
}

export interface SwapState {
    token1: Token | null;
    token2: Token | null;
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