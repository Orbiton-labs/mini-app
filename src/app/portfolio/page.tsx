"use client";

import { Page } from "@/components/Page";
import { usePathname } from "next/navigation";

export default function PortfolioPage() {
  const pathname = usePathname();
  return (
    <Page>
      <div className="flex flex-col pl-4 pr-4 gap-1">Coming Soon</div>
    </Page>
  );
}
