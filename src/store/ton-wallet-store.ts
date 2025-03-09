// src/store/ton-wallet-store.ts
import { logger } from "@/helper/zustand/middleware/logger";
import { Sender } from "@ton/core";
import { TonConnectUI, Wallet, WalletInfoWithOpenMethod } from "@tonconnect/ui-react";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { TonWalletState } from "./types";

export const useTonWalletStore = create<TonWalletState & {
    initWallet: (
        friendlyAddress: string,
        rawAddress: string,
        wallet: Wallet | (Wallet & WalletInfoWithOpenMethod) | null,
        ui: TonConnectUI | null,
        sender: Sender | null
    ) => void;
}>()(
    devtools(
        logger((set) => ({
            friendlyAddress: null,
            rawAddress: null,
            wallet: null,
            ui: null,
            sender: null,
            balance: 0,
            accounts: [],
            balanceLoading: false,
            initWallet: (friendlyAddress, rawAddress, wallet, ui, sender) =>
                set({ friendlyAddress, rawAddress, wallet, ui, sender }),
        }), "ton-wallet")
    )
);