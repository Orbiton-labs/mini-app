import { simulateSwap } from "@/apis/server/swap";
import { DEFAULT_PAIR_MAINNET, DEFAULT_PAIR_TESTNET } from "@/constants/default-pair";
import { logger } from "@/helper/zustand/middleware/logger";
import { Token } from "@/types/Token";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { useTokenListStore } from "./token-list-store";
import { useTonWalletStore } from "./ton-wallet-store";
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
        swap: () => Promise<void>;
        resetInputSwap: () => void;
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
                swapMessage: null,
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

                    if (!token2?.token || !token2.token.address) return;

                    set({ transactionEstimation: undefined });
                    if (token1 && token1.token.address) {
                        if (!amount) {
                            set({ transactionEstimation: undefined });
                            return;
                        }

                        const walletStore = useTonWalletStore.getState();
                        const sender = walletStore.friendlyAddress;

                        if (!sender) return;

                        const simulateRes = await simulateSwap(token1.token.address, token2.token.address, amount, sender);
                        if (!simulateRes) return;

                        set({
                            swapMessage: simulateRes.messages, token2: {
                                ...get().token2!,
                                amount: simulateRes.returnAmount
                            }
                        });

                        // set({ transactionEstimation: simulateRes.txEstimation });
                    }
                },
                setAmount2: async (amount) => { },
                reverseOrder: async () => {
                    const { token1, token2 } = get();
                    set({ token1: token2, token2: token1, transactionEstimation: undefined });

                    if (token2?.amount && token2.token.address && token1 && token1.token.address) {

                        const walletStore = useTonWalletStore.getState();
                        const sender = walletStore.friendlyAddress;
                        if (!sender) return;

                        const simulateRes = await simulateSwap(token1.token.address, token2.token.address, token2.amount, sender);
                        if (!simulateRes) return;

                        // set({ transactionEstimation: simulateRes.txEstimation });
                    }
                },
                swap: async () => {
                    const walletStore = useTonWalletStore.getState();
                    const sender = walletStore.sender;
                    const swapMsg = get().swapMessage;

                    if (!sender || !swapMsg) {
                        return
                    }

                    const res = await sender.sendMultiple(swapMsg);

                    console.log(res);
                },
                resetInputSwap: () => {
                    set({
                        swapMessage: null,
                        token2: {
                            ...get().token2!,
                            amount: "0"
                        }
                    })
                }
            }), "swap")
    )
);