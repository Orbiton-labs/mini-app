// src/store/swap-store.ts
import { getUserJettonData2 } from "@/apis/blockchain/jetton";
import { simulateSwap } from "@/apis/server/swap";
import { logger } from "@/helper/zustand/middleware/logger";
import { Token } from "@/types/Token";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { autoInit } from "./middlewares/auto-init";
import { useTokenListStore } from "./token-list-store";
import { useTonWalletStore } from "./ton-wallet-store";
import { SwapState } from "./types";

export const useSwapStore = create<
    SwapState & {
        init: () => Promise<void>;
        setToken1: (token: Token) => Promise<void>;
        setToken2: (token: Token) => Promise<void>;
        setAmount1: (amount: string | undefined) => Promise<void>;
        setAmount2: (amount: string | undefined) => Promise<void>;
        fetchToken1Amount: () => Promise<void>;
        fetchToken2Amount: () => Promise<void>;
        reverseOrder: () => Promise<void>;
    }
>()(
    devtools(
        logger(
            autoInit((set, get) => ({
                token1: null,
                token2: null,
                transactionEstimation: undefined,
                init: async () => {
                    const tokenListStore = useTokenListStore.getState();
                    const tokens = await tokenListStore.getTokenList();
                    const token1 = tokens[0] || null;
                    const token2 = tokens[1] || null;
                    set({ token1, token2 });

                    const walletStore = useTonWalletStore.getState();
                    if (token1 && token2 && walletStore.sender && walletStore.queryClient) {
                        const res1 = await getUserJettonData2(walletStore.queryClient, token1.token.address, walletStore.sender);
                        const res2 = await getUserJettonData2(walletStore.queryClient, token2.token.address, walletStore.sender);
                        set({
                            token1: { ...token1, balance: res1.balance },
                            token2: { ...token2, balance: res2.balance },
                        });
                    }
                },
                fetchToken1Amount: async () => {
                    const token = get().token1;
                    const walletStore = useTonWalletStore.getState();
                    if (token && walletStore.sender && walletStore.queryClient) {
                        const res = await getUserJettonData2(walletStore.queryClient, token.token.address, walletStore.sender);
                        set({ token1: { ...token, balance: res.balance } });
                    }
                },
                fetchToken2Amount: async () => {
                    const token = get().token2;
                    const walletStore = useTonWalletStore.getState();
                    if (token && walletStore.sender && walletStore.queryClient) {
                        const res = await getUserJettonData2(walletStore.queryClient, token.token.address, walletStore.sender);
                        set({ token2: { ...token, balance: res.balance } });
                    }
                },
                setToken1: async (token) => {
                    set({ token1: token });
                    const walletStore = useTonWalletStore.getState();
                    if (token && walletStore.sender && walletStore.queryClient) {
                        const res = await getUserJettonData2(walletStore.queryClient, token.token.address, walletStore.sender);
                        set({ token1: { ...token, balance: res.balance } });
                    }
                    useTokenListStore.getState().getFilteredTokens([token, get().token2]);
                },
                setToken2: async (token) => {
                    set({ token2: token });
                    const walletStore = useTonWalletStore.getState();
                    if (token && walletStore.sender && walletStore.queryClient) {
                        const res = await getUserJettonData2(walletStore.queryClient, token.token.address, walletStore.sender);
                        set({ token2: { ...token, balance: res.balance } });
                    }
                    useTokenListStore.getState().getFilteredTokens([get().token1, token]);
                },
                setAmount1: async (amount) => {
                    const { token1, token2 } = get();
                    if (!token2?.token) return;

                    set({ token2: { ...token2, amount: "0" }, transactionEstimation: undefined });
                    if (token1) {
                        set({ token1: { ...token1, amount } });
                        if (!amount) return;

                        const simulateRes = await simulateSwap(token1.token, token2.token, amount);
                        if (!simulateRes) return;

                        set({
                            token2: { ...token2, amount: simulateRes.amountOut },
                            transactionEstimation: simulateRes.txEstimation,
                        });
                    }
                },
                setAmount2: async (amount) => {
                    const { token2 } = get();
                    if (token2) set({ token2: { ...token2, amount } });
                },
                reverseOrder: async () => {
                    const { token1, token2 } = get();
                    set({ token1: token2, token2: token1 });
                    useTokenListStore.getState().getFilteredTokens([token2, token1]);

                    const amount = token1?.amount;
                    if (!token2?.token || !amount) return;

                    set({ token2: { ...token2, amount: "0" }, transactionEstimation: undefined });
                    const simulateRes = await simulateSwap(token1.token, token2.token, amount);
                    if (!simulateRes) return;

                    set({
                        token2: { ...token2, amount: simulateRes.amountOut },
                        transactionEstimation: simulateRes.txEstimation,
                    });
                },
            })), "swap")));