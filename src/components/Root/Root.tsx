"use client";

import {
  initData,
  miniApp,
  useLaunchParams,
  useSignal,
} from "@telegram-apps/sdk-react";
import { AppRoot, FixedLayout, Tabbar } from "@telegram-apps/telegram-ui";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { type PropsWithChildren, use, useEffect, useState } from "react";

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
import Link from "next/link";
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
    // preload all the tabs to make the navigation faster
    TABS.forEach(({ id }) => {
      router.prefetch(`/${id}`);
    });
    console.log("prefetched");
  }, []);

  useEffect(() => {
    // take the first element path of the pathname
    const id = pathname.split("/")[1];
    setCurrentTab(id);
  }, [pathname]);

  return (
    <>
      <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/BKHNZ-labs/mini-app/main/public/tonconnect-manifest.json">
        <AppRoot
          className={`${isDark ? "theme-black" : ""}`}
          appearance={isDark ? "dark" : "light"}
          platform={"base"}
        >
          <Header />

          {children}

          <FixedLayout vertical="bottom">
            <Tabbar className="flex bg-grey3 justify-evenly p-2 items-center">
              {TABS.filter((tab) => tab.id !== "welcome").map(
                ({ id, text, Icon }) => {
                  const selected = id === currentTab;

                  return (
                    <Link
                      key={id}
                      href={`/${id}`}
                      className={`${
                        selected
                          ? "bg-gradient-to-b from-green-1 to-green-2 text-transparent bg-clip-text"
                          : "text-white-2"
                      } mb-6 flex flex-col gap-2 justify-between items-center pt-3 pb-4 pl-2 pr-2`}
                      // onClick={() => router.push(`/${id}`)}
                    >
                      <Icon isActive={id === currentTab} />
                      <span
                        className={`${
                          selected
                            ? "bg-gradient-to-b from-green1 via-green1 to-green2 bg-clip-text text-transparent"
                            : ""
                        } text-xs`}
                      >
                        {text}
                      </span>
                    </Link>
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
