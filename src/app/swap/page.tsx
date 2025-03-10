"use client";

import { Page } from "@/components/Page";
import {
  SLIPPAGE_OPTIONS,
  SlippageSetting,
} from "@/components/SlippageSetting/SlippageSetting";

import { PageTitle } from "@/components/PageTitle/PageTitle";
import { PairInput } from "@/components/PairInput/PairInput";
import { SubmitButton } from "@/components/SubmitButton/SubmitButton";
import { TransactionSimulation } from "@/components/TransactionSimulation/TransactionSimulation";
import { Icon24ArrowRotateReverse } from "@/icons/24/arrows-rotate-reverse";
import { usePendingTxStore, useSwapStore, useTokenListStore } from "@/store";
import { useState } from "react";

export default function SwapPage() {
  const [slippage, setSlippage] = useState<number>(SLIPPAGE_OPTIONS[0].value);

  const token1 = useSwapStore((state) => state.token1Key);
  const token2 = useSwapStore((state) => state.token2Key);
  const setToken1 = useSwapStore((state) => state.setToken1);
  const setToken2 = useSwapStore((state) => state.setToken2);
  const setAmount1 = useSwapStore((state) => state.setAmount1);
  const setAmount2 = useSwapStore((state) => state.setAmount2);
  const reverseOrder = useSwapStore((state) => state.reverseOrder);
  const filteredTokens = useTokenListStore((state) => state.filteredTokens);
  const tokenList = useTokenListStore((state) => state.tokensList);
  const getFilteredTokens = useTokenListStore(
    (state) => state.getFilteredTokens
  );

  const transactionEstimation = useSwapStore(
    (state) => state.transactionEstimation
  );

  const toggle = usePendingTxStore((state) => state.toggle);

  return (
    <Page back={false}>
      <div className="flex flex-col pl-4 pr-4 gap-1">
        <PageTitle
          title="Swap"
          after={
            <div className="flex justify-between gap-4 items-center">
              <Icon24ArrowRotateReverse />
              <SlippageSetting slippage={slippage} setSlippage={setSlippage} />
            </div>
          }
        />

        <div className={`w-full flex flex-col gap-4 px-0 py-4 bg-primary`}>
          <PairInput
            token1={tokenList[token1 || ""]}
            token2={tokenList[token2 || ""]}
            setToken1={setToken1}
            setToken2={setToken2}
            setAmount1={setAmount1}
            setAmount2={setAmount2}
            tokenList={filteredTokens}
            reverseOrder={reverseOrder}
            displayTokenList={() =>
              getFilteredTokens([
                tokenList[token1 || ""],
                tokenList[token2 || ""],
              ])
            }
            hideBalance={false}
            canSwapOrder={true}
          />
          <SubmitButton onClick={toggle} />
          {tokenList[token1 || ""]?.amount &&
            tokenList[token1 || ""]?.amount != "0" &&
            transactionEstimation && (
              <TransactionSimulation
                infos={[
                  {
                    key: "Price",
                    data: "= 0.2443 TON / USDT",
                  },
                  {
                    key: "Price impact",
                    data: "0.00 %",
                  },
                  {
                    key: "Minimum received",
                    data: "0.241914 TON",
                  },
                  {
                    key: "Slippage tolerance",
                    data: "1.00 %",
                  },
                  {
                    key: "Fee",
                    data: "0.3% / 0.003 TON",
                  },
                ]}
              />
            )}
        </div>
      </div>
    </Page>
  );
}
