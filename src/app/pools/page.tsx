"use client";

import { Page } from "@/components/Page";
import { usePathname } from "next/navigation";

export default function PoolsPage() {
  const pathname = usePathname();
  return (
    <Page>
      Pools Page
      <p>Current pathname: {pathname}</p>
    </Page>
  );
}
