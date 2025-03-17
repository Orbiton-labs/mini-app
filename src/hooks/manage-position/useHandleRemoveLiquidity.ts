import { useTonWalletStore } from "@/store";
import { Pool } from "@/types/Pool";
import { Jetton, PoolWrapper, PositionLibrary, PositionWrapper } from "@orbiton_labs/v3-contracts-sdk";
import { Address, OpenedContract } from "@ton/core";
import { useEffect, useState } from "react";
import useDebounce from "../useDebounce";

export const PERCENT = [25, 50, 75, 100]

export const useHandleRemoveLiquidity = (positionAddress: string | null, jettons: [Jetton | null, Jetton | null], pool: Pool | null) => {
    const [percent, setPercent] = useState<number>(25);
    const [amount0, setAmount0] = useState<string>("0");
    const [amount1, setAmount1] = useState<string>("0");
    const debouncePercent = useDebounce<number>(percent, 1000);

    const queryClient = useTonWalletStore((state) => state.queryClient);

    useEffect(() => {
        (async () => {
            if (!queryClient || !positionAddress || !jettons[0] || !jettons[1] || !pool) return;

            const poolContract = new PoolWrapper.Pool(Address.parse(pool.address));
            const poolClient = queryClient.open(poolContract) as OpenedContract<PoolWrapper.Pool>;

            const feeGrowthGlobalInfo = await poolClient.getFeeGrowthGlobal();

            const positionContract = new PositionWrapper.Position(Address.parse(positionAddress));
            const positionClient = queryClient.open(positionContract) as OpenedContract<PositionWrapper.Position>;
            const positionStorage = await positionClient.getStorage();

            const { fee_growth_inside0_last_x128, fee_growth_inside1_last_x128, liquidity } = positionStorage.first_ref
            const [tokenOwed0, tokenOwed1] = PositionLibrary.getTokensOwed(
                feeGrowthGlobalInfo.feeGrowthGlobal0X128,
                feeGrowthGlobalInfo.feeGrowthGlobal1X128,
                liquidity,
                fee_growth_inside0_last_x128,
                fee_growth_inside1_last_x128
            );

            setAmount0(tokenOwed0.toString())
            setAmount1(tokenOwed1.toString())
        })();

    }, [queryClient, positionAddress, jettons, pool])

    return {
        percent,
        amount0,
        amount1,
        setPercent
    }
}