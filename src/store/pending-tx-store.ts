// src/store/pending-tx-store.ts
import { logger } from "@/helper/zustand/middleware/logger";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { PendingTxState } from "./types";

export const usePendingTxStore = create<
    PendingTxState & {
        toggle: () => void,
        setPendingTxStore: (title: string, description: string, txHash: string) => void,
        checkPendingTx: () => Promise<void>
    }
>()(
    devtools(
        logger((set) => ({
            show: false,
            title: '',
            description: '',
            txHash: '',
            toggle: () => set((state) => ({ show: !state.show })),
            checkPendingTx: async () => {
                
            },
            setPendingTxStore: (title: string, description: string, txHash: string) => set({ title, description, txHash }),
        }), "pending-tx")
    )
);