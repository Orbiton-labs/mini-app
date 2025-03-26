import { makeClient } from "@/app/ApolloWrapper";
import { FEE_TIER_SCALE } from "@/constants/contract";
import { PoolExistQuery } from "@/graphql/queries/pool";
import { parseJetton } from "@/helper/transform";
import { logger } from "@/helper/zustand/middleware/logger";
import { FeeTier } from "@/types/FeeTier";
import { Token } from "@/types/Token";
import { RouterWrapper, encodeSqrtRatioX96 } from "@orbiton_labs/v3-contracts-sdk";
import { OpCreatePool } from "@orbiton_labs/v3-contracts-sdk/build/tlbs/router";
import { Address, Sender, toNano } from "@ton/core";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { autoInit } from "./middlewares/auto-init";
import { useTokenListStore } from "./token-list-store";
import { useTonWalletStore } from "./ton-wallet-store";
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
        setFeeTier: (feeTier: FeeTier, price: number | null) => void;
        setStatus: (status: CreatePoolStatus) => void;
        setError: (error: string | null) => void;
        getButtonText: () => string;
        isButtonDisabled: () => boolean;
        handlePoolCreation: (price: number | null) => Promise<void>;
        getExistedFeeTier: () => Promise<void>;
        processPoolCreation: (price: number | null) => Promise<void>;
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

                    if (get().token2) {
                        get().getExistedFeeTier();
                    }
                },
                setToken2: (token) => {
                    set({ token2: token, error: null, status: CreatePoolStatus.IDLE });

                    if (get().token1) {
                        get().getExistedFeeTier();
                    }
                },
                setFeeTier: (feeTier, price) => {
                    set({ feeTier });

                    get().processPoolCreation(price);
                },
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
                },
                handlePoolCreation: async (price) => {
                    const { token1, token2, feeTier } = get();
                    if (!token1 || !token2 || !feeTier || !price) {
                        return;
                    }

                    const walletStore = useTonWalletStore.getState();
                    const sender = walletStore.sender;
                    const queryClient = walletStore.queryClient;

                    if (!queryClient) {
                        return;
                    }

                    if (!process.env.NEXT_PUBLIC_ROUTER_ADDRESS) {
                        return;
                    }

                    const routerAddress = Address.parse(process.env.NEXT_PUBLIC_ROUTER_ADDRESS);

                    const jetton0 = parseJetton(token1.token);
                    const jetton1 = parseJetton(token2.token);

                    await jetton0.setWalletAddress(queryClient, routerAddress);
                    await jetton1.setWalletAddress(queryClient, routerAddress);

                    const isSorted = jetton0.sortsBefore(jetton1);

                    if (!sender) {
                        return;
                    }

                    const priceNumerator = Math.floor(price * 10 ** 9);
                    const priceDenominator = 10 ** 9;

                    const router = queryClient.open(
                        RouterWrapper.Router.createFromAddress(routerAddress)
                    );

                    const createPoolParams = {
                        kind: "OpCreatePool",
                        query_id: 0,
                        jetton0_wallet: jetton0.walletAddress,
                        jetton1_wallet: jetton1.walletAddress,
                        fee: Number(get().feeTier?.fee) * FEE_TIER_SCALE,
                        sqrt_price_x96: isSorted ? encodeSqrtRatioX96(
                            BigInt(priceNumerator),
                            BigInt(priceDenominator),
                        ) : encodeSqrtRatioX96(
                            BigInt(priceDenominator),
                            BigInt(priceNumerator)
                        ),
                        tick_spacing: Number(get().feeTier?.tickSpacing),
                        jetton_master_ref: {
                            kind: "JettonMasterRef",
                            jetton0_master: jetton0.address,
                            jetton1_master: jetton1.address,
                        },
                    };

                    try {
                        const res = await router.sendCreatePool(
                            sender as any,
                            createPoolParams as OpCreatePool,
                            {
                                value: toNano("0.1"),
                            }
                        );

                        // reset state
                        set({
                            token1: null,
                            token2: null,
                            feeTier: null,
                            status: CreatePoolStatus.IDLE
                        });

                        return res;
                    } catch (error) {
                        console.error(error);
                        throw new Error("Failed to create pool");
                    }
                },
                getExistedFeeTier: async () => {
                    const { token1, token2 } = get();
                    if (!token1 || !token2) {
                        return;
                    }

                    const address0 = Address.parse(token1.token.address!).toString();
                    const address1 = Address.parse(token2.token.address!).toString();

                    console.log(address0, address1);

                    const client = makeClient();
                    const pools = await client.query({
                        query: PoolExistQuery,
                        variables: {
                            token0: address0,
                            token1: address1
                        }
                    });

                    console.log(pools);

                    if (pools.data.pool.length > 0) {
                        set({
                            existPoolFeeTier: pools.data.pool.map((pool: any): FeeTier => ({
                                fee: (pool.feeTier / FEE_TIER_SCALE).toString(),
                                tickSpacing: pool.tickSpacing
                            }))
                        });
                    }
                },
                processPoolCreation: async (price) => {
                    const { token1, token2 } = get();
                    if (!token1 || !token2) {
                        return;
                    }

                    const { feeTier } = get();

                    if (!feeTier) {
                        return;
                    }

                    if (!price) {
                        set({ status: CreatePoolStatus.NO_PRICE });
                        return;
                    }

                    set({ status: CreatePoolStatus.CREATE_POOL_READY });
                }
            })), "create-pool")
    )
);