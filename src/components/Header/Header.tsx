import { truncateHash } from "@/helper/format";
import { Logo } from "@/icons/fixed/logo";
import { useTokenListStore, useTonWalletStore } from "@/store";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Address, Cell, SenderArguments } from "@ton/core";
import {
  useTonAddress,
  useTonConnectUI,
  useTonWallet
} from "@tonconnect/ui-react";
import { Wallet } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { TABS } from "../BottomNav";
import { AnimatedLink } from "../ui/animated-link";
import { Button } from "../ui/button";

export interface HeaderProps {
  isFullScreen: boolean;
}

function Account() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const wallet = useTonWallet();
  const [tonConnectUI] = useTonConnectUI();

  return (
    <div className="flex items-center justify-end gap-2 sm:gap-3 md:gap-4 whitespace-nowrap">
      {/* SVG definitions for the wallet icon */}
      <svg width="0" height="0" style={{ position: 'absolute', visibility: 'hidden' }}>
        <defs>
          <linearGradient
            id="paint0_linear_257_2027"
            x1="32.7002"
            y1="2"
            x2="32.7002"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#836CDE" />
            <stop offset="1" stopColor="#B866D2" />
          </linearGradient>
        </defs>
      </svg>

      <Popover
        open={isPopoverOpen}
        onOpenChange={() => {
          if (!tonConnectUI.connected) return;
          setIsPopoverOpen(!isPopoverOpen);
        }}
      >
        <PopoverTrigger className="relative">
          <div className="flex items-center justify-center cursor-pointer">
            <Wallet
              stroke="url(#paint0_linear_257_2027)"
              onClick={() =>
                tonConnectUI.connected
                  ? setIsPopoverOpen(true)
                  : tonConnectUI.openModal()
              }
              size={28}
              className="w-7 h-7 sm:w-10 sm:h-10 md:w-10 md:h-10"
            />
          </div>
        </PopoverTrigger>
        {wallet ? (
          <PopoverContent
            align="end"
            className="flex w-fit flex-col items-center gap-1 rounded-xl p-3 sm:p-4 bg-black3 border border-grey7"
            style={{
              zIndex: 10,
            }}
          >
            <p className="text-xs opacity-50">
              {tonConnectUI.wallet?.device.appName}
            </p>
            <p className="text-xs sm:text-sm">
              {truncateHash(
                Address.parseRaw(wallet.account.address).toString({
                  bounceable: false,
                })
              )}
            </p>
            <Button
              onClick={() => {
                setIsPopoverOpen(false);
                tonConnectUI.disconnect();
              }}
              variant={"ghost"}
              className="w-full mt-1 rounded-xl bg-grey4 py-1.5 sm:py-2 hover:opacity-80 text-xs"
            >
              Disconnect
            </Button>
          </PopoverContent>
        ) : null}
      </Popover>
    </div>
  );
}

export function Header({ isFullScreen }: HeaderProps): JSX.Element {
  const pathname = usePathname();
  const currentTab = pathname.split("/")[1] || "swap";

  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);
  const wallet = useTonWallet();
  const [tonConnectUI] = useTonConnectUI();

  tonConnectUI.uiOptions = {
    actionsConfiguration: {
      modals: ['before'],
      notifications: 'all',
      returnStrategy: 'back',
      /**
       * Specifies return url for TWA-TWA connections.
       * This will be applied as a return strategy if dApp is opened as a TWA and user selects TWA wallet (overrides `returnStrategy` if).
       */
      // twaReturnUrl: window.location.origin as `${string}://${string}`
      /**
       * @deprecated Shouldn't be used anymore, SDK will automatically detect return strategy for TWA-TWA connections.
       * Specifies whether the method should redirect user to the connected wallet
       * @default 'ios'
       */
      // skipRedirectToWallet: 'never'
    }
  }

  const initWallet = useTonWalletStore((state) => state.initWallet);
  const fetchAccountData = useTokenListStore((state) => state.fetchAccountData);

  useEffect(() => {
    initWallet(userFriendlyAddress, rawAddress, wallet, tonConnectUI, {
      send: async (args: SenderArguments) => {
        try {
          const tx = await tonConnectUI.sendTransaction({
            messages: [
              {
                address: args.to.toString(),
                amount: args.value.toString(),
                payload: args.body?.toBoc().toString("base64"),
              },
            ],
            validUntil: Date.now() + 5 * 60 * 1000,
          });

          const cell = Cell.fromBase64(tx.boc);
          const buffer = cell.hash();
          const txHash = buffer.toString('hex');

          return txHash;
        } catch (e) {
          console.error(e);
          return '';
        }
      },
      sendMultiple: async (args: SenderArguments[]) => {
        try {
          const tx = await tonConnectUI.sendTransaction({
            messages: args.map((arg) => ({
              address: arg.to.toString(),
              amount: arg.value.toString(),
              payload: arg.body?.toBoc().toString("base64"),
            })),
            validUntil: Date.now() + 5 * 60 * 1000,
          });

          const cell = Cell.fromBase64(tx.boc);
          const buffer = cell.hash();
          const txHash = buffer.toString('hex');

          return txHash;
        } catch (e) {
          console.error(e);
          return '';
        }
      },
      address: tonConnectUI.account?.address
        ? Address.parse(tonConnectUI.account?.address)
        : undefined,
    });
  }, [userFriendlyAddress, rawAddress, wallet, tonConnectUI]);

  // Add polling effect for account data
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (wallet && tonConnectUI.connected) {
      // Initial fetch
      fetchAccountData();

      // Set up polling interval
      interval = setInterval(() => {
        fetchAccountData();
      }, 20000);
    }

    // Cleanup interval on unmount or when wallet disconnects
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [wallet, tonConnectUI.connected, fetchAccountData]);

  return (
    <div
      className={`flex flex-col items-center gap-1 sm:gap-2 ${isFullScreen ? "pt-16 sm:pt-20 md:pt-24" : "pt-4 sm:pt-6 md:pt-8"
        } px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 w-full max-w-screen-2xl mx-auto`}
    >
      <div className={`flex items-center justify-between w-full ${
        // Conditionally add border only on mobile screens (shown by default, hidden on md and larger)
        'border-b-[1px] border-b-grey7 md:border-b-0'
        } pt-1 pb-1 sm:pt-1.5 sm:pb-1.5 md:pt-2 md:pb-2`}>
        <div className="flex items-center gap-1 sm:gap-2 w-1/4 lg:w-1/5">
          <Logo className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14" />
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-white3">Orbiton</span>
        </div>

        {/* Show navigation on md screens and larger */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-2 md:gap-4 lg:gap-6 px-1 sm:px-2 z-10">
          {TABS.map(({ id, text, Icon }) => {
            const selected = id === currentTab;
            return (
              <AnimatedLink
                key={id}
                href={`/${id}`}
                isActive={selected}
              >
                <span
                  className={`${selected
                    ? "bg-gradient-to-b from-green1 via-green1 to-green2 bg-clip-text text-transparent"
                    : ""
                    } text-xs sm:text-sm md:text-base lg:text-lg`}
                >
                  {text}
                </span>
              </AnimatedLink>
            )
          })}
        </div>

        <div className="flex justify-end w-1/4 lg:w-1/5">
          <Account />
        </div>
      </div>
    </div>
  );
}
