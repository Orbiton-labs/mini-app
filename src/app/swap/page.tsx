"use client";

import { SlippageSetting } from "@/components/NewSlippageSetting/NewSlippageSetting";
import { Page } from "@/components/Page";

import { PageTitle } from "@/components/PageTitle/PageTitle";
import { PairInput } from "@/components/PairInput/PairInput";
import { SLIPPAGE_OPTIONS } from "@/components/SlippageSetting/SlippageSetting";
import { SubmitButton } from "@/components/SubmitButton/SubmitButton";
import { TransactionSimulation } from "@/components/TransactionSimulation/TransactionSimulation";
import { Icon24ArrowRotateReverse } from "@/icons/24/arrows-rotate-reverse";
import { useBoundStore } from "@/store";
import { useEffect, useState } from "react";

export default function SwapPage() {
  // TODO: remove this later
  const [slippage, setSlippage] = useState<number>(SLIPPAGE_OPTIONS[0].value);

  const token1 = useBoundStore((state) => state.token1);
  const token2 = useBoundStore((state) => state.token2);
  const setToken1 = useBoundStore((state) => state.setToken1);
  const setToken2 = useBoundStore((state) => state.setToken2);
  const setAmount1 = useBoundStore((state) => state.setAmount1);
  const setAmount2 = useBoundStore((state) => state.setAmount2);
  const reverseOrder = useBoundStore((state) => state.reverseOrder);
  const filteredTokens = useBoundStore((state) => state.filteredTokens);
  const displayTokenList = useBoundStore(
    (state) => state.displayFilteredListToken
  );
  const initToken = useBoundStore((state) => state.initToken);
  const transactionEstimation = useBoundStore(
    (state) => state.transactionEstimation
  );

  useEffect(() => {
    initToken();
  }, [initToken]);

  return (
    <Page back={false}>
      <div className="flex flex-col pt-28 pl-4 pr-4 gap-1">
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
            token1={token1}
            token2={token2}
            setToken1={setToken1}
            setToken2={setToken2}
            setAmount1={setAmount1}
            setAmount2={setAmount2}
            tokenList={filteredTokens}
            reverseOrder={reverseOrder}
            displayTokenList={displayTokenList}
            hideBalance={false}
            canSwapOrder={true}
          />
          <SubmitButton />
          {token1?.amount && token2?.amount && transactionEstimation && (
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
