"use client";

import { Page } from "@/components/Page";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Button, Section } from "@telegram-apps/telegram-ui";
import { usePathname } from "next/navigation";

export default function PoolsPage() {
  const pathname = usePathname();
  return (
    <Page>
      <Section
        header={
          <PageTitle
            title="Pools"
            after={
              <Button mode="filled" size="s">
                Create Pool
              </Button>
            }
          />
        }
      ></Section>
    </Page>
  );
}
