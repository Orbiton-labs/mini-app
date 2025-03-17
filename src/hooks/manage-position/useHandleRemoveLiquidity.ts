import { FEE_TIER_SCALE } from "@/constants/contract";
import { useTonWalletStore } from "@/store";
import { Pool } from "@/types/Pool";
import { Position } from "@/types/Position";
import { Jetton, PoolMessageBuilder, Pool as PoolSDK, PoolWrapper, PositionLibrary, Position as PositionSDK, PositionWrapper } from "@orbiton_labs/v3-contracts-sdk";
import { Address, OpenedContract } from "@ton/core";
import Decimal from "decimal.js";
import { useEffect, useState } from "react";
import useDebounce from "../useDebounce";

export const PERCENT = [25, 50, 75, 100]

export const useHandleRemoveLiquidity = (positionAddress: string | null, jettons: [Jetton | null, Jetton | null], pool: Pool | null, position: Position | null) => {
    const [percent, setPercent] = useState<number>(25);
    const [amount0, setAmount0] = useState<string>("0");
    const [amount1, setAmount1] = useState<string>("0");
    const [inactiveAmount0, setInactiveAmount0] = useState<string>("0");
    const [inactiveAmount1, setInactiveAmount1] = useState<string>("0");
    const [pooledAmount0, setPooledAmount0] = useState<number>(0);
    const [pooledAmount1, setPooledAmount1] = useState<number>(0);
    const [correspondingLiquidity, setCorrespondingLiquidity] = useState<string>("0");
    const debouncePercent = useDebounce<number>(percent, 300);

    const queryClient = useTonWalletStore((state) => state.queryClient);
    const tonApiClient = useTonWalletStore((state) => state.tonApiClient);
    const walletVersion = useTonWalletStore((state) => state.walletVersion);
    const sender = useTonWalletStore((state) => state.sender);

    useEffect(() => {
        (async () => {
            if (!queryClient || !positionAddress || !jettons[0] || !jettons[1] || !pool) return;

            const poolContract = new PoolWrapper.Pool(Address.parse(pool.address));
            const poolClient = queryClient.open(poolContract) as OpenedContract<PoolWrapper.Pool>;

            const feeGrowthGlobalInfo = await poolClient.getFeeGrowthGlobal();

            const positionContract = new PositionWrapper.Position(Address.parse(positionAddress));
            const positionClient = queryClient.open(positionContract) as OpenedContract<PositionWrapper.Position>;
            const positionStorage = await positionClient.getStorage();

            const { fee_growth_inside0_last_x128, fee_growth_inside1_last_x128, liquidity } = positionStorage.first_ref;
            const { token_owed0, token_owed1 } = positionStorage.second_ref;
            const [tokenOwed0, tokenOwed1] = PositionLibrary.getTokensOwed(
                feeGrowthGlobalInfo.feeGrowthGlobal0X128,
                feeGrowthGlobalInfo.feeGrowthGlobal1X128,
                liquidity,
                fee_growth_inside0_last_x128,
                fee_growth_inside1_last_x128
            );

            setAmount0(tokenOwed0.toString())
            setAmount1(tokenOwed1.toString())
            setInactiveAmount0(token_owed0.toString())
            setInactiveAmount1(token_owed1.toString())
        })();
    }, [queryClient, positionAddress, jettons, pool])

    useEffect(() => {
        if (!debouncePercent || !position) return;

        const pooledAmount0 = position.amount0 * debouncePercent / 100;
        const pooledAmount1 = position.amount1 * debouncePercent / 100;
        const liquidity = new Decimal(position.liquidity).mul(debouncePercent / 100).round().toString();
        console.log({
            pooledAmount0,
            pooledAmount1,
            liquidity
        })
        setPooledAmount0(pooledAmount0);
        setPooledAmount1(pooledAmount1);
        setCorrespondingLiquidity(liquidity);
    }, [debouncePercent, position]);

    const handleRemoveLiquidity = async () => {
        console.log({
            pool,
            position,
            tonApiClient, walletVersion,
            sender
        })
        if (!pool || !position || !tonApiClient || !walletVersion || !sender?.address) return;

        const emulateRes = await PoolMessageBuilder.createEmulatedBurnMessage(
            tonApiClient,
            walletVersion,
            sender?.address,
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
            Address.parse(pool.address)
        )

        console.log(emulateRes)

        const res = await sender.sendMultiple(emulateRes.messages);
        console.log(res)
    }

    const handleCollectFee = async () => {
        if (!pool || !position || !tonApiClient || !walletVersion || !sender?.address) return;
        console.log("collect fee")
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
        )

        const res = await sender.sendMultiple(message);
        console.log(res)
    }

    return {
        percent,
        amount0,
        amount1,
        inactiveAmount0,
        inactiveAmount1,
        pooledAmount0,
        pooledAmount1,
        handleRemoveLiquidity,
        handleCollectFee,
        setPercent
    }
}