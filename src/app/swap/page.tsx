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
import { useState } from "react";
import "./styles.css";
import { Icon36Refresh } from "@/icons/36/refresh";

export default function SwapPage() {
  const pathname = usePathname();

  // MOCKING
  const [slippage, setSlippage] = useState<number>(SLIPPAGE_OPTIONS[0].value);

  return (
    <Page>
      <Section
        className="swap__root"
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
    </Page>
  );
}
