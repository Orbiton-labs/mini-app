import { truncateHash } from "@/helper/format";
import { useInitEnv } from "@/hooks/useInitEnv";
import { Logo } from "@/icons/fixed/logo";
import { useTokenListStore, useTonWalletStore } from "@/store";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Address, Cell, SenderArguments } from "@ton/core";
import {
  TonConnectButton,
  useTonAddress,
  useTonConnectUI,
  useTonWallet
} from "@tonconnect/ui-react";
import { Wallet } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export interface HeaderProps {
  isFullScreen: boolean;
}

function Account() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const wallet = useTonWallet();
  const [tonConnectUI] = useTonConnectUI();

  return (
    <div className="flex w-full sm:w-2/3 md:w-1/2 lg:w-1/3 items-center justify-end gap-2 sm:gap-3 md:gap-4 whitespace-nowrap">
      <Popover
        open={isPopoverOpen}
        onOpenChange={() => {
          if (!tonConnectUI.connected) return;
          setIsPopoverOpen(!isPopoverOpen);
        }}
      >
        <PopoverTrigger className="relative">
          <Wallet
            stroke="url(#paint0_linear_257_2027)"
            onClick={() =>
              tonConnectUI.connected
                ? setIsPopoverOpen(true)
                : tonConnectUI.openModal()
            }
            size={28}
            className="cursor-pointer rounded-xl hover:bg-border-light sm:size-14 md:size-14"
          />
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
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);
  const wallet = useTonWallet();
  const [tonConnectUI] = useTonConnectUI();
  const { isMobile } = useInitEnv();

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
      <div className={`flex justify-between w-full ${isMobile ? 'border-b-[1px] border-b-grey7' : ''} pt-1 pb-1 sm:pt-1.5 sm:pb-1.5 md:pt-2 md:pb-2`}>
        <div className="flex items-center gap-1 sm:gap-2">
          <Logo className="w-10 h-10 sm:w-14 sm:h-14 md:w-14 md:h-14" />
          <span className="text-lg sm:text-xl md:text-2xl text-white3">Orbiton</span>
        </div>

        <Account />
      </div>
    </div>
  );
}
