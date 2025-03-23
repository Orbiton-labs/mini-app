"use client";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ErrorPage } from "@/components/ErrorPage";
import { init } from "@/core/init";
import { useClientOnce } from "@/hooks/useClientOnce";
import { useDidMount } from "@/hooks/useDidMount";
import { IconExplore } from "@/icons/fixed/explore";
import { IconLoading } from "@/icons/fixed/loading";
import { IconPool } from "@/icons/fixed/pool";
import { IconPortfolio } from "@/icons/fixed/portfolio";
import { IconSwap } from "@/icons/fixed/swap";
import { usePendingTxStore } from "@/store";
import {
  isTMA,
  postEvent,
  retrieveLaunchParams
} from "@telegram-apps/sdk-react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { AnimatePresence } from "framer-motion";
import { type PropsWithChildren, useEffect, useState } from "react";
import { BottomNav } from "../BottomNav";
import { Header } from "../Header/Header";
import { TransactionStatus } from "../TransactionStatus/TransactionStatus";
import { Skeleton } from "../ui/skeleton";

function RootInner({ children }: PropsWithChildren) {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [isTelegramMiniApp, setIsTelegramMiniApp] = useState<boolean>(false);


  console.log(isTMA())

  useEffect(() => {
    if (!isTMA()) {
      return;
    }
    const lp = retrieveLaunchParams();
    const isTelegramMiniApp = lp.tgWebAppPlatform === "ios" || lp.tgWebAppPlatform === "android";
    setIsTelegramMiniApp(isTelegramMiniApp);
    // const twaReturnUrl = isTelegramMiniApp ? "https://t.me/orbiton_swap_bot" : undefined;
    if (!isTelegramMiniApp) {
      return;
    }
    postEvent("web_app_request_fullscreen");
    postEvent("web_app_request_content_safe_area");
    postEvent("web_app_request_safe_area");
    postEvent("web_app_setup_swipe_behavior", {
      allow_vertical_swipe: false,
    });
    postEvent("web_app_expand");
    setIsFullScreen(true);

    // Add sticky app CSS classes for mobile platforms
    document.body.classList.add('mobile-body');

    // Add styles to the document
    const style = document.createElement('style');
    style.textContent = `
        .mobile-body {
          overflow: hidden;
          height: 100vh;
          width: 100vw;
          position: fixed;
        }
        
        .mobile-wrap {
          position: absolute;
          left: 0;
          top: 160px; /* Increased from 96px to 160px for header */
          right: 0;
          bottom: 0;
          overflow-x: hidden;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          height: calc(100% - 160px); /* Adjusted to account for larger header */
          width: 100%;
          z-index: 1;
        }
        
        .content-scroll {
          min-height: 100%;
          padding-bottom: 60px; /* Ensure space for fixed nav */
        }
        
        .header-fixed {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 10;
        }
      `;
    document.head.appendChild(style);
  }, []);

  useClientOnce(() => {
    if (isTMA()) {
      init();
    }
  });

  const show = usePendingTxStore((state) => state.show);

  return (
    <>
      <TonConnectUIProvider
        manifestUrl="https://raw.githubusercontent.com/Orbiton-labs/mini-app/main/public/tonconnect-manifest.json"
        actionsConfiguration={{
          twaReturnUrl: "https://t.me/orbiton_swap_bot"
        }}
      >

        <div className={`${isTelegramMiniApp ? 'header-fixed' : ''}`}>
          <Header isFullScreen={isFullScreen} />
        </div>

        <div className={`${isTelegramMiniApp ? 'mobile-wrap' : ''}`}>
          <div className="content-scroll">
            <AnimatePresence mode="wait">
              {children}
            </AnimatePresence>
          </div>
        </div>

        {show && (
          <div className="fixed bottom-16 left-0 right-0 z-50 flex justify-center">
            <TransactionStatus />
          </div>
        )}

        <BottomNav />
      </TonConnectUIProvider>
    </>
  );
}

export function Root(props: PropsWithChildren) {
  // Unfortunately, Telegram Mini Apps does not allow us to use all features of
  // the Server Side Rendering. That's why we are showing loader on the server
  // side.
  const didMount = useDidMount();

  return didMount ? (
    <ErrorBoundary fallback={ErrorPage}>
      <RootInner {...props} />
    </ErrorBoundary>
  ) : (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black3 gap-4">
      <IconLoading className="w-12 h-12" />
      <div className="flex flex-col gap-2 w-3/4 max-w-md">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
    </div>
  );
}
