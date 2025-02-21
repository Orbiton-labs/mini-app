"use client";

import {
  initData,
  miniApp,
  useLaunchParams,
  useSignal,
} from "@telegram-apps/sdk-react";
import { AppRoot, FixedLayout, Tabbar } from "@telegram-apps/telegram-ui";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { type PropsWithChildren, useEffect, useState } from "react";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ErrorPage } from "@/components/ErrorPage";
import { setLocale } from "@/core/i18n/locale";
import { init } from "@/core/init";
import { useClientOnce } from "@/hooks/useClientOnce";
import { useDidMount } from "@/hooks/useDidMount";
import { useTelegramMock } from "@/hooks/useTelegramMock";
import { usePathname, useRouter } from "next/navigation";

import { Icon36Swap } from "@/icons/36/swap";
import { IconExplore } from "@/icons/fixed/explore";
import { IconPool } from "@/icons/fixed/pool";
import { IconPortfolio } from "@/icons/fixed/potfolio";
import { IconSwap } from "@/icons/fixed/swap";
import { Header } from "../Header/Header";

const TABS = [
  {
    id: "welcome",
    text: "Welcome",
    Icon: Icon36Swap,
  },
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
  const isDev = process.env.NODE_ENV === "development";

  // Mock Telegram environment in development mode if needed.
  if (isDev) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTelegramMock();
  }

  const lp = useLaunchParams();
  const debug = isDev || lp.startParam === "debug";

  // Initialize the library.
  useClientOnce(() => {
    init(debug);
  });

  const isDark = useSignal(miniApp.isDark);
  const initDataUser = useSignal(initData.user);

  // Set the user locale.
  useEffect(() => {
    initDataUser && setLocale(initDataUser.languageCode);
  }, [initDataUser]);

  const [currentTab, setCurrentTab] = useState(TABS[0].id);

  const router = useRouter();

  useEffect(() => {
    // take the first element path of the pathname
    const id = pathname.split("/")[1];
    setCurrentTab(id);
  }, [pathname]);

  return (
    <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/BKHNZ-labs/mini-app/main/public/tonconnect-manifest.json">
      <AppRoot
        className={`${
          isDark ? "theme-black" : ""
        } bg-gradient-to-b from-grey1 to-grey2`}
        appearance={isDark ? "dark" : "light"}
        platform={["macos", "ios"].includes(lp.platform) ? "ios" : "base"}
      >
        <Header />

        {children}

        <FixedLayout vertical="bottom">
          <Tabbar className="flex bg-grey3">
            {TABS.filter((tab) => tab.id !== "welcome").map(
              ({ id, text, Icon }) => (
                <Tabbar.Item
                  style={
                    id === currentTab
                      ? {
                          background:
                            "linear-gradient(to bottom, var(--color-green-1), var(--color-green-2))",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }
                      : {
                        color: "var(--color-white-2)"
                      }
                  }
                  key={id}
                  text={text}
                  selected={id === currentTab}
                  onClick={() => {
                    router.push(`/${id}`);
                  }}
                >
                  <Icon isActive={id === currentTab} />
                </Tabbar.Item>
              )
            )}
          </Tabbar>
        </FixedLayout>
      </AppRoot>
    </TonConnectUIProvider>
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
