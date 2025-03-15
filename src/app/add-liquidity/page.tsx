"use client";

import LiquidityChartRangeInput from "@/components/LiquidityChart";
import { Bound } from "@/components/LiquidityChart/types";
import { Page } from "@/components/Page";
import { PairInput } from "@/components/PairInput/PairInput";
import { SubmitButton } from "@/components/SubmitButton/SubmitButton";
import { useAddLiquidity } from "@/hooks/add-liquidity/useAddLiquidity";
import { useAddLiquidityTransformer } from "@/hooks/add-liquidity/useAddLiquidityTransformer";
import { IconMinus } from "@/icons/fixed/minus";
import { IconPlus } from "@/icons/fixed/plus";
import { useCreatePoolStore } from "@/store";
import { useSearchParams } from "next/navigation";

const isSorted = true;
const price = "0.95";

export default function AddLiquidityPage() {
  const searchParams = useSearchParams();
  const poolAddr = searchParams.get("pool");

  const { poolDetail, poolDetailLoading } = useAddLiquidity(poolAddr || "");

  const { base, quote, price, isToken0Base, setIsToken0Base } =
    useAddLiquidityTransformer(poolDetail);

  const token1 = useCreatePoolStore((state) => state.token1);
  const token2 = useCreatePoolStore((state) => state.token2);
  const setAmount1 = useCreatePoolStore((state) => state.setAmount1);
  const setAmount2 = useCreatePoolStore((state) => state.setAmount2);

  return (
    <Page>
      <div className="flex flex-col gap-3 pl-4 pr-4">
        <div className="flex justify-between item-center">
          <span className="text-base">1. Select Range</span>
          {/* <span className="text-base">Next</span> */}
        </div>

        {/* TODO: should become components */}
        <div className="flex flex-col gap-2 justify-between">
          <div className="flex justify-between items-center">
            <span className="text-xs">Choose base</span>
            {poolDetail && (
              <div className="flex gap-2">
                <span
                  onClick={() => setIsToken0Base(true)}
                  className={`py-2 px-4 text-xs border rounded-lg border-grey3 ${
                    isToken0Base && "bg-gradient-to-b from-green1 to-green2"
                  }`}
                >
                  {poolDetail.token1.symbol}
                </span>
                <span
                  onClick={() => setIsToken0Base(false)}
                  className={`py-2 px-4 text-xs border rounded-lg border-grey3 ${
                    !isToken0Base && "bg-gradient-to-b from-green1 to-green2"
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
                  {price.toFixed(6)} {quote}
                </span>{" "}
                per {base}
              </p>
            )}
          </div>
        </div>

        {poolDetail && <div className="relative">
          <LiquidityChartRangeInput
            pool={poolDetail}
            poolAddr={poolDetail.address}
            ticksAtLimit={{
              [Bound.LOWER]: false,
              [Bound.UPPER]: false,
            }}
            interactive={true}
            price={Number(price)}
            onLeftRangeInput={() => {}}
            onRightRangeInput={() => {}}
            variant={"dark"}
            width={window.innerWidth > 768 ? 600 : 320}
            isSorted={isToken0Base}
          />
        </div>}

        <div className="flex flex-col gap-3 text-xs">
          <div className="flex flex-col gap-2 justify-between">
            <p>Min Price</p>
            <div className="flex justify-between items-center gap-6">
              <div className="p-3 bg-grey3 rounded-full">
                <IconMinus />
              </div>
              <input
                type="number"
                className="bg-grey3 py-4 w-full rounded-lg text-center text-sm"
                value={3.6402}
                onChange={() => {}}
              />
              <div className="p-3 bg-grey3 rounded-full">
                <IconPlus />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-between">
            <p>Max Price</p>
            <div className="flex justify-between items-center gap-6">
              <div className="p-3 bg-grey3 rounded-full">
                <IconMinus />
              </div>
              <input
                type="number"
                className="bg-grey3 py-4 w-full rounded-lg text-center text-sm"
                value={3.6402}
                onChange={() => {}}
              />
              <div className="p-3 bg-grey3 rounded-full">
                <IconPlus />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between item-center">
          <span className="text-base">2. Enter Amount</span>
          {/* <span className="text-base">Next</span> */}
        </div>

        <div className="min-h-[460px] flex flex-col gap-3">
          <PairInput
            token1={token1}
            token2={token2}
            setToken1={() => {}}
            setToken2={() => {}}
            setAmount1={setAmount1}
            setAmount2={setAmount2}
            reverseOrder={() => {}}
            canSwapOrder={false}
            hideBalance={false}
            displayTokenList={() => {}}
            tokenList={[]}
            canChangeToken0={false}
            canChangeToken1={false}
          />

          <SubmitButton content="Create Position" />
        </div>
      </div>
    </Page>
  );
}
