import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { createCreatePoolSlice, CreatePoolSlice } from "./create-pool";
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
    persist(
      ((...a) => ({
        ...createPairSlice(...a),
        ...createTonWalletSlice(...a),
        ...createWalletSwapShareSlice(...a),
      })),
      {
        name: "swap-store",
        storage: createJSONStorage(() => sessionStorage), // Use sessionStorage for tab-specific persistence
      }
    )
  )
);

export const useCreatePoolStore = create<CreatePoolSlice>()(
  devtools(
    persist(
      ((...a) => ({
        ...createCreatePoolSlice(...a),
      })),
      {
        name: "create-pool-store",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
