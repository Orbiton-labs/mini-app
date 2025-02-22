"use client";

import { Page } from "@/components/Page";
import { usePathname } from "next/navigation";

export default function ExplorePage() {
  const pathname = usePathname();
  return (
    <Page>
      <div className="flex flex-col pt-28 pl-4 pr-4 gap-1">
        Explore Page
        <p>Current pathname: {pathname}</p>
      </div>
    </Page>
  );
}
