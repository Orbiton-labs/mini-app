"use client";

import { Page } from "@/components/Page";
import { usePathname } from "next/navigation";

export default function ExplorePage() {
  const pathname = usePathname();
  return (
    <Page>
      Explore Page
      <p>Current pathname: {pathname}</p>
    </Page>
  );
}
