"use client";

import { PageTransition } from "@/components/ui/page-transition";
import { backButton, isTMA } from "@telegram-apps/sdk-react";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

export function Page({
  children,
  back = true,
}: PropsWithChildren<{
  /**
   * True if it is allowed to go back from this page.
   * @default true
   */
  back?: boolean;
}>) {
  if (isTMA()) return (<PageTransition>
    {children}
  </PageTransition>);

  const router = useRouter();

  useEffect(() => {
    if (back) {
      backButton.show();
    } else {
      backButton.hide();
    }
  }, [back]);

  useEffect(() => {
    return backButton.onClick(() => {
      router.back();
    });
  }, [router]);

  return (
    <PageTransition>
      {children}
    </PageTransition>
  );
}
