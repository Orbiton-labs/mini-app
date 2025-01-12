"use client";

import { Page } from "@/components/Page";
import { usePathname } from "next/navigation";

export default function PortfolioPage() {
  const pathname = usePathname();
  return (
    <Page>
      Portfolio Page
      <p>Current pathname: {pathname}</p>
    </Page>
  );
}
