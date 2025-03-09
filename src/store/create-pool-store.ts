// src/store/create-pool-store.ts
import { simulateCreatePool } from "@/apis/server/pool";
import { logger } from "@/helper/zustand/middleware/logger";
import { FeeTier } from "@/types/FeeTier";
import { Token } from "@/types/Token";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { autoInit } from "./middlewares/auto-init";
import { useTokenListStore } from "./token-list-store";
import { CreatePoolState } from "./types";

export const useCreatePoolStore = create<
    CreatePoolState & {
        init: () => Promise<void>;
        setToken1: (token: Token) => void;
        setToken2: (token: Token) => void;
        setAmount1: (amount: string | undefined) => Promise<void>;
        setAmount2: (amount: string | undefined) => Promise<void>;
        setFeeTier: (feeTier: FeeTier) => void;
    }
>()(
    devtools(
        logger(
            autoInit((set, get) => ({
                token1: null,
                token2: null,
                feeTier: null,
                existPoolFeeTier: [],
                transactionEstimation: undefined,
                init: async () => {
                    const tokenListStore = useTokenListStore.getState();
                    const tokens = await tokenListStore.getTokenList();
                    set({ token1: tokens[0] || null, token2: tokens[1] || null });
                },
                setToken1: (token) => {
                    set({ token1: token });
                    useTokenListStore.getState().getFilteredTokens([token, get().token2]);
                },
                setToken2: (token) => {
                    set({ token2: token });
                    useTokenListStore.getState().getFilteredTokens([get().token1, token]);
                },
                setFeeTier: (feeTier) => set({ feeTier }),
                setAmount1: async (amount) => {
                    const { token1, token2, feeTier } = get();
                    if (!token2?.token) return;

                    set({ token2: { ...token2, amount: "0" }, transactionEstimation: undefined });
                    if (token1) {
                        set({ token1: { ...token1, amount } });
                        if (!amount || !feeTier) return;

                        const simulateRes = await simulateCreatePool(token1.token, token2.token, feeTier);
                        if (!simulateRes) return;

                        set({ transactionEstimation: simulateRes });
                    }
                },
                setAmount2: async (amount) => {
                    const { token2 } = get();
                    if (token2) set({ token2: { ...token2, amount } });
                },
            })), "create-pool")
    )
);