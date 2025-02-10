"use client";

import { Page } from "@/components/Page";
import { IconButton, Section } from "@telegram-apps/telegram-ui";

import { PageTitle } from "@/components/PageTitle/PageTitle";
import { PairInput } from "@/components/PairInput/PairInput";
import {
  SLIPPAGE_OPTIONS,
  SlippageSetting,
} from "@/components/SlippageSetting/SlippageSetting";
import { SubmitButton } from "@/components/SubmitButton/SubmitButton";
import { Icon36Refresh } from "@/icons/36/refresh";
import { useState } from "react";
import { useSwap } from "./hooks/useSwap";

export default function SwapPage() {
  // TODO: remove this later
  const [slippage, setSlippage] = useState<number>(SLIPPAGE_OPTIONS[0].value);

  const { tokens } = useSwap();

  return (
    <Page>
      <div className="flex justify-center items-center min-h-screen -translate-y-5 min-w-">
        <Section
          className="max-w-[500px] w-[90%]"
          header={
            <PageTitle
              title="Swap"
              after={
                <div>
                  <IconButton>
                    <Icon36Refresh />
                  </IconButton>
                  <SlippageSetting
                    slippage={slippage}
                    setSlippage={setSlippage}
                  />
                </div>
              }
            />
          }
        >
          <div className={`w-full flex flex-col gap-4 px-0 py-4 bg-primary`}>
            <PairInput canSwapOrder={true} tokens={tokens} />
            <SubmitButton />
          </div>
        </Section>
      </div>
    </Page>
  );
}
