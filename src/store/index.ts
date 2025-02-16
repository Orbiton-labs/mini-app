import { logger } from "@/helper/zustand/middleware/logger";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import {
  createPairSlice,
  createWalletSwapShareSlice,
  PairSlice,
  WalletSwapShareSlice,
} from "./swap";
import { createTonWalletSlice, TonWalletSlice } from "./ton-wallet";

export type BoundStore = PairSlice & TonWalletSlice & WalletSwapShareSlice;

export const useBoundStore = create<BoundStore>()(
  devtools(
    logger((...a) => ({
      ...createPairSlice(...a),
      ...createTonWalletSlice(...a),
      ...createWalletSwapShareSlice(...a),
    }))
  )
);
