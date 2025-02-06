"use client";

import { Page } from "@/components/Page";
import { IconButton, Section } from "@telegram-apps/telegram-ui";
import { usePathname } from "next/navigation";

import { PageTitle } from "@/components/PageTitle/PageTitle";
import { PairInput } from "@/components/PairInput/PairInput";
import {
  SLIPPAGE_OPTIONS,
  SlippageSetting,
} from "@/components/SlippageSetting/SlippageSetting";
import { SubmitButton } from "@/components/SubmitButton/SubmitButton";
import { Icon36Refresh } from "@/icons/36/refresh";
import { useState } from "react";

export default function SwapPage() {
  const pathname = usePathname();

  // MOCKING
  const [slippage, setSlippage] = useState<number>(SLIPPAGE_OPTIONS[0].value);

  return (
    <Page>
      <div className="flex justify-center items-center min-h-screen">
        <Section
          className="max-w-[500px]"
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
          <div className="w-full flex flex-col gap-4 px-0 py-4">
            <PairInput canSwapOrder={true} />
            <SubmitButton />
          </div>
        </Section>
      </div>
    </Page>
  );
}
