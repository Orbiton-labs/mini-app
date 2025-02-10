"use client";

import {
  initData,
  miniApp,
  useLaunchParams,
  useSignal,
} from "@telegram-apps/sdk-react";
import {
  AppRoot,
  Divider,
  FixedLayout,
  Image,
  Tabbar,
  Title,
} from "@telegram-apps/telegram-ui";
import { TonConnectButton, TonConnectUIProvider } from "@tonconnect/ui-react";
import { type PropsWithChildren, useEffect, useState } from "react";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ErrorPage } from "@/components/ErrorPage";
import { setLocale } from "@/core/i18n/locale";
import { init } from "@/core/init";
import { useClientOnce } from "@/hooks/useClientOnce";
import { useDidMount } from "@/hooks/useDidMount";
import { useTelegramMock } from "@/hooks/useTelegramMock";
import { usePathname, useRouter } from "next/navigation";
import tonSvg from "../../app/_assets/ton.svg";

import { Icon36Explore } from "@/icons/36/explore";
import { Icon36Pool } from "@/icons/36/pool";
import { Icon36Portfolio } from "@/icons/36/portfolio";
import { Icon36Swap } from "@/icons/36/swap";

const TABS = [
  {
    id: "welcome",
    text: "Welcome",
    Icon: Icon36Swap,
  },
  {
    id: "swap",
    text: "Swap",
    Icon: Icon36Swap,
  },
  {
    id: "pools",
    text: "Pools",
    Icon: Icon36Pool,
  },
  {
    id: "explore",
    text: "Explore",
    Icon: Icon36Explore,
  },
  {
    id: "portfolio",
    text: "Portfolio",
    Icon: Icon36Portfolio,
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
        className={`${isDark ? 'theme-black' : ''}`}
        appearance={isDark ? "dark" : "light"}
        platform={["macos", "ios"].includes(lp.platform) ? "ios" : "base"}
      >
        <FixedLayout vertical="top" className="p-4 flex flex-col items-center gap-2 z-10">
          <div className="flex justify-between w-full ">
            <div className="flex items-center justify-between gap-2">
              <Image
                src={tonSvg.src}
                alt="OrbiTON Logo"
                size={40}
                className="bg-blue-600"
              />
              <Title level="3" weight="2">
                Orbiton
              </Title>
            </div>

            <TonConnectButton />
          </div>
          <Divider />
        </FixedLayout>

        {/* <div className="flex justify-center items-center w-screen min-h-screen"> */}
        {children}
        {/* </div> */}

        <FixedLayout vertical="bottom">
          <Tabbar className="flex">
            {TABS.filter((tab) => tab.id !== "welcome").map(
              ({ id, text, Icon }) => (
                <Tabbar.Item
                  key={id}
                  text={text}
                  selected={id === currentTab}
                  onClick={() => {
                    router.push(`/${id}`);
                  }}
                >
                  <Icon />
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
