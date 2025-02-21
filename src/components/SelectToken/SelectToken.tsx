import { UNKNOWN_IMAGE_URL } from "@/constants/unknown";
import { Icon20Chevron } from "@/icons/20/chevron-down";
import { Icon28Close } from "@/icons/28/close";
import { Token } from "@/types/Token";
import { Cell, Modal } from "@telegram-apps/telegram-ui";
import { ModalClose } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalClose/ModalClose";
import Image from "next/image";
import { FC } from "react";
import { InputSearch } from "../InputSearch/InputSearch";

export interface SelectTokenProps {
  selectedToken: Token | null;
  tokenList: Token[];
  displayTokenList: () => void;
  setToken: (token: Token) => void;
}

export const SelectToken: FC<SelectTokenProps> = ({
  selectedToken,
  tokenList,
  displayTokenList,
  setToken,
}) => {
  return (
    <Modal
      trigger={
        <div
          className="flex justify-between items-center p-2 w-40 bg-grey4 rounded-lg opacity-80"
          onClick={displayTokenList}
        >
          <div className="flex gap-2 justify-between items-center">
            <Image
              src={selectedToken?.token.image || UNKNOWN_IMAGE_URL}
              alt="token"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-base text-white3">
              {selectedToken?.token.symbol || "Select token"}
            </span>
          </div>
          <Icon20Chevron />
        </div>
      }
    >
      <div className="bg-gradient-to-b from-grey1 to-grey2">
        <div className="flex justify-between items-center">
          <div></div>
          <span>Select a token</span>
          <ModalClose>
            <Icon28Close style={{ color: "var(--tgui--plain_foreground)" }} />
          </ModalClose>
        </div>
        <InputSearch />
        {tokenList.map((option, index) => (
          <ModalClose key={index}>
            <Cell
              onClick={() => setToken(option)}
              before={
                <Image
                  src={option.token.image}
                  alt="token icon"
                  width={28}
                  height={28}
                />
              }
              after={<h2>{option.balance}</h2>}
              Component="label"
            >
              {option.token.symbol}
            </Cell>
          </ModalClose>
        ))}
      </div>
    </Modal>
  );
};
