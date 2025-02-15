import { logger } from "@/helper/zustand/middleware/logger";
import { Sender } from "@ton/core";
import {
  TonConnectUI,
  Wallet,
  WalletInfoWithOpenMethod,
} from "@tonconnect/ui-react";
import { StateCreator } from "zustand";

export interface TonWalletSlice {
  friendlyAddress: string | null;
  rawAddress: string | null;
  wallet: Wallet | (Wallet & WalletInfoWithOpenMethod) | null;
  ui: TonConnectUI | null;
  sender: Sender | null;
  balance: number;
  accounts: string[];
  balanceLoading: boolean;
  initWallet: (
    friendlyAddress: string,
    rawAddress: string,
    wallet: Wallet | (Wallet & WalletInfoWithOpenMethod) | null,
    ui: TonConnectUI | null,
    sender: Sender | null
  ) => void;
}

export const createTonWalletSlice: StateCreator<TonWalletSlice, [], []> =
  logger((set, get) => ({
    friendlyAddress: null,
    rawAddress: null,
    accounts: [],
    balance: 0,
    wallet: null,
    ui: null,
    sender: null,
    balanceLoading: false,
    initWallet: (
      friendlyAddress: string,
      rawAddress: string,
      wallet: Wallet | (Wallet & WalletInfoWithOpenMethod) | null,
      ui: TonConnectUI | null,
      sender: Sender | null
    ) => {
      set((state) => ({
        friendlyAddress,
        rawAddress,
        wallet,
        ui,
        sender,
      }));
    },
  }));
