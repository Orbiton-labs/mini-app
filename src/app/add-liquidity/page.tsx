"use client";

import LiquidityChartRangeInput from "@/components/LiquidityChart";
import { Bound } from "@/components/LiquidityChart/types";
import { Page } from "@/components/Page";
import { PairInput } from "@/components/PairInput/PairInput";
import { SubmitButton } from "@/components/SubmitButton/SubmitButton";
import { IconMinus } from "@/icons/fixed/minus";
import { IconPlus } from "@/icons/fixed/plus";
import { useCreatePoolStore } from "@/store";
import { useState } from "react";

const isSorted = true;
const price = "0.95";

export default function AddLiquidityPage() {
  const token1 = useCreatePoolStore((state) => state.token1);
  const token2 = useCreatePoolStore((state) => state.token2);
  const setToken1 = useCreatePoolStore((state) => state.setToken1);
  const setToken2 = useCreatePoolStore((state) => state.setToken2);
  const setAmount1 = useCreatePoolStore((state) => state.setAmount1);
  const setAmount2 = useCreatePoolStore((state) => state.setAmount2);
  const filteredTokens = useCreatePoolStore((state) => state.filteredTokens);
  const displayTokenList = useCreatePoolStore(
    (state) => state.displayFilteredListToken
  );
  const initToken = useCreatePoolStore((state) => state.initToken);

  const [priceLower, setPriceLower] = useState(0.9);
  const [priceUpper, setPriceUpper] = useState(1.1);
  const onLeftRangeInput = (typedValue: string) => {
    console.log(typedValue);
    setPriceLower(parseFloat(typedValue));
  };
  const onRightRangeInput = (typedValue: string) => {
    console.log(typedValue);
    setPriceUpper(parseFloat(typedValue));
  };

  return (
    <Page>
      <div className="flex flex-col gap-3 pl-4 pr-4 mb-64">
        <div className="flex justify-between item-center">
          <span className="text-base">1. Select Range</span>
          {/* <span className="text-base">Next</span> */}
        </div>

        {/* TODO: should become components */}
        <div className="flex flex-col gap-2 justify-between">
          <div className="flex justify-between items-center">
            <span className="text-xs">Choose base</span>
            <div className="flex gap-2">
              <span className="py-2 px-4 text-xs border rounded-lg border-grey3 bg-gradient-to-b from-green1 to-green2 text-black2">
                TON
              </span>
              <span className="py-2 px-4 text-xs border rounded-lg border-grey3">
                USDT
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs">Price</span>
            <p className="text-xs py-2 px-3 bg-grey3 rounded-lg">
              Current price:{" "}
              <span className="bg-gradient-to-b from-green1 via-green1 to-green2 bg-clip-text text-transparent">
                3.81 USDT
              </span>{" "}
              per TON
            </p>
          </div>
        </div>

        <div className="relative">
          <LiquidityChartRangeInput
            pool={"pool"}
            priceLower={priceLower}
            priceUpper={priceUpper}
            ticksAtLimit={{
              [Bound.LOWER]: false,
              [Bound.UPPER]: false,
            }}
            price={price ? parseFloat(price) : undefined}
            onLeftRangeInput={onLeftRangeInput}
            onRightRangeInput={onRightRangeInput}
            variant={"dark"}
            width={window.innerWidth > 768 ? 600 : 320}
            isSorted={isSorted}
          />
        </div>

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
            setToken1={setToken1}
            setToken2={setToken2}
            setAmount1={setAmount1}
            setAmount2={setAmount2}
            reverseOrder={() => {}}
            canSwapOrder={false}
            hideBalance={true}
            displayTokenList={displayTokenList}
            tokenList={filteredTokens}
          />

          <SubmitButton content="Create Position" />
        </div>
      </div>
    </Page>
  );
}
