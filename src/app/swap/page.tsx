"use client";

import { MemoDialog } from "@/components/MemoDialog/MemoDialog";
import { Page } from "@/components/Page";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { PairInput } from "@/components/PairInput/PairInput";
import {
  SLIPPAGE_OPTIONS,
  SlippageSetting
} from "@/components/SlippageSetting/SlippageSetting";
import { SubmitButton } from "@/components/SubmitButton/SubmitButton";
import useDebounce from "@/hooks/useDebounce";
import { Icon24ArrowRotateReverse } from "@/icons/24/arrows-rotate-reverse";
import { useSwapStore, useTokenListStore } from "@/store";
import { SwapStatus } from "@/store/types";
import { useTonConnectUI } from "@tonconnect/ui-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SwapPage() {
  const [tonConnectUI] = useTonConnectUI();
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
  const setMemo = useSwapStore((state) => state.setMemo);
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

  console.log("status === SwapStatus.REFETCHING", status === SwapStatus.REFETCHING)

  return (
    <Page back={false}>
      <div className="flex flex-col px-4 sm:px-4 gap-1 items-center w-full">
        <div className="relative max-w-[400px] top-5 md:top-20 w-full rounded-2xl">
          <div className="flex flex-col gap-3 sm:gap-4 px-3 sm:px-4 py-4 sm:py-6 
          bg-navy1 rounded-2xl relative
          before:rounded-2xl before:absolute before:-inset-1 
          before:bg-[conic-gradient(from_var(--gradient-angle),var(--gr-border-3),var(--gr-border-4),var(--gr-border-5),var(--gr-border-4),var(--gr-border-3))]
          before:animate-[border-gradient-rotate_3s_linear_infinite]
          before:content-['']
          before:-z-[1]
          after:rounded-2xl after:absolute after:-inset-1 
          after:blur-xl
          after:bg-[conic-gradient(from_var(--gradient-angle),var(--gr-border-3),var(--gr-border-4),var(--gr-border-5),var(--gr-border-4),var(--gr-border-3))]
          after:animate-[border-gradient-rotate_3s_linear_infinite]
          after:content-['']
          after:-z-[1]
          ">
            <PageTitle
              title="Swap"
              after={
                <div className="flex justify-between gap-2 sm:gap-4 items-center">
                  <motion.div
                    onClick={() => reload(debouncedAmount1)}
                    whileHover={{ rotate: -90, cursor: "pointer" }}
                    animate={status === SwapStatus.REFETCHING ? { rotate: [0, 360] } : {}}
                    transition={{
                      duration: status === SwapStatus.REFETCHING ? 1 : 0.5,
                      ease: "easeInOut",
                      repeat: status === SwapStatus.REFETCHING ? Infinity : 0,
                    }}
                  >
                    <Icon24ArrowRotateReverse />
                  </motion.div>
                  <SlippageSetting slippage={slippage} setSlippage={setSlippage} />
                </div>
              }
            />
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
            {status === SwapStatus.CONNECT_WALLET ? <SubmitButton
              onClick={async () => { await tonConnectUI.openModal() }}
              isLoading={false}
              isDisabled={isButtonDisabled()}
              error={error || undefined}
              content={buttonMessage}
            /> : <MemoDialog
              setMemo={setMemo}
              onSubmit={async () => {
                await swap();
              }}
              trigger={<SubmitButton
                onClick={async () => { }}

                // onClick={async () => {
                //   if (status === SwapStatus.CONNECT_WALLET) {
                //     await tonConnectUI.openModal()
                //     return;
                //   }

                //   await swap();
                // }}
                isLoading={status === 'SWAPPING' || status === 'FINDING_ROUTES'}
                isDisabled={isButtonDisabled()}
                error={error || undefined}
                content={buttonMessage}
              />} />}


          </div>
        </div>

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
      </div>
    </Page>
  );
}
