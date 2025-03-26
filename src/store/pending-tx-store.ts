// src/store/pending-tx-store.ts
import { logger } from "@/helper/zustand/middleware/logger";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
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
        logger((set, get) => ({
            show: false,
            title: '',
            description: '',
            txHash: '',
            toastInfo: null,
            toggle: () => set((state) => ({ show: !state.show })),
            checkPendingTx: async () => {
                try {
                    const tonApiClient = useTonWalletStore.getState().tonApiClient;

                    if (!tonApiClient) {
                        console.log('Ton API client not found');
                        return;
                    }

                    const txHash = get().txHash;

                    if (!txHash) {
                        console.log('Tx hash not found');
                        return;
                    }

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

                        set({
                            toastInfo: {
                                title: `${get().title} successful!`,
                                description: get().description,
                                txHash: get().txHash
                            }
                        });

                        set({ show: false, title: '', description: '', txHash: '' });
                    }
                } catch (error) { }
            },
            setPendingTxStore: (title: string, description: string, txHash: string) => set({ show: true, title, description, txHash }),
        }), "pending-tx")
    )
);