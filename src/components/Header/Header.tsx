import { truncateHash } from "@/helper/format";
import { Logo } from "@/icons/fixed/logo";
import { useTonWalletStore } from "@/store";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Divider } from "@telegram-apps/telegram-ui";
import { Address, SenderArguments } from "@ton/core";
import {
  TonConnectButton,
  useTonAddress,
  useTonConnectUI,
  useTonWallet,
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
    <div className="flex w-1/3 items-center justify-end gap-4 whitespace-nowrap">
      <TonConnectButton className="max-md:hidden" />
      <Popover
        open={isPopoverOpen}
        onOpenChange={() => {
          if (!tonConnectUI.connected) return;
          setIsPopoverOpen(!isPopoverOpen);
        }}
      >
        <PopoverTrigger className="relative">
          <Wallet
            onClick={() =>
              tonConnectUI.connected
                ? setIsPopoverOpen(true)
                : tonConnectUI.openModal()
            }
            size={40}
            className="cursor-pointer rounded-xl hover:bg-border-light md:hidden"
          />
        </PopoverTrigger>
        {wallet ? (
          <PopoverContent
            align="end"
            className="flex w-fit flex-col items-center gap-1 rounded-xl p-4 bg-black3 border border-grey7"
            style={{
              zIndex: 10,
            }}
          >
            <p className="text-xs opacity-50">
              {tonConnectUI.wallet?.device.appName}
            </p>
            <p className="text-xs">
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
              className="w-full mt-1 rounded-xl bg-grey4 py-2 hover:opacity-80 text-xs"
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

  const initWallet = useTonWalletStore((state) => state.initWallet);

  useEffect(() => {
    initWallet(userFriendlyAddress, rawAddress, wallet, tonConnectUI, {
      send: async (args: SenderArguments) => {
        try {
          tonConnectUI.sendTransaction({
            messages: [
              {
                address: args.to.toString(),
                amount: args.value.toString(),
                payload: args.body?.toBoc().toString("base64"),
              },
            ],
            validUntil: Date.now() + 5 * 60 * 1000,
          });
        } catch (e) {
          console.error(e);
        }
      },
      address: tonConnectUI.account?.address
        ? Address.parse(tonConnectUI.account?.address)
        : undefined,
    });
  }, [userFriendlyAddress, rawAddress, wallet, tonConnectUI]);

  return (
    <div
      className={`flex flex-col items-center gap-2 ${
        isFullScreen ? "pt-24" : "pt-8"
      } pl-4 pr-4`}
    >
      <div className="flex justify-between w-full border-b-[1px] border-b-grey3 pt-2 pb-2">
        <div className="flex items-center justify-between gap-2">
          <Logo width={40} height={40} />
          <span className="text-xl text-white3">Orbiton</span>
        </div>

        <Account />
      </div>
      <Divider />
    </div>
  );
}
