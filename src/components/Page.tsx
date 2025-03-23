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
  const router = useRouter();
  const isTelegram = isTMA();
  const isBackButtonSupported = isTelegram && backButton.isSupported();

  useEffect(() => {
    if (!isBackButtonSupported) return;

    if (back) {
      backButton.show();
    } else {
      backButton.hide();
    }
  }, [back, isBackButtonSupported]);

  useEffect(() => {
    if (!isBackButtonSupported) return;

    return backButton.onClick(() => {
      router.back();
    });
  }, [router, isBackButtonSupported]);

  if (isTMA()) {
    return <PageTransition>{children}</PageTransition>;
  }

  return (
    <PageTransition>
      {children}
    </PageTransition>
  );
}
