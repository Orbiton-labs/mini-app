import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createPairSlice, PairSlice } from "./swap";
import { createTonWalletSlice, TonWalletSlice } from "./ton-wallet";

export type BoundStore = PairSlice & TonWalletSlice;

export const useBoundStore = create<BoundStore>()(
  devtools((...a) => ({
    ...createPairSlice(...a),
    ...createTonWalletSlice(...a),
  }))
);
