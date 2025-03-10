// src/store/swap-store.ts
import { simulateSwap } from "@/apis/server/swap";
import { logger } from "@/helper/zustand/middleware/logger";
import { Token } from "@/types/Token";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { autoInit } from "./middlewares/auto-init";
import { useTokenListStore } from "./token-list-store";
import { SwapState } from "./types";

export const useSwapStore = create<
    SwapState & {
        init: () => Promise<void>;
        setToken1: (token: Token) => Promise<void>;
        setToken2: (token: Token) => Promise<void>;
        setAmount1: (amount: string | undefined) => Promise<void>;
        setAmount2: (amount: string | undefined) => Promise<void>;
        reverseOrder: () => Promise<void>;
    }
>()(
    devtools(
        logger(
            autoInit((set, get) => ({
                token1Key: null,
                token2Key: null,
                transactionEstimation: undefined,
                init: async () => {
                    const tokenListStore = useTokenListStore.getState();
                    const tokens = await tokenListStore.getTokenList();
                    const tokenKeys = Object.keys(tokens);
                    const token1Key = tokenKeys[0] || null;
                    const token2Key = tokenKeys[1] || null;
                    set({ token1Key, token2Key });
                },
                setToken1: async (token) => {
                    const key = token.token.address || token.token.name; // Adjust based on your Token structure
                    set({ token1Key: key });
                    const tokenListStore = useTokenListStore.getState();
                    tokenListStore.getFilteredTokens([
                        tokenListStore.getTokenByKey(key) || null,
                        tokenListStore.getTokenByKey(get().token2Key || "") || null,
                    ]);
                },
                setToken2: async (token) => {
                    const key = token.token.address || token.token.name;
                    set({ token2Key: key });
                    const tokenListStore = useTokenListStore.getState();
                    tokenListStore.getFilteredTokens([
                        tokenListStore.getTokenByKey(get().token1Key || "") || null,
                        tokenListStore.getTokenByKey(key) || null,
                    ]);
                },
                setAmount1: async (amount) => {
                    const tokenListStore = useTokenListStore.getState();
                    const token1 = tokenListStore.getTokenByKey(get().token1Key || "");
                    const token2 = tokenListStore.getTokenByKey(get().token2Key || "");

                    if (!token2?.token) return;

                    set({ transactionEstimation: undefined });
                    if (token1) {
                        if (!amount) {
                            set({ transactionEstimation: undefined });
                            return;
                        }

                        const simulateRes = await simulateSwap(token1.token, token2.token, amount);
                        if (!simulateRes) return;

                        set({ transactionEstimation: simulateRes.txEstimation });
                    }
                },
                setAmount2: async (amount) => { },
                reverseOrder: async () => {
                    const { token1Key, token2Key } = get();
                    set({ token1Key: token2Key, token2Key: token1Key });

                    const tokenListStore = useTokenListStore.getState();
                    tokenListStore.getFilteredTokens([
                        tokenListStore.getTokenByKey(token2Key || "") || null,
                        tokenListStore.getTokenByKey(token1Key || "") || null,
                    ]);

                    const token1 = tokenListStore.getTokenByKey(token1Key || "");
                    const token2 = tokenListStore.getTokenByKey(token2Key || "");

                    const amount = token1?.amount;
                    if (!token2?.token || !amount) return;

                    set({ transactionEstimation: undefined });
                    const simulateRes = await simulateSwap(token1.token, token2.token, amount);
                    if (!simulateRes) return;

                    set({ transactionEstimation: simulateRes.txEstimation });
                },
            })), "swap")
    )
);