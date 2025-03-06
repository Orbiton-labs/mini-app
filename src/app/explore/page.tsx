"use client";

import { Page } from "@/components/Page";
import { ComingSoon } from "@/icons/fixed/coming-soon";
import { usePathname } from "next/navigation";

export default function ExplorePage() {
  const pathname = usePathname();
  return (
    <Page>
      <div className="flex w-full min-h-[60vh] items-center justify-center">
        <ComingSoon />
      </div>
    </Page>
  );
}
