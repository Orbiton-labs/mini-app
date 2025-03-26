// src/store/pending-tx-store.ts
import { logger } from "@/helper/zustand/middleware/logger";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { useTonWalletStore } from "./ton-wallet-store";
import { PendingTxState } from "./types";

export const usePendingTxStore = create<
    PendingTxState & {
        toggle: () => void,
        setPendingTxStore: (title: string, description: string, txHash: string) => void,
        checkPendingTx: () => Promise<void>
    }
>()(
    devtools(
        persist(
            logger((set, get) => ({
                show: false,
                title: '',
                description: '',
                txHash: '',
                toastInfo: null,
                latestTransaction: null,
                toggle: () => set((state) => ({ show: !state.show })),
                checkPendingTx: async () => {
                    try {
                        console.log('Checking pending transaction...');
                        const tonApiClient = useTonWalletStore.getState().getTonApiClient();

                        const txHash = get().txHash || get().latestTransaction?.txHash;

                        if (txHash) {
                            set({
                                show: true,
                                title: get().latestTransaction?.title || '',
                                description: get().latestTransaction?.description || '',
                                txHash: txHash
                            });
                        }

                        if (!txHash) {
                            console.log('Tx hash not found');
                            return;
                        }
                        console.log("checking tx hash", txHash);
                        const event = await tonApiClient.events.getEvent(txHash, {});
                        if (event.inProgress) {
                            console.dir(
                                event.actions.map((item) => {
                                    return {
                                        type: item.type,
                                        status: item.status,
                                    };
                                }),
                            );
                        } else {
                            console.log('Transaction confirmed!');
                            console.dir(
                                event.actions.map((item) => {
                                    return {
                                        type: item.type,
                                        status: item.status,
                                    };
                                }),
                            );

                            const title = get().title || get().latestTransaction?.title || '';
                            const description = get().description || get().latestTransaction?.description || '';

                            set({
                                latestTransaction: null,
                                toastInfo: {
                                    title: `${title} successful!`,
                                    description,
                                    txHash
                                }
                            });

                            set({ show: false, title: '', description: '', txHash: '' });
                        }
                    } catch (error) { }
                },
                setPendingTxStore: (title: string, description: string, txHash: string) => {
                    set({
                        show: true,
                        title,
                        description,
                        txHash,
                        latestTransaction: { title, description, txHash }
                    });
                },
            }), "pending-tx"),
            {
                name: 'pending-tx-storage',
                partialize: (state) => ({
                    latestTransaction: state.latestTransaction
                }),
            }
        )
    )
);

// Check for pending transaction when the app loads
if (typeof window !== 'undefined') {
    const store = usePendingTxStore.getState();
    if (store.latestTransaction) {
        store.checkPendingTx();
    }
}