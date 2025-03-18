import { logger } from "@/helper/zustand/middleware/logger";
import { Pool } from "@/types/Pool";
import { SenderArguments } from "@ton/core";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { useTonWalletStore } from "./ton-wallet-store";

export enum AddLiquidityStatus {
    IDLE = 'IDLE',
    CALCULATING = 'CALCULATING',
    INSUFFICIENT_BALANCE = 'INSUFFICIENT_BALANCE',
    INSUFFICIENT_LIQUIDITY = 'INSUFFICIENT_LIQUIDITY',
    PRICE_IMPACT_TOO_HIGH = 'PRICE_IMPACT_TOO_HIGH',
    ADD_LIQUIDITY_READY = 'ADD_LIQUIDITY_READY',
    ADDING_LIQUIDITY = 'ADDING_LIQUIDITY',
    ADD_LIQUIDITY_SUCCESS = 'ADD_LIQUIDITY_SUCCESS',
    ADD_LIQUIDITY_ERROR = 'ADD_LIQUIDITY_ERROR',
    CONNECT_WALLET = 'CONNECT_WALLET'
}

interface AddLiquidityState {
    pool: Pool | null;
    amount0: string | undefined;
    amount1: string | undefined;
    status: AddLiquidityStatus;
    error: string | null;
    priceImpact: number;
    messages: SenderArguments[] | null;
    setPool: (pool: Pool) => void;
    setAmount0: (amount: string | undefined) => void;
    setAmount1: (amount: string | undefined) => void;
    setStatus: (status: AddLiquidityStatus) => void;
    setError: (error: string | null) => void;
    setPriceImpact: (impact: number) => void;
    setMessages: (messages: SenderArguments[] | null) => void;
    resetState: () => void;
    getButtonText: () => string;
    isButtonDisabled: () => boolean;
    addLiquidity: () => Promise<void>;
}

export const useAddLiquidityStore = create<AddLiquidityState>()(
    devtools(
        logger(
            (set, get) => ({
                pool: null,
                amount0: undefined,
                amount1: undefined,
                status: AddLiquidityStatus.IDLE,
                error: null,
                priceImpact: 0,
                messages: null,

                setPool: (pool) => set({ pool }),
                setAmount0: (amount) => set({ amount0: amount }),
                setAmount1: (amount) => set({ amount1: amount }),
                setStatus: (status) => set({ status }),
                setError: (error) => set({ error }),
                setPriceImpact: (impact) => set({ priceImpact: impact }),
                setMessages: (messages) => set({ messages }),

                resetState: () => set({
                    amount0: undefined,
                    amount1: undefined,
                    status: AddLiquidityStatus.IDLE,
                    error: null,
                    priceImpact: 0,
                    messages: null
                }),

                getButtonText: () => {
                    const { status, error } = get();
                    switch (status) {
                        case AddLiquidityStatus.CONNECT_WALLET:
                            return "Connect Wallet";
                        case AddLiquidityStatus.INSUFFICIENT_BALANCE:
                            return "Insufficient Balance";
                        case AddLiquidityStatus.INSUFFICIENT_LIQUIDITY:
                            return "Insufficient Liquidity";
                        case AddLiquidityStatus.PRICE_IMPACT_TOO_HIGH:
                            return "Price Impact Too High";
                        case AddLiquidityStatus.CALCULATING:
                            return "Calculating...";
                        case AddLiquidityStatus.ADDING_LIQUIDITY:
                            return "Adding Liquidity...";
                        case AddLiquidityStatus.ADD_LIQUIDITY_SUCCESS:
                            return "Liquidity Added!";
                        case AddLiquidityStatus.ADD_LIQUIDITY_ERROR:
                            return "Failed to Add Liquidity";
                        case AddLiquidityStatus.ADD_LIQUIDITY_READY:
                            return "Add Liquidity";
                        default:
                            return "Enter amounts";
                    }
                },

                isButtonDisabled: () => {
                    const { status } = get();
                    return [
                        AddLiquidityStatus.IDLE,
                        AddLiquidityStatus.CALCULATING,
                        AddLiquidityStatus.ADDING_LIQUIDITY,
                        AddLiquidityStatus.ADD_LIQUIDITY_SUCCESS,
                        AddLiquidityStatus.INSUFFICIENT_BALANCE,
                        AddLiquidityStatus.INSUFFICIENT_LIQUIDITY,
                        AddLiquidityStatus.PRICE_IMPACT_TOO_HIGH
                    ].includes(status);
                },

                addLiquidity: async () => {
                    const walletStore = useTonWalletStore.getState();
                    const sender = walletStore.sender;
                    const messages = get().messages;

                    if (!sender || !messages) {
                        set({ error: "Please connect your wallet", status: AddLiquidityStatus.CONNECT_WALLET });
                        return;
                    }

                    try {
                        set({ status: AddLiquidityStatus.ADDING_LIQUIDITY, error: null });
                        const res = await sender.sendMultiple(messages);
                        console.log(res);
                        set({ status: AddLiquidityStatus.ADD_LIQUIDITY_SUCCESS });

                        // Reset states after successful add liquidity with a delay
                        setTimeout(() => {
                            set({
                                messages: null,
                                amount0: undefined,
                                amount1: undefined,
                                status: AddLiquidityStatus.IDLE,
                                error: null,
                                priceImpact: 0
                            });
                        }, 2000); // Show success message for 2 seconds
                    } catch (error) {
                        set({ error: "Failed to add liquidity", status: AddLiquidityStatus.ADD_LIQUIDITY_ERROR });
                    }
                }
            }),
            "add-liquidity"
        )
    )
); 