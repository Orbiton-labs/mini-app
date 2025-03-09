import { logger } from "@/helper/zustand/middleware/logger";
import { getHttpEndpoint } from "@orbs-network/ton-access"; // src/store/ton-wallet-store.ts
import { Sender } from "@ton/core";
import { TonClient } from "@ton/ton";
import { TonConnectUI, Wallet, WalletInfoWithOpenMethod } from "@tonconnect/ui-react";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { autoInit } from "./middlewares/auto-init";
import { useSwapStore } from "./swap-store";
import { TonWalletState } from "./types";


export const useTonWalletStore = create<TonWalletState & {
    init: () => Promise<void>;
    initWallet: (
        friendlyAddress: string,
        rawAddress: string,
        wallet: Wallet | (Wallet & WalletInfoWithOpenMethod) | null,
        ui: TonConnectUI | null,
        sender: Sender | null
    ) => Promise<void>;
}>()(
    devtools(
        logger(
            autoInit((set) => ({
                queryClient: null,
                friendlyAddress: null,
                rawAddress: null,
                wallet: null,
                ui: null,
                sender: null,
                balance: 0,
                accounts: [],
                balanceLoading: false,
                initWallet: async (friendlyAddress, rawAddress, wallet, ui, sender) => {
                    set({ friendlyAddress, rawAddress, wallet, ui, sender })

                    const swapStore = useSwapStore.getState();
                    await swapStore.fetchToken1Amount();
                    await swapStore.fetchToken2Amount();
                }
                ,
                init: async () => {
                    const endpoint = await getHttpEndpoint({
                        network: 'mainnet'
                    });
                    const client = new TonClient({ endpoint });
                    set({ queryClient: client });
                    console.log("Initialized Ton Client with orb network!")
                }
            })), "ton-wallet")
    )
);