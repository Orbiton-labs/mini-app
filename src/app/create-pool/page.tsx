"use client";

import { Page } from "@/components/Page";
import { PairInput } from "@/components/PairInput/PairInput";
import { PoolName } from "@/components/PoolName/PoolName";
import { SubmitButton } from "@/components/SubmitButton/SubmitButton";
import { SubPageTitle } from "@/components/SubPageTitle/SubPageTitle";
import { FEE_TIERS } from "@/constants/fee-tier";
import { useTokenListStore } from "@/store";
import { CreatePoolStatus, useCreatePoolStore } from "@/store/create-pool-store";
import { useMemo } from "react";

// TODO: remove this hardcode to api get fee tiers


export default function CreatePoolPage() {
  const {
    token1,
    token2,
    error,
    status,
    feeTier,
    existPoolFeeTier,
    setToken1,
    setToken2,
    setAmount1,
    setAmount2,
    setFeeTier,
    isButtonDisabled,
    getButtonText,
    handlePoolCreation,
    processPoolCreation,
  } = useCreatePoolStore();

  const {
    filteredTokens,
    displayFilteredTokens,
  } = useTokenListStore();

  const price = useMemo(() => {
    if (!token1 || !token2 || !token1.amount || !token2.amount) return null;
    const price = Number(token2.amount) / Number(token1.amount);
    processPoolCreation(price);
    return price;
  }, [token1, token2]);

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
            reverseOrder={() => { }}
            canSwapOrder={false}
            hideBalance={true}
            displayTokenList={() => displayFilteredTokens([token1, token2])}
            tokenList={filteredTokens}
          />
          {token1 && token2 && <div className="w-full grid grid-cols-2 gap-2">
            {FEE_TIERS.map((e, index) => {
              const isExist = existPoolFeeTier.some((feeTier) => feeTier.fee === e.fee);

              return (
                <div
                  onClick={() => !isExist && setFeeTier(FEE_TIERS[index], price)}
                  key={index}
                  className={`flex flex-col border border-solid rounded-xl justify-center text-center py-3 px-6 gap-2 border-grey7 
                    ${FEE_TIERS[index].fee === feeTier?.fee ? "bg-grey8" : ""}
                    ${isExist ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <p className="text-ms text-white2">{e.fee}%</p>
                  <p
                    className={`text-ss text-grey5 ${FEE_TIERS[index].fee === feeTier?.fee ? "text-white2" : ""}`}
                  >
                    {isExist ? "Already exists" : e.useWhen}
                  </p>
                </div>
              );
            })}
          </div>}
          <SubmitButton
            onClick={() => handlePoolCreation(price)}
            isDisabled={isButtonDisabled()}
            content={getButtonText()}
          />
          {token1 && token2 && (
            <div className="flex justify-between items-center">
              <PoolName
                token1Img={token1.token.image}
                token2Img={token2.token.image}
                token1Name={token1.token.symbol}
                token2Name={token2.token.symbol}
                className="text-sm"
              />

              {price && token1.amount && token2.amount && status === CreatePoolStatus.CREATE_POOL_READY && (
                <p className="text-xs">
                  1 {token1.token.symbol} = {price} {token2.token.symbol}
                </p>
              )}
            </div>
          )}
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
        </div>
      </div>
    </Page>
  );
}
