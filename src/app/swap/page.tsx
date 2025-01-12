"use client";

import { Page } from "@/components/Page";
import { Icon36Refresh } from "@/icons/36/refresh";
import { IconButton, Section, Title } from "@telegram-apps/telegram-ui";
import { usePathname } from "next/navigation";

import { PairInput } from "@/components/PairInput/PairInput";
import {
  SLIPPAGE_OPTIONS,
  SlippageSetting,
} from "@/components/SlippageSetting/SlippageSetting";
import { SubmitButton } from "@/components/SubmitButton/SubmitButton";
import { useRef, useState } from "react";
import "./styles.css";

export default function SwapPage() {
  const pathname = usePathname();

  // MOCKING
  const [slippage, setSlippage] = useState<number>(SLIPPAGE_OPTIONS[0].value);

  return (
    <Page>
      <Section
        header={
          <div className="swap__header-root">
            <Title className="swap__header-title" level="1" weight="3">
              Swap
            </Title>
            <div>
              <IconButton>
                <Icon36Refresh />
              </IconButton>
              <SlippageSetting slippage={slippage} setSlippage={setSlippage} />
            </div>
          </div>
        }
      >
        <div className="swap-root">
          <PairInput canSwapOrder={true} />
          <SubmitButton />
        </div>
      </Section>
    </Page>
  );
}
