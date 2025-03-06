"use client";

import { Page } from "@/components/Page";
import { PairInput } from "@/components/PairInput/PairInput";
import { PoolName } from "@/components/PoolName/PoolName";
import { SubmitButton } from "@/components/SubmitButton/SubmitButton";
import { SubPageTitle } from "@/components/SubPageTitle/SubPageTitle";
import { useCreatePoolStore } from "@/store";
import { useEffect } from "react";

// TODO: remove this hardcode to api get fee tiers
const FEE_TIERS = [
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
  const filteredTokens = useCreatePoolStore((state) => state.filteredTokens);
  const displayTokenList = useCreatePoolStore(
    (state) => state.displayFilteredListToken
  );
  const initToken = useCreatePoolStore((state) => state.initToken);

  useEffect(() => {
    initToken();
  }, [initToken]);

  return (
    <Page>
      <div className="flex flex-col pl-4 pr-4 mb-64">
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
            displayTokenList={displayTokenList}
            tokenList={filteredTokens}
          />
          <div className="w-full grid grid-cols-3 gap-2">
            {FEE_TIERS.map((e, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-col border border-solid rounded-xl justify-center text-center py-3 px-6 gap-2 border-grey3 ${
                    e.selected ? "bg-grey3" : ""
                  }`}
                >
                  <p className="text-ms text-white2">{e.fee}%</p>
                  <p
                    className={`text-ss text-grey5 ${
                      e.selected ? "text-white2" : ""
                    }`}
                  >
                    {e.useWhen}
                  </p>
                </div>
              );
            })}
          </div>
          <SubmitButton />
          {token1 && token2 && (
            <div className="flex justify-between items-center ">
              <PoolName
                token1Img={token1.token.image}
                token2Img={token2.token.image}
                token1Name={token1.token.symbol}
                token2Name={token2.token.symbol}
                className="text-sm"
              />

              <p className="text-sm">
                1 {token1.token.symbol} = 5 {token2.token.symbol}
              </p>
            </div>
          )}
        </div>
      </div>
    </Page>
  );
}
