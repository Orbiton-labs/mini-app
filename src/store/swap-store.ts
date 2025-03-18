import { simulateSwap } from "@/apis/server/swap";
import { DEFAULT_PAIR_MAINNET, DEFAULT_PAIR_TESTNET } from "@/constants/default-pair";
import { logger } from "@/helper/zustand/middleware/logger";
import { Token } from "@/types/Token";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { useTokenListStore } from "./token-list-store";
import { useTonWalletStore } from "./ton-wallet-store";
import { SwapState, SwapStatus } from "./types";

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
        getButtonText: () => string;
        isButtonDisabled: () => boolean;
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
                status: SwapStatus.IDLE,
                error: null,
                priceImpact: 0,
                slippage: 0,
                setToken1: async (token) => {
                    set({ token1: token, error: null, status: SwapStatus.IDLE });
                    const tokenListStore = useTokenListStore.getState();
                    tokenListStore.getFilteredTokens([
                        token,
                        get().token2,
                    ]);
                },
                setToken2: async (token) => {
                    set({ token2: token, error: null, status: SwapStatus.IDLE });
                    const tokenListStore = useTokenListStore.getState();
                    tokenListStore.getFilteredTokens([
                        get().token1,
                        token,
                    ]);
                },
                setPair: (token1, token2) => {
                    set({ token1, token2, error: null, status: SwapStatus.IDLE });
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

                    set({ transactionEstimation: undefined, error: null, status: SwapStatus.FINDING_ROUTES });
                    if (token1 && token1.token.address) {
                        if (!amount) {
                            set({ transactionEstimation: undefined, status: SwapStatus.IDLE });
                            return;
                        }

                        const walletStore = useTonWalletStore.getState();
                        const sender = walletStore.friendlyAddress;

                        if (!sender) {
                            set({ error: "Please connect your wallet", status: SwapStatus.CONNECT_WALLET });
                            return;
                        }

                        // Check balance
                        if (token1.balance && Number(amount) > Number(token1.balance)) {
                            set({ error: "Insufficient balance", status: SwapStatus.INSUFFICIENT_BALANCE });
                            return;
                        }

                        try {
                            const simulateRes = await simulateSwap(token1.token.address, token2.token.address, amount, sender);
                            if (!simulateRes) {
                                set({
                                    error: "No route found",
                                    status: SwapStatus.NO_ROUTE_FOUND
                                });
                                return;
                            }

                            // Calculate price impact
                            const priceImpact = calculatePriceImpact(token1, token2, amount, simulateRes.returnAmount);
                            set({ priceImpact });

                            if (priceImpact > 5) {
                                set({
                                    error: "Price impact too high",
                                    status: SwapStatus.PRICE_IMPACT_TOO_HIGH
                                });
                                return;
                            }

                            set({
                                swapMessage: simulateRes.messages,
                                token2: {
                                    ...get().token2!,
                                    amount: simulateRes.returnAmount
                                },
                                status: SwapStatus.SWAP_READY
                            });
                        } catch (error) {
                            set({
                                error: "No route found",
                                status: SwapStatus.NO_ROUTE_FOUND
                            });
                        }
                    }
                },
                setAmount2: async (amount) => { },
                reverseOrder: async () => {
                    const { token1, token2 } = get();
                    set({ token1: token2, token2: token1, transactionEstimation: undefined, error: null, status: SwapStatus.IDLE });

                    if (token2?.amount && token2.token.address && token1 && token1.token.address) {
                        const walletStore = useTonWalletStore.getState();
                        const sender = walletStore.friendlyAddress;
                        if (!sender) {
                            set({ error: "Please connect your wallet", status: SwapStatus.CONNECT_WALLET });
                            return;
                        }

                        try {
                            set({ status: SwapStatus.FINDING_ROUTES });
                            const simulateRes = await simulateSwap(token1.token.address, token2.token.address, token2.amount, sender);
                            if (!simulateRes) {
                                set({ error: "Failed to simulate swap", status: SwapStatus.SWAP_ERROR });
                                return;
                            }

                            // Calculate price impact
                            const priceImpact = calculatePriceImpact(token1, token2, token2.amount, simulateRes.returnAmount);
                            set({ priceImpact });

                            if (priceImpact > 5) {
                                set({
                                    error: "Price impact too high",
                                    status: SwapStatus.PRICE_IMPACT_TOO_HIGH
                                });
                                return;
                            }

                            set({ status: SwapStatus.SWAP_READY });
                        } catch (error) {
                            set({ error: "Failed to simulate swap", status: SwapStatus.SWAP_ERROR });
                        }
                    }
                },
                swap: async () => {
                    const walletStore = useTonWalletStore.getState();
                    const sender = walletStore.sender;
                    const swapMsg = get().swapMessage;

                    if (!sender || !swapMsg) {
                        set({ error: "Please connect your wallet", status: SwapStatus.CONNECT_WALLET });
                        return;
                    }

                    try {
                        set({ status: SwapStatus.SWAPPING, error: null });
                        const res = await sender.sendMultiple(swapMsg);
                        console.log(res);
                        // set({ status: SwapStatus.SWAP_SUCCESS });

                        // Reset states after successful swap with a delay
                        setTimeout(() => {
                            set({
                                swapMessage: null,
                                transactionEstimation: undefined,
                                token1: {
                                    ...get().token1!,
                                    amount: "0"
                                },
                                token2: {
                                    ...get().token2!,
                                    amount: "0"
                                },
                                status: SwapStatus.IDLE,
                                error: null,
                                priceImpact: 0
                            });
                        }, 2000); // Show success message for 2 seconds
                    } catch (error) {
                        set({ error: "Failed to execute swap", status: SwapStatus.SWAP_ERROR });
                    }
                },
                resetInputSwap: () => {
                    set({
                        swapMessage: null,
                        token2: {
                            ...get().token2!,
                            amount: "0"
                        },
                        error: null,
                        priceImpact: 0,
                        status: SwapStatus.IDLE
                    })
                },
                getButtonText: () => {
                    const { status, error } = get();
                    switch (status) {
                        case SwapStatus.CONNECT_WALLET:
                            return "Connect Wallet";
                        case SwapStatus.INSUFFICIENT_BALANCE:
                            return "Insufficient Balance";
                        case SwapStatus.INSUFFICIENT_LIQUIDITY:
                            return "Insufficient Liquidity";
                        case SwapStatus.PRICE_IMPACT_TOO_HIGH:
                            return "Price Impact Too High";
                        case SwapStatus.NO_ROUTE_FOUND:
                            return "No Route Found";
                        case SwapStatus.FINDING_ROUTES:
                            return "Finding Routes...";
                        case SwapStatus.SWAPPING:
                            return "Swapping...";
                        case SwapStatus.SWAP_SUCCESS:
                            return "Swap Successful!";
                        case SwapStatus.SWAP_ERROR:
                            return "Swap Failed";
                        case SwapStatus.SWAP_READY:
                            return "Swap";
                        default:
                            return "Enter an amount";
                    }
                },
                isButtonDisabled: () => {
                    const { status } = get();
                    return [
                        SwapStatus.IDLE,
                        SwapStatus.FINDING_ROUTES,
                        SwapStatus.SWAPPING,
                        SwapStatus.SWAP_SUCCESS,
                        SwapStatus.INSUFFICIENT_BALANCE,
                        SwapStatus.INSUFFICIENT_LIQUIDITY,
                        SwapStatus.PRICE_IMPACT_TOO_HIGH,
                        SwapStatus.NO_ROUTE_FOUND
                    ].includes(status);
                }
            }), "swap")
    )
);

// Helper function to calculate price impact
function calculatePriceImpact(token1: Token, token2: Token, amountIn: string, amountOut: string): number {
    const expectedRate = Number(amountIn) * (token1.token.price / token2.token.price);
    const actualRate = Number(amountOut);
    // TODO: current on testnet and hard code price now
    return 0.01;
}