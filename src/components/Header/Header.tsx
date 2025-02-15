import { useBoundStore } from "@/store";
import { Divider, FixedLayout, Image, Title } from "@telegram-apps/telegram-ui";
import {
  TonConnectButton,
  useTonAddress,
  useTonWallet,
} from "@tonconnect/ui-react";
import { useEffect } from "react";
import tonSvg from "../../app/_assets/ton.svg";

export function Header({ props }: any): JSX.Element {
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);
  const wallet = useTonWallet();

  const initWallet = useBoundStore((state) => state.initWallet);

  useEffect(() => {
    initWallet(userFriendlyAddress, rawAddress, wallet);
  }, [userFriendlyAddress, rawAddress, wallet]);

  return (
    <FixedLayout
      vertical="top"
      className="p-4 flex flex-col items-center gap-2 z-10"
    >
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
  );
}
