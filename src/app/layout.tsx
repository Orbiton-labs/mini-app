import type { Metadata, Viewport } from "next";
import { type PropsWithChildren } from "react";

import { Root } from "@/components/Root/Root";

import "@telegram-apps/telegram-ui/dist/styles.css";
import "normalize.css/normalize.css";
import "./_assets/globals.css";
import { ApolloWrapper } from "./ApolloWrapper";

export const metadata: Metadata = {
  title: "Orbiton",
  description: "Welcome to orbiton",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// Root layout component -> the index.html file will be wrapped with this component
export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>
          <Root>{children}</Root>
        </ApolloWrapper>
      </body>
    </html>
  );
}
