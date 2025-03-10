import { logger } from "@/helper/zustand/middleware/logger";
import { getHttpEndpoint, Network } from "@orbs-network/ton-access"; // src/store/ton-wallet-store.ts
import { TonApiClient } from '@ton-api/client';
import { Sender } from "@ton/core";
import { TonClient } from "@ton/ton";
import { TonConnectUI, Wallet, WalletInfoWithOpenMethod } from "@tonconnect/ui-react";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { autoInit } from "./middlewares/auto-init";
import { useSwapStore } from "./swap-store";
import { TonWalletState } from "./types";
import { useTokenListStore } from "./token-list-store";

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
                tonApiClient: null,
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

                    // const swapStore = useSwapStore.getState();
                    // await swapStore.fetchToken1Amount();
                    // await swapStore.fetchToken2Amount();

                    const tokenListStore = useTokenListStore.getState();
                    await tokenListStore.fetchAccountData();
                }
                ,
                init: async () => {
                    const endpoint = await getHttpEndpoint({
                        network: process.env.NEXT_PUBLIC_ENVIRONMENT as Network || "mainnet"
                    });
                    const client = new TonClient({ endpoint });
                    const tonApiClient = new TonApiClient({
                        baseUrl: process.env.NEXT_PUBLIC_TON_API_BASE_URL || "https://tonapi.io",
                        apiKey: process.env.NEXT_PUBLIC_TON_API_KEY || undefined
                    })
                    set({ queryClient: client, tonApiClient });
                    console.log("Initialized Ton Client with orb network & Ton API  Client!")
                }
            })), "ton-wallet")
    )
);