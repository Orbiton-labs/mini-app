"use client";

import { Page } from "@/components/Page";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { PairInput } from "@/components/PairInput/PairInput";
import {
  SLIPPAGE_OPTIONS,
  SlippageSetting,
} from "@/components/SlippageSetting/SlippageSetting";
import { SubmitButton } from "@/components/SubmitButton/SubmitButton";
import useDebounce from "@/hooks/useDebounce";
import { Icon24ArrowRotateReverse } from "@/icons/24/arrows-rotate-reverse";
import { usePendingTxStore, useSwapStore, useTokenListStore } from "@/store";
import { useCallback, useEffect, useState } from "react";

export default function SwapPage() {
  const [slippage, setSlippage] = useState<number>(SLIPPAGE_OPTIONS[0].value);
  const [inputAmount1, setInputAmount1] = useState<string | undefined>("");

  const token1 = useSwapStore((state) => state.token1);
  const token2 = useSwapStore((state) => state.token2);
  const setToken1 = useSwapStore((state) => state.setToken1);
  const setToken2 = useSwapStore((state) => state.setToken2);
  const setAmount1 = useSwapStore((state) => state.setAmount1);
  const setAmount2 = useSwapStore((state) => state.setAmount2);
  const reverseOrder = useSwapStore((state) => state.reverseOrder);
  const resetInputSwap = useSwapStore((state) => state.resetInputSwap);
  const swap = useSwapStore((state) => state.swap);
  const filteredTokens = useTokenListStore((state) => state.filteredTokens);
  const getFilteredTokens = useTokenListStore(
    (state) => state.getFilteredTokens
  );
  const transactionEstimation = useSwapStore(
    (state) => state.transactionEstimation
  );
  const status = useSwapStore((state) => state.status);
  const error = useSwapStore((state) => state.error);
  const priceImpact = useSwapStore((state) => state.priceImpact);
  const buttonMessage = useSwapStore((state) => state.getButtonText());
  const isButtonDisabled = useSwapStore((state) => state.isButtonDisabled);

  const toggle = usePendingTxStore((state) => state.toggle);

  // Debounce the amount1 input with 500ms delay
  const debouncedAmount1 = useDebounce<string | undefined>(inputAmount1, 500);

  // Update the store amount when debounced value changes
  useEffect(() => {
    if (debouncedAmount1 === "0" || debouncedAmount1 === undefined) {
      resetInputSwap();
      return;
    }

    if (debouncedAmount1) {
      setAmount1(debouncedAmount1);
    }
  }, [debouncedAmount1, setAmount1]);

  // Handle amount1 change from PairInput
  const handleAmount1Change = useCallback((amount: string | undefined) => {
    setInputAmount1(amount);
  }, []);

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
            token1={token1}
            token2={token2}
            setToken1={setToken1}
            setToken2={setToken2}
            setAmount1={handleAmount1Change}
            setAmount2={setAmount2}
            tokenList={filteredTokens}
            reverseOrder={reverseOrder}
            displayTokenList={() => getFilteredTokens([token1, token2])}
            hideBalance={false}
            canSwapOrder={true}
            disable1={status === 'SWAPPING' || status === 'FINDING_ROUTES'}
          />
          {/* {token2 && token2.amount !== "0" && (
            <TransactionSimulation
              infos={[
                {
                  key: "Price",
                  data: `= ${token2.amount} ${token2.token.symbol} / ${token1.amount} ${token1.token.symbol}`,
                },
                {
                  key: "Price impact",
                  data: `${priceImpact.toFixed(2)}%`,
                  warning: priceImpact > 5,
                },
                {
                  key: "Minimum received",
                  data: `${token2.amount} ${token2.token.symbol}`,
                },
                {
                  key: "Slippage tolerance",
                  data: `${slippage.toFixed(2)}%`,
                  warning: slippage > 1,
                },
                {
                  key: "Fee",
                  data: "0.3%",
                },
              ]}
              priceImpact={priceImpact}
              slippage={slippage}
            />
          )} */}
          <SubmitButton 
            onClick={swap}
            isLoading={status === 'SWAPPING' || status === 'FINDING_ROUTES'}
            isDisabled={isButtonDisabled()}
            error={error || undefined}
            content={buttonMessage}
          />
        </div>
      </div>
    </Page>
  );
}
