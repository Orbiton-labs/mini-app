import { AnimatePresence } from "framer-motion";
import type { Metadata, Viewport } from "next";
import { type PropsWithChildren } from "react";

import { Root } from "@/components/Root/Root";

import { Toaster } from "@/components/ui/toaster";
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
          <AnimatePresence>
            <Root>{children}</Root>
          </AnimatePresence>
        </ApolloWrapper>
        <Toaster />
      </body>
    </html>
  );
}
