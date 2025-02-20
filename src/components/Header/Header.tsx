import { useBoundStore } from "@/store";
import { Divider, FixedLayout, Image } from "@telegram-apps/telegram-ui";
import { Address, SenderArguments } from "@ton/core";
import {
  THEME,
  TonConnectButton,
  useTonAddress,
  useTonConnectUI,
  useTonWallet,
} from "@tonconnect/ui-react";
import { useEffect } from "react";
import tonSvg from "../../app/_assets/ton.svg";

export function Header({ props }: any): JSX.Element {
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);
  const wallet = useTonWallet();
  const [tonConnectUI] = useTonConnectUI();

  const initWallet = useBoundStore((state) => state.initWallet);

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
    <FixedLayout
      vertical="top"
      className="flex flex-col items-center gap-2 z-10 pt-8 pl-4 pr-4"
    >
      <div className="flex justify-between w-full border-b-[1px] border-b-grey3 pt-2 pb-2">
        <div className="flex items-center justify-between gap-2">
          <Image
            src={tonSvg.src}
            alt="OrbiTON Logo"
            size={24}
            className="bg-blue-600"
          />
          <span className="text-base">Orbiton</span>
        </div>

        <TonConnectButton />
      </div>
      <Divider />
    </FixedLayout>
  );
}

/*
font-family: Michroma;
font-weight: 400;
font-size: Heading/Size Base;
line-height: 28.8px;
letter-spacing: -2%;
text-align: center;
*/