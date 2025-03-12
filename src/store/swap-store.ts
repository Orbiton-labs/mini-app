import { simulateSwap } from "@/apis/server/swap";
import { DEFAULT_PAIR_MAINNET, DEFAULT_PAIR_TESTNET } from "@/constants/default-pair";
import { logger } from "@/helper/zustand/middleware/logger";
import { Token } from "@/types/Token";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { useTokenListStore } from "./token-list-store";
import { SwapState } from "./types";

const defaultPair = process.env.NEXT_PUBLIC_ENVIRONMENT === "mainnet" ? DEFAULT_PAIR_MAINNET : DEFAULT_PAIR_TESTNET;

export const useSwapStore = create<
    SwapState & {
        setToken1: (token: Token) => Promise<void>;
        setToken2: (token: Token) => Promise<void>;
        setPair: (token1: Token, token2: Token) => void;
        setAmount1: (amount: string | undefined) => Promise<void>;
        setAmount2: (amount: string | undefined) => Promise<void>;
        reverseOrder: () => Promise<void>;
    }
>()(
    devtools(
        logger(
            (set, get) => ({
                token1: {
                    token: defaultPair[0]
                },
                token2: {
                    token: defaultPair[1]
                },
                transactionEstimation: undefined,
                setToken1: async (token) => {
                    set({ token1: token });
                    const tokenListStore = useTokenListStore.getState();
                    tokenListStore.getFilteredTokens([
                        token,
                        get().token2,
                    ]);
                },
                setToken2: async (token) => {
                    set({ token2: token });
                    const tokenListStore = useTokenListStore.getState();
                    tokenListStore.getFilteredTokens([
                        get().token1,
                        token,
                    ]);
                },
                setPair: (token1, token2) => {
                    set({ token1, token2 });
                    const tokenListStore = useTokenListStore.getState();
                    tokenListStore.getFilteredTokens([
                        token1,
                        token2,
                    ]);
                },
                setAmount1: async (amount) => {
                    const token1 = get().token1;
                    const token2 = get().token2;

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
                    const { token1, token2 } = get();
                    set({ token1: token2, token2: token1, transactionEstimation: undefined });

                    if (token2?.amount && token1) {
                        const simulateRes = await simulateSwap(token1.token, token2.token, token2?.amount);
                        if (!simulateRes) return;

                        set({ transactionEstimation: simulateRes.txEstimation });
                    }
                },
            }), "swap")
    )
);