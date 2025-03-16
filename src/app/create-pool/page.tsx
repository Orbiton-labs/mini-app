"use client";

import { Page } from "@/components/Page";
import { PairInput } from "@/components/PairInput/PairInput";
import { PoolName } from "@/components/PoolName/PoolName";
import { SubmitButton } from "@/components/SubmitButton/SubmitButton";
import { SubPageTitle } from "@/components/SubPageTitle/SubPageTitle";
import { useCreatePool } from "@/hooks/create-pool/useCreatePool";
import { useCreatePoolStore, useTokenListStore } from "@/store";
import { useState } from "react";

// TODO: remove this hardcode to api get fee tiers
const FEE_TIERS = [
  {
    fee: 0.01,
    tickSpacing: 1,
    useWhen: "Best for stable pair",
  },
  {
    fee: 0.05,
    tickSpacing: 10,
    useWhen: "Best for stable pair",
  },
  {
    fee: 0.3,
    tickSpacing: 60,
    useWhen: "Best for most pair",
    selected: true,
  },
  {
    fee: 1,
    tickSpacing: 200,
    useWhen: "Best for exotic pairs",
  },
];

export default function CreatePoolPage() {
  const token1 = useCreatePoolStore((state) => state.token1);
  const token2 = useCreatePoolStore((state) => state.token2);
  const setToken1 = useCreatePoolStore((state) => state.setToken1);
  const setToken2 = useCreatePoolStore((state) => state.setToken2);
  const setAmount1 = useCreatePoolStore((state) => state.setAmount1);
  const setAmount2 = useCreatePoolStore((state) => state.setAmount2);
  const getFilteredTokens = useTokenListStore(
    (state) => state.getFilteredTokens
  );

  console.log(token1, token2);
  const [feeIndex, setFeeIndex] = useState<number>(2);

  const { handleCreatePool, jetton0, jetton1, price } = useCreatePool(
    token1,
    token2,
    FEE_TIERS[feeIndex].fee,
    FEE_TIERS[feeIndex].tickSpacing
  );

  return (
    <Page>
      <div className="flex flex-col pl-4 pr-4 mb-40">
        <SubPageTitle title="Create Pool" />
        <div className="w-full flex flex-col gap-4 px-0 py-4">
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
            displayTokenList={() => getFilteredTokens([token1, token2])}
            tokenList={getFilteredTokens([token1, token2])}
          />
          <div className="w-full grid grid-cols-2 gap-2">
            {FEE_TIERS.map((e, index) => {
              return (
                <div
                  onClick={() => setFeeIndex(index)}
                  key={index}
                  className={`flex flex-col border border-solid rounded-xl justify-center text-center py-3 px-6 gap-2 border-grey7 ${
                    feeIndex === index ? "bg-grey8" : ""
                  }`}
                >
                  <p className="text-ms text-white2">{e.fee}%</p>
                  <p
                    className={`text-ss text-grey5 ${
                      feeIndex === index ? "text-white2" : ""
                    }`}
                  >
                    {e.useWhen}
                  </p>
                </div>
              );
            })}
          </div>
          <SubmitButton onClick={handleCreatePool} />
          {token1 && token2 && (
            <div className="flex justify-between items-center">
              <PoolName
                token1Img={token1.token.image}
                token2Img={token2.token.image}
                token1Name={token1.token.symbol}
                token2Name={token2.token.symbol}
                className="text-sm"
              />

              {jetton0 && jetton1 && (
                <p className="text-xs">
                  1 {jetton0.symbol} = {price} {jetton1?.symbol}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </Page>
  );
}
