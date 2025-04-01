import { WALLET_VERSION } from "@/constants/wallet-version";
import { logger } from "@/helper/zustand/middleware/logger";
import { Sender } from "@/types/Sender";
import { getHttpEndpoint, Network } from "@orbs-network/ton-access"; // src/store/ton-wallet-store.ts
import { TonApiClient } from "@ton-api/client";
import { Address } from "@ton/core";
import { TonClient } from "@ton/ton";
import {
  TonConnectUI,
  Wallet,
  WalletInfoWithOpenMethod,
} from "@tonconnect/ui-react";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { autoInit } from "./middlewares/auto-init";
import { useSwapStore } from "./swap-store";
import { useTokenListStore } from "./token-list-store";
import { TonWalletState } from "./types";

export const useTonWalletStore = create<
  TonWalletState & {
    init: () => Promise<void>;
    initWallet: (
      friendlyAddress: string,
      rawAddress: string,
      wallet: Wallet | (Wallet & WalletInfoWithOpenMethod) | null,
      ui: TonConnectUI | null,
      sender: Sender | null,
    ) => Promise<void>;
    loadWalletVersion: () => Promise<void>;
    getTonApiClient: () => TonApiClient;
  }
>()(
  devtools(
    logger(
      autoInit((set, get) => ({
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
        walletVersion: null,
        initWallet: async (friendlyAddress, rawAddress, wallet, ui, sender) => {
          set({ friendlyAddress, rawAddress, wallet, ui, sender });
          const tokenListStore = useTokenListStore.getState();
          if (!ui?.connected) {
            tokenListStore.resetBalance();
          }

          const tonApiClient = get().tonApiClient;
          console.log("tonApiClient && rawAddress", tonApiClient && rawAddress);
          if (tonApiClient && rawAddress) {
            const walletRes = await tonApiClient.accounts.getAccount(
              Address.parse(rawAddress)
            );

            console.log(
              "interface",
              walletRes.interfaces?.[0].slice(7).toLocaleUpperCase()
            );

            const walletVer = WALLET_VERSION.find(
              (wallet) => wallet.string === walletRes.interfaces?.[0].slice(7)
            );

            if (walletVer) {
              set({
                walletVersion: walletVer.type,
              });
            }
          }
          await tokenListStore.fetchAccountData();

          const swapStore = useSwapStore.getState();
          const amount1 = swapStore.token1?.amount;
          swapStore.reload(amount1);
        },
        init: async () => {
          const endpoint = await getHttpEndpoint({
            network:
              (process.env.NEXT_PUBLIC_ENVIRONMENT as Network) || "mainnet",
          });
          const client = new TonClient({ endpoint });
          const tonApiClient = new TonApiClient({
            baseUrl:
              process.env.NEXT_PUBLIC_TON_API_BASE_URL || "https://tonapi.io",
            apiKey: process.env.NEXT_PUBLIC_TON_API_KEY || undefined,
          });
          set({ queryClient: client, tonApiClient });
          console.log(
            "Initialized Ton Client with orb network & Ton API  Client!"
          );
        },
        loadWalletVersion: async () => {
          const tonApiClient = get().tonApiClient;
          const rawAddress = get().rawAddress;
          console.log("tonApiClient && rawAddress", tonApiClient && rawAddress);
          if (tonApiClient && rawAddress) {
            const walletRes = await tonApiClient.accounts.getAccount(
              Address.parse(rawAddress)
            );

            console.log(
              "interface",
              walletRes.interfaces?.[0].slice(7).toLocaleUpperCase()
            );

            const walletVer = WALLET_VERSION.find(
              (wallet) => wallet.string === walletRes.interfaces?.[0].slice(7)
            );

            if (walletVer) {
              set({
                walletVersion: walletVer.type,
              });
            }
          }
        },
        getTonApiClient: () => {
          let tonApiClient = get().tonApiClient;
          if (!tonApiClient) {
            tonApiClient = new TonApiClient({
              baseUrl:
                process.env.NEXT_PUBLIC_TON_API_BASE_URL || "https://tonapi.io",
              apiKey: process.env.NEXT_PUBLIC_TON_API_KEY || undefined,
            });
            set({ tonApiClient });
          }
          return tonApiClient;
        },
      })),
      "ton-wallet"
    )
  )
);
