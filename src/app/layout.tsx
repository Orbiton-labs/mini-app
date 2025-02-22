import type { Metadata, Viewport } from "next";
import { getLocale } from "next-intl/server";
import type { PropsWithChildren } from "react";

import { Root } from "@/components/Root/Root";

import "@telegram-apps/telegram-ui/dist/styles.css";
import Head from "next/head";
import "normalize.css/normalize.css";
import "./_assets/globals.css";

export const metadata: Metadata = {
  title: "Orbiton",
  description: "Welcome to orbiton",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
};

// Root layout component -> the index.html file will be wrapped with this component
export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <body>
        <Root>{children}</Root>
      </body>
    </html>
  );
}
