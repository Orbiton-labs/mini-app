import { logger } from "@/helper/zustand/middleware/logger";
import { Wallet, WalletInfoWithOpenMethod } from "@tonconnect/ui-react";
import { StateCreator } from "zustand";

export interface TonWalletSlice {
  friendlyAddress: string | null;
  rawAddress: string | null;
  wallet: Wallet | (Wallet & WalletInfoWithOpenMethod) | null;
  balance: number;
  accounts: string[];
  balanceLoading: boolean;
  initWallet: (
    friendlyAddress: string,
    rawAddress: string,
    wallet: Wallet | (Wallet & WalletInfoWithOpenMethod) | null
  ) => void;
}

export const createTonWalletSlice: StateCreator<TonWalletSlice, [], []> =
  logger((set, get) => ({
    friendlyAddress: null,
    rawAddress: null,
    accounts: [],
    balance: 0,
    wallet: null,
    balanceLoading: false,
    initWallet: (
      friendlyAddress: string,
      rawAddress: string,
      wallet: Wallet | (Wallet & WalletInfoWithOpenMethod) | null
    ) => {
      set((state) => ({
        friendlyAddress,
        rawAddress,
        wallet,
      }));
    },
  }));
