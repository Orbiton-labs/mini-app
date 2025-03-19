"use client";

import LiquidityChartRangeInput from "@/components/LiquidityChart";
import { Bound } from "@/components/LiquidityChart/types";
import { Page } from "@/components/Page";
import { PairInput } from "@/components/PairInput/PairInput";
import { SubmitButton } from "@/components/SubmitButton/SubmitButton";
import { useAddLiquidity } from "@/hooks/add-liquidity/useAddLiquidity";
import { useAddLiquidityTransformer } from "@/hooks/add-liquidity/useAddLiquidityTransformer";
import {
  useHandleChangeSubmitAmount,
} from "@/hooks/add-liquidity/useHandleChangeSubmitAmount";
import { useHandleRangeChange } from "@/hooks/add-liquidity/useHandleRangeChange";
import { useMintInfo } from "@/hooks/add-liquidity/useMintInfo";
import { IconMinus } from "@/icons/fixed/minus";
import { IconPlus } from "@/icons/fixed/plus";
import { useTokenListStore } from "@/store";
import { useAddLiquidityStore } from "@/store/add-liquidity-store";
import { Address } from "@ton/core";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function AddLiquidityPage() {
  const searchParams = useSearchParams();
  const poolAddr = searchParams.get("pool");

  const { poolDetail, poolDetailLoading } = useAddLiquidity(poolAddr || "");
  const addLiquidityStore = useAddLiquidityStore();

  const tokensList = useTokenListStore((state) => state.tokensList);

  const {
    priceLower,
    priceUpper,
    tickPair,
    minTick,
    maxTick,
    jettons,
    setTickPair,
  } = useMintInfo(poolDetail);

  const { base, quote, price, isToken0Base, setIsToken0Base } =
    useAddLiquidityTransformer(poolDetail, jettons);

  const {
    inputMinPrice,
    inputMaxPrice,
    setInputMinPrice,
    setInputMaxPrice,
    onLeftRangeInput,
    onRightRangeInput,
    onDecreaseLeftRange,
    onIncreaseLeftRange,
    onDecreaseRightRange,
    onIncreaseRightRange,
  } = useHandleRangeChange(
    jettons,
    poolDetail?.tickSpacing,
    isToken0Base,
    priceLower,
    priceUpper,
    setTickPair
  );

  const {
    onChangeAmount0,
    onChangeAmount1,
  } = useHandleChangeSubmitAmount(poolDetail, jettons, tickPair);

  useEffect(() => {
    if (poolDetail) {
      addLiquidityStore.setPool(poolDetail);
    }
  }, [poolDetail]);

  return (
    <Page>
      <div className="flex flex-col gap-3 pl-4 pr-4">
        <div className="flex justify-between item-center">
          <span className="text-base">1. Select Range</span>
        </div>

        <div className="flex flex-col gap-2 justify-between">
          <div className="flex justify-between items-center">
            <span className="text-xs">Choose base</span>
            {poolDetail && (
              <div className="flex gap-2">
                <span
                  onClick={() => setIsToken0Base(true)}
                  className={`py-2 px-4 text-xs border rounded-lg border-grey3 ${isToken0Base && "bg-gradient-to-b from-green1 to-green2"
                    }`}
                >
                  {poolDetail.token1.symbol}
                </span>
                <span
                  onClick={() => setIsToken0Base(false)}
                  className={`py-2 px-4 text-xs border rounded-lg border-grey3 ${!isToken0Base && "bg-gradient-to-b from-green1 to-green2"
                    }`}
                >
                  {poolDetail.token2.symbol}
                </span>
              </div>
            )}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs">Current price</span>
            {poolDetail && (
              <p className="text-xs py-2 px-3 bg-grey3 rounded-lg">
                <span className="bg-gradient-to-b from-green1 via-green1 to-green2 bg-clip-text text-transparent">
                  {price} {quote}
                </span>{" "}
                per {base}
              </p>
            )}
          </div>
        </div>

        {poolDetail && priceLower && priceUpper && (
          <div className="relative">
            <LiquidityChartRangeInput
              pool={poolDetail}
              priceLower={priceLower}
              priceUpper={priceUpper}
              poolAddr={poolDetail.address}
              ticksAtLimit={{
                [Bound.LOWER]: false,
                [Bound.UPPER]: false,
              }}
              interactive={true}
              price={Number(price)}
              onLeftRangeInput={onLeftRangeInput}
              onRightRangeInput={onRightRangeInput}
              variant={"dark"}
              width={window.innerWidth > 768 ? 600 : 320}
              isSorted={isToken0Base}
            />
          </div>
        )}

        <div className="flex flex-col gap-3 text-xs">
          <div className="flex flex-col gap-2 justify-between">
            <p>Min Price</p>
            <div className="flex justify-between items-center gap-6">
              <div
                onClick={onDecreaseLeftRange}
                className="p-3 bg-grey3 rounded-full"
              >
                <IconMinus />
              </div>
              <input
                type="number"
                className="bg-grey3 py-4 w-full rounded-lg text-center text-sm"
                value={inputMinPrice}
                onChange={(e) => setInputMinPrice(e.target.value)}
                onBlur={() => onLeftRangeInput(inputMinPrice)}
              />
              <div
                onClick={onIncreaseLeftRange}
                className="p-3 bg-grey3 rounded-full"
              >
                <IconPlus />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-between">
            <p>Max Price</p>
            <div className="flex justify-between items-center gap-6">
              <div
                onClick={onDecreaseRightRange}
                className="p-3 bg-grey3 rounded-full"
              >
                <IconMinus />
              </div>
              <input
                type="number"
                className="bg-grey3 py-4 w-full rounded-lg text-center text-sm"
                value={inputMaxPrice}
                onChange={(e) => setInputMaxPrice(e.target.value)}
                onBlur={() => onRightRangeInput(inputMaxPrice)}
              />
              <div
                onClick={onIncreaseRightRange}
                className="p-3 bg-grey3 rounded-full"
              >
                <IconPlus />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between item-center">
          <span className="text-base">2. Enter Amount</span>
        </div>

        <div className="min-h-[460px] flex flex-col gap-3">
          {poolDetail && (
            <PairInput
              token1={{
                token: poolDetail.token1,
                amount: addLiquidityStore.amount0,
                balance: tokensList[Address.parse(poolDetail.token1.address).toRawString()]?.balance,
              }}
              token2={{
                token: poolDetail.token2,
                amount: addLiquidityStore.amount1,
                balance: tokensList[Address.parse(poolDetail.token2.address).toRawString()]?.balance,
              }}
              setToken1={() => { }}
              setToken2={() => { }}
              setAmount1={onChangeAmount0}
              setAmount2={onChangeAmount1}
              reverseOrder={() => { }}
              canSwapOrder={false}
              hideBalance={false}
              displayTokenList={() => { }}
              tokenList={[]}
              canChangeToken0={false}
              canChangeToken1={false}
            />
          )}

          <SubmitButton
            onClick={addLiquidityStore.addLiquidity}
            content={addLiquidityStore.getButtonText()}
            isDisabled={addLiquidityStore.isButtonDisabled()}
          />
        </div>
      </div>
    </Page>
  );
}
