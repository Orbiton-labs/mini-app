"use client";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ErrorPage } from "@/components/ErrorPage";
import { AnimatedLink } from "@/components/ui/animated-link";
import { init } from "@/core/init";
import { useClientOnce } from "@/hooks/useClientOnce";
import { useDidMount } from "@/hooks/useDidMount";
import { IconExplore } from "@/icons/fixed/explore";
import { IconPool } from "@/icons/fixed/pool";
import { IconPortfolio } from "@/icons/fixed/portfolio";
import { IconSwap } from "@/icons/fixed/swap";
import { usePendingTxStore } from "@/store";
import {
  miniApp,
  postEvent,
  retrieveLaunchParams,
  useSignal,
} from "@telegram-apps/sdk-react";
import { AppRoot, FixedLayout, Tabbar } from "@telegram-apps/telegram-ui";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { type PropsWithChildren, useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { TransactionStatus } from "../TransactionStatus/TransactionStatus";

const TABS = [
  {
    id: "swap",
    text: "Swap",
    Icon: IconSwap,
  },
  {
    id: "pools",
    text: "Pools",
    Icon: IconPool,
  },
  {
    id: "explore",
    text: "Explore",
    Icon: IconExplore,
  },
  {
    id: "portfolio",
    text: "Portfolio",
    Icon: IconPortfolio,
  },
];

function RootInner({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const lp = retrieveLaunchParams();
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const isTelegramMiniApp = lp.tgWebAppPlatform === "ios" || lp.tgWebAppPlatform === "android";
  const twaReturnUrl = isTelegramMiniApp ? "https://t.me/orbiton_swap_bot" : undefined;

  useEffect(() => {
    if (isTelegramMiniApp) {
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
          top: 140px; /* Increased from 96px to 140px for header */
          right: 0;
          bottom: 0;
          overflow-x: hidden;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          height: calc(100% - 140px); /* Adjusted to account for larger header */
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
    }
  }, [lp, isTelegramMiniApp]);

  useClientOnce(() => {
    init();
  });
  const isDark = useSignal(miniApp.isDark);
  const [currentTab, setCurrentTab] = useState(TABS[0].id);

  useEffect(() => {
    // take the first element path of the pathname
    const id = pathname.split("/")[1];

    if (id === "") {
      setCurrentTab("swap");
      return;
    }

    setCurrentTab(id);
  }, [pathname]);

  const show = usePendingTxStore((state) => state.show);

  return (
    <>
      <TonConnectUIProvider
        manifestUrl="https://raw.githubusercontent.com/BKHNZ-labs/mini-app/main/public/tonconnect-manifest.json"
        actionsConfiguration={{
          twaReturnUrl
        }}
      >
        <AppRoot
          className={`${isDark ? "theme-black" : ""}`}
          appearance={isDark ? "dark" : "light"}
          platform={"base"}
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

          <FixedLayout vertical="bottom" className="w-full z-50">
            {show && (
              <div className="w-full flex justify-center items-center">
                <TransactionStatus />
              </div>
            )}

            <Tabbar className="flex bg-grey3 justify-evenly p-2 items-center">
              {TABS.filter((tab) => tab.id !== "welcome").map(
                ({ id, text, Icon }) => {
                  const selected = id === currentTab;

                  return (
                    <AnimatedLink
                      key={id}
                      href={`/${id}`}
                      isActive={selected}
                      className={`${selected
                        ? "bg-gradient-to-b from-green-1 to-green-2 text-transparent bg-clip-text"
                        : "text-white-2"
                        } mb-6 flex flex-col gap-2 justify-between items-center pt-3 pb-4 pl-2 pr-2`}
                    >
                      <Icon isActive={id === currentTab} />
                      <span
                        className={`${selected
                          ? "bg-gradient-to-b from-green1 via-green1 to-green2 bg-clip-text text-transparent"
                          : ""
                          } text-xs`}
                      >
                        {text}
                      </span>
                    </AnimatedLink>
                  );
                }
              )}
            </Tabbar>
          </FixedLayout>
        </AppRoot>
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
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
      Loading
    </div>
  );
}
