// src/store/pending-tx-store.ts
import { logger } from "@/helper/zustand/middleware/logger";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { PendingTxState } from "./types";

export const usePendingTxStore = create<
    PendingTxState & { toggle: () => void }
>()(
    devtools(
        logger((set) => ({
            show: false,
            toggle: () => set((state) => ({ show: !state.show })),
        }), "pending-tx")
    )
);