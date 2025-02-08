"use client";

import { Page } from "@/components/Page";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { PairInput } from "@/components/PairInput/PairInput";
import { SubmitButton } from "@/components/SubmitButton/SubmitButton";
import { Section, Subheadline } from "@telegram-apps/telegram-ui";

const FEE_TIERS = [
  {
    fee: 0.05,
    tickSpacing: 10,
    useWhen: "Best for stable pair",
  },
  {
    fee: 0.3,
    tickSpacing: 60,
    useWhen: "Best for most pair",
  },
  {
    fee: 1,
    tickSpacing: 200,
    useWhen: "Best for exotic pairs",
  },
];

export default function CreatePoolPage() {
  return (
    <Page>
      <div className="flex justify-center mt-[80.5px]">
        <Section
          className="max-w-[500px] w-[90%]"
          header={<PageTitle title="Create Pool" />}
        >
          <div className="w-full flex flex-col gap-4 px-0 py-4">
            <PairInput canSwapOrder={true} hideBalance={true} />
            <div className="w-full flex gap-3">
              {FEE_TIERS.map((e) => {
                return (
                  <div className="flex flex-col border border-solid rounded-xl justify-center text-center">
                    <Subheadline level="2">{e.fee}</Subheadline>
                    <Subheadline level="2">{e.useWhen}</Subheadline>
                  </div>
                );
              })}
            </div>
            <SubmitButton />
          </div>
        </Section>
      </div>
    </Page>
  );
}
