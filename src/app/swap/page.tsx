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
import "./styles.css";

export default function SwapPage() {
  const pathname = usePathname();

  // MOCKING
  const [slippage, setSlippage] = useState<number>(SLIPPAGE_OPTIONS[0].value);

  return (
    <Page>
      <div className="swap__root">
        <Section
          className="swap__container"
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
          <div className="swap__swap">
            <PairInput canSwapOrder={true} />
            <SubmitButton />
          </div>
        </Section>
      </div>
    </Page>
  );
}
