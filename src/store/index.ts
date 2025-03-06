import { logger } from "@/helper/zustand/middleware/logger";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createCreatePoolSlice, CreatePoolSlice } from "./create-pool";
import { createPendingTransactionSlice, PendingTransactionSlice } from "./pending-tx";
import {
  createPairSlice,
  createWalletSwapShareSlice,
  PairSlice,
  WalletSwapShareSlice,
} from "./swap";
import { createTonWalletSlice, TonWalletSlice } from "./ton-wallet";

export type SwapStore = PairSlice & TonWalletSlice & WalletSwapShareSlice;

export const useSwapStore = create<SwapStore>()(
  devtools(
    logger((...a) => ({
      ...createPairSlice(...a),
      ...createTonWalletSlice(...a),
      ...createWalletSwapShareSlice(...a),
    }))
  )
);

export type CreatePoolStore = CreatePoolSlice;

export const useCreatePoolStore = create<CreatePoolStore>()(
  devtools(
    logger((...a) => ({
      ...createCreatePoolSlice(...a),
    }))
  )
);

export type PendingTransactionStore = PendingTransactionSlice;

export const usePendingTransactionStore = create<PendingTransactionStore>()(
  devtools(
    logger((...a) => ({
      ...createPendingTransactionSlice(...a),
    }))
  )
);
