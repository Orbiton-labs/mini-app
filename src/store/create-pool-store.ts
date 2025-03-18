import { logger } from "@/helper/zustand/middleware/logger";
import { FeeTier } from "@/types/FeeTier";
import { Token } from "@/types/Token";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { autoInit } from "./middlewares/auto-init";
import { useTokenListStore } from "./token-list-store";
import { CreatePoolState } from "./types";

export enum CreatePoolStatus {
    IDLE = 'IDLE',
    CALCULATING = 'CALCULATING',
    INSUFFICIENT_BALANCE = 'INSUFFICIENT_BALANCE',
    INSUFFICIENT_LIQUIDITY = 'INSUFFICIENT_LIQUIDITY',
    PRICE_IMPACT_TOO_HIGH = 'PRICE_IMPACT_TOO_HIGH',
    CREATE_POOL_READY = 'CREATE_POOL_READY',
    CREATING_POOL = 'CREATING_POOL',
    CREATE_POOL_SUCCESS = 'CREATE_POOL_SUCCESS',
    CREATE_POOL_ERROR = 'CREATE_POOL_ERROR',
    CONNECT_WALLET = 'CONNECT_WALLET',
    NO_PRICE = 'NO_PRICE'
}

export const useCreatePoolStore = create<
    CreatePoolState & {
        init: () => Promise<void>;
        setToken1: (token: Token) => void;
        setToken2: (token: Token) => void;
        setAmount1: (amount: string | undefined) => void;
        setAmount2: (amount: string | undefined) => void;
        setFeeTier: (feeTier: FeeTier) => void;
        status: CreatePoolStatus;
        error: string | null;
        setStatus: (status: CreatePoolStatus) => void;
        setError: (error: string | null) => void;
        getButtonText: () => string;
        isButtonDisabled: () => boolean;
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
                status: CreatePoolStatus.IDLE,
                error: null,

                init: async () => {
                    const tokenListStore = useTokenListStore.getState();
                    await tokenListStore.getTokenList();
                },
                setToken1: (token) => {
                    set({ token1: token, error: null, status: CreatePoolStatus.IDLE });
                    useTokenListStore.getState().getFilteredTokens([token, get().token2]);
                },
                setToken2: (token) => {
                    set({ token2: token, error: null, status: CreatePoolStatus.IDLE });
                    useTokenListStore.getState().getFilteredTokens([get().token1, token]);
                },
                setFeeTier: (feeTier) => set({ feeTier }),
                setStatus: (status) => set({ status }),
                setError: (error) => set({ error }),

                setAmount1: (amount) => {
                    const { token1 } = get();
                    if (token1) {
                        set({
                            token1: { ...token1, amount },
                            status: amount ? CreatePoolStatus.CALCULATING : CreatePoolStatus.IDLE
                        });
                    }
                },
                setAmount2: (amount) => {
                    const { token2 } = get();
                    if (token2) {
                        set({
                            token2: { ...token2, amount },
                            status: amount ? CreatePoolStatus.CALCULATING : CreatePoolStatus.IDLE
                        });
                    }
                },

                getButtonText: () => {
                    const { status, error } = get();
                    switch (status) {
                        case CreatePoolStatus.CONNECT_WALLET:
                            return "Connect Wallet";
                        case CreatePoolStatus.INSUFFICIENT_BALANCE:
                            return "Insufficient Balance";
                        case CreatePoolStatus.INSUFFICIENT_LIQUIDITY:
                            return "Insufficient Liquidity";
                        case CreatePoolStatus.PRICE_IMPACT_TOO_HIGH:
                            return "Price Impact Too High";
                        case CreatePoolStatus.CALCULATING:
                            return "Calculating...";
                        case CreatePoolStatus.CREATING_POOL:
                            return "Creating Pool...";
                        case CreatePoolStatus.CREATE_POOL_SUCCESS:
                            return "Pool Created!";
                        case CreatePoolStatus.CREATE_POOL_ERROR:
                            return "Failed to Create Pool";
                        case CreatePoolStatus.CREATE_POOL_READY:
                            return "Create Pool";
                        case CreatePoolStatus.NO_PRICE:
                            return "Enter Initial Price";
                        default:
                            return "Enter amounts";
                    }
                },

                isButtonDisabled: () => {
                    const { status } = get();
                    return [
                        CreatePoolStatus.IDLE,
                        CreatePoolStatus.CALCULATING,
                        CreatePoolStatus.CREATING_POOL,
                        CreatePoolStatus.CREATE_POOL_SUCCESS,
                        CreatePoolStatus.INSUFFICIENT_BALANCE,
                        CreatePoolStatus.INSUFFICIENT_LIQUIDITY,
                        CreatePoolStatus.PRICE_IMPACT_TOO_HIGH,
                        CreatePoolStatus.NO_PRICE
                    ].includes(status);
                }
            })), "create-pool")
    )
);