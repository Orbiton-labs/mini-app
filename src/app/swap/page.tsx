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
import { useSwapStore, useTokenListStore } from "@/store";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SwapPage() {
  const [slippage, setSlippage] = useState<number>(SLIPPAGE_OPTIONS[0].value);
  const [inputAmount1, setInputAmount1] = useState<string | undefined>("");

  const token1 = useSwapStore((state) => state.token1);
  const token2 = useSwapStore((state) => state.token2);
  const setToken1 = useSwapStore((state) => state.setToken1);
  const setToken2 = useSwapStore((state) => state.setToken2);
  const setAmount1 = useSwapStore((state) => state.setAmount1);
  const reverseOrder = useSwapStore((state) => state.reverseOrder);
  const resetInputSwap = useSwapStore((state) => state.resetInputSwap);
  const swap = useSwapStore((state) => state.swap);
  const reload = useSwapStore((state) => state.reload);
  const filteredTokens = useTokenListStore((state) => state.filteredTokens);
  const displayFilteredTokens = useTokenListStore(
    (state) => state.displayFilteredTokens
  );
  const transactionEstimation = useSwapStore(
    (state) => state.transactionEstimation
  );
  const status = useSwapStore((state) => state.status);
  const error = useSwapStore((state) => state.error);
  const buttonMessage = useSwapStore((state) => state.getButtonText());
  const isButtonDisabled = useSwapStore((state) => state.isButtonDisabled);

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
  }, [debouncedAmount1, setAmount1, resetInputSwap]);

  // Handle amount1 change from PairInput
  const handleAmount1Change = (amount: string | undefined) => {
    setInputAmount1(amount);
  };

  return (
    <Page back={false}>
      <div className="flex flex-col pl-4 pr-4 gap-1">
        <PageTitle
          title="Swap"
          after={
            <div className="flex justify-between gap-4 items-center">
              <motion.div
                onClick={() => reload(debouncedAmount1)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Icon24ArrowRotateReverse />
              </motion.div>
              <SlippageSetting slippage={slippage} setSlippage={setSlippage} />
            </div>
          }
        />

        <div className={`w-full flex flex-col gap-4 px-0 py-4 bg-primary`}>
          <PairInput
            token1={{
              token: token1?.token!,
              balance: token1?.balance,
              amount: inputAmount1
            }}
            token2={token2}
            setToken1={(token) => setToken1(token, debouncedAmount1)}
            setToken2={(token) => setToken2(token, debouncedAmount1)}
            setAmount1={handleAmount1Change}
            setAmount2={() => { }}
            tokenList={filteredTokens}
            reverseOrder={() => {
              reverseOrder();
              setInputAmount1(token2?.amount);
            }}
            displayTokenList={() => displayFilteredTokens([token1, token2])}
            hideBalance={false}
            canSwapOrder={true}
            disable1={true}
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
                  data: `${formatLargeNumber(priceImpact, 2)}%`,
                  warning: priceImpact > 5,
                },
                {
                  key: "Minimum received",
                  data: `${token2.amount} ${token2.token.symbol}`,
                },
                {
                  key: "Slippage tolerance",
                  data: `${formatLargeNumber(slippage, 2)}%`,
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
