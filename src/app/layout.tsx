import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import type { PropsWithChildren } from "react";

import { Root } from "@/components/Root/Root";

import "@telegram-apps/telegram-ui/dist/styles.css";
import "normalize.css/normalize.css";
import "./_assets/globals.css";

export const metadata: Metadata = {
  title: "Your Application Title Goes Here",
  description: "Your application description goes here",
};

// Root layout component -> the index.html file will be wrapped with this component
export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body>
        <Root>{children}</Root>
      </body>
    </html>
  );
}
