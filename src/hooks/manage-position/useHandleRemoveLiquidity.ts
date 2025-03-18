import { FEE_TIER_SCALE } from "@/constants/contract";
import { useTonWalletStore } from "@/store";
import { ManagePositionStatus, useManagePositionStore } from "@/store/manage-position-store";
import { Pool } from "@/types/Pool";
import { Position } from "@/types/Position";
import { Jetton, PoolMessageBuilder, Pool as PoolSDK, PoolWrapper, PositionLibrary, Position as PositionSDK, PositionWrapper, TickLibrary } from "@orbiton_labs/v3-contracts-sdk";
import { Address, OpenedContract } from "@ton/core";
import Decimal from "decimal.js";
import { useEffect, useState } from "react";
import useDebounce from "../useDebounce";

export const PERCENT = [25, 50, 75, 100];

export const useHandleRemoveLiquidity = (positionAddress: string | null, jettons: [Jetton | null, Jetton | null], pool: Pool | null, position: Position | null) => {
    const [amount0, setAmount0] = useState<string>("0");
    const [amount1, setAmount1] = useState<string>("0");
    const [inactiveAmount0, setInactiveAmount0] = useState<string>("0");
    const [inactiveAmount1, setInactiveAmount1] = useState<string>("0");
    const [pooledAmount0, setPooledAmount0] = useState<number>(0);
    const [pooledAmount1, setPooledAmount1] = useState<number>(0);
    const [correspondingLiquidity, setCorrespondingLiquidity] = useState<string>("0");
    const debouncePercent = useDebounce<number>(useManagePositionStore.getState().percent, 300);

    const queryClient = useTonWalletStore((state) => state.queryClient);
    const tonApiClient = useTonWalletStore((state) => state.tonApiClient);
    const walletVersion = useTonWalletStore((state) => state.walletVersion);
    const sender = useTonWalletStore((state) => state.sender);

    useEffect(() => {
        (async () => {
            if (!queryClient || !positionAddress || !jettons[0] || !jettons[1] || !pool) return;

            const poolContract = new PoolWrapper.Pool(Address.parse(pool.address));
            const poolClient = queryClient.open(poolContract) as OpenedContract<PoolWrapper.Pool>;
            const poolStorage = await poolClient.getPoolState();
            const positionContract = new PositionWrapper.Position(Address.parse(positionAddress));
            const positionClient = queryClient.open(positionContract) as OpenedContract<PositionWrapper.Position>;
            const positionStorage = await positionClient.getStorage();

            const { fee_growth_inside0_last_x128, fee_growth_inside1_last_x128, liquidity, tick_lower, tick_upper } = positionStorage.first_ref;
            const { fee_growth_global_0x128, fee_growth_global_1x128 } = poolStorage.second_ref;
            const { ticks } = poolStorage.third_ref;
            const tickLower = ticks.get(tick_lower)!;
            const tickUpper = ticks.get(tick_upper)!;

            const { token_owed0, token_owed1 } = positionStorage.second_ref;
            const [feeGrowthInside0X128, feeGrowthInside1X128] = TickLibrary.getFeeGrowthInside(
                {
                    feeGrowthOutside0X128: tickLower.fee_growth_outside_0_x128,
                    feeGrowthOutside1X128: tickLower.fee_growth_outside_1_x128,
                },
                {
                    feeGrowthOutside0X128: tickUpper.fee_growth_outside_0_x128,
                    feeGrowthOutside1X128: tickUpper.fee_growth_outside_1_x128,
                },
                tick_lower,
                tick_upper,
                pool.tick,
                fee_growth_global_0x128,
                fee_growth_global_1x128
            );

            const [tokenOwed0, tokenOwed1] = PositionLibrary.getTokensOwed(
                fee_growth_inside0_last_x128,
                fee_growth_inside1_last_x128,
                liquidity,
                feeGrowthInside0X128,
                feeGrowthInside1X128
            );

            console.log(tokenOwed0, tokenOwed1);

            setAmount0(tokenOwed0.toString());
            setAmount1(tokenOwed1.toString());
            setInactiveAmount0(token_owed0.toString());
            setInactiveAmount1(token_owed1.toString());
        })();
    }, [queryClient, positionAddress, jettons, pool]);

    useEffect(() => {
        if (!debouncePercent || !position) return;

        const pooledAmount0 = position.amount0 * debouncePercent / 100;
        const pooledAmount1 = position.amount1 * debouncePercent / 100;
        const liquidity = new Decimal(position.liquidity).mul(debouncePercent / 100).round().toString();

        setPooledAmount0(pooledAmount0);
        setPooledAmount1(pooledAmount1);
        setCorrespondingLiquidity(liquidity);
    }, [debouncePercent, position]);

    const handleRemoveLiquidity = async () => {
        if (!pool || !position || !tonApiClient || !walletVersion || !sender?.address) {
            useManagePositionStore.getState().setError("Missing required data");
            useManagePositionStore.getState().setStatus(ManagePositionStatus.REMOVE_LIQUIDITY_ERROR);
            return;
        }

        try {
            useManagePositionStore.getState().setStatus(ManagePositionStatus.REMOVING_LIQUIDITY);
            useManagePositionStore.getState().setError(null);

            const emulateRes = await PoolMessageBuilder.createBurnMessage(
                new PositionSDK(
                    {
                        pool: new PoolSDK(
                            jettons[0]!,
                            jettons[1]!,
                            Number(pool.feeTier) * FEE_TIER_SCALE,
                            pool.sqrtPrice,
                            pool.liquidity,
                            pool.tick,
                            pool.tickSpacing
                        ),
                        liquidity: correspondingLiquidity,
                        tickLower: position.tickLower,
                        tickUpper: position.tickUpper
                    }
                ),
                Address.parse(position.owner),
                Address.parse(pool.address),
                BigInt(correspondingLiquidity)
            );

            const res = await sender.sendMultiple(emulateRes);

            useManagePositionStore.getState().setStatus(ManagePositionStatus.REMOVE_LIQUIDITY_SUCCESS);

            // Reset after success
            setTimeout(() => {
                useManagePositionStore.getState().reset();
            }, 2000);
        } catch (error) {
            console.error(error);
            useManagePositionStore.getState().setError("Failed to remove liquidity");
            useManagePositionStore.getState().setStatus(ManagePositionStatus.REMOVE_LIQUIDITY_ERROR);
        }
    };

    const handleCollectFee = async () => {
        if (!pool || !position || !tonApiClient || !walletVersion || !sender?.address) {
            useManagePositionStore.getState().setError("Missing required data");
            useManagePositionStore.getState().setStatus(ManagePositionStatus.COLLECT_FEE_ERROR);
            return;
        }

        try {
            useManagePositionStore.getState().setStatus(ManagePositionStatus.COLLECTING_FEE);
            useManagePositionStore.getState().setError(null);

            const message = PoolMessageBuilder.createCollectMessage(
                new PositionSDK(
                    {
                        pool: new PoolSDK(
                            jettons[0]!,
                            jettons[1]!,
                            Number(pool.feeTier) * FEE_TIER_SCALE,
                            pool.sqrtPrice,
                            pool.liquidity,
                            pool.tick,
                            pool.tickSpacing
                        ),
                        liquidity: correspondingLiquidity,
                        tickLower: position.tickLower,
                        tickUpper: position.tickUpper
                    }
                ),
                Address.parse(position.owner),
                Address.parse(pool.address),
                sender.address,
                BigInt(inactiveAmount0),
                BigInt(inactiveAmount1),
            );

            const res = await sender.sendMultiple(message);

            useManagePositionStore.getState().setStatus(ManagePositionStatus.COLLECT_FEE_SUCCESS);

            // Reset after success
            setTimeout(() => {
                useManagePositionStore.getState().reset();
            }, 2000);
        } catch (error) {
            console.error(error);
            useManagePositionStore.getState().setError("Failed to collect fees");
            useManagePositionStore.getState().setStatus(ManagePositionStatus.COLLECT_FEE_ERROR);
        }
    };

    return {
        amount0,
        amount1,
        inactiveAmount0,
        inactiveAmount1,
        pooledAmount0,
        pooledAmount1,
        handleRemoveLiquidity,
        handleCollectFee,
        setPercent: useManagePositionStore.getState().setPercent
    };
};