"use client";

import { Page } from "@/components/Page";
import { Icon28Exchange } from "@/icons/28/exchange";
import { Icon28ProvideLiquidity } from "@/icons/28/provide-liquidity";
import { Cell, Image, Placeholder, Section } from "@telegram-apps/telegram-ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/swap");
  }, []);

  return (
    <Page back={false}>
      <div>
        <Placeholder
          description="The solution for Concentrated Liquidity Market Maker on TON"
          header="Welcome to Orbiton"
        >
          <Image
            alt="Telegram sticker"
            src="https://xelene.me/telegram.gif"
            size={96}
          />
        </Placeholder>
        <Section header="You want to...">
          <Cell
            onClick={(e) => {
              e.preventDefault();
            }}
            before={<Icon28Exchange />}
            subtitle={<Link href={"/"}>Learn more</Link>}
          >
            Exchange assets
          </Cell>
          <Cell
            before={<Icon28ProvideLiquidity />}
            subtitle={<Link href={"/"}>Learn more</Link>}
          >
            Provide liquidities
          </Cell>
        </Section>
      </div>
    </Page>
  );
}
