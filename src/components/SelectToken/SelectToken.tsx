import { UNKNOWN_IMAGE_URL } from "@/constants/unknown";
import { Icon20Chevron } from "@/icons/20/chevron-down";
import { IconClose } from "@/icons/fixed/close";
import { Token } from "@/types/Token";
import { Modal } from "@telegram-apps/telegram-ui";
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
          className="flex justify-between gap-2 w-40 max-w-44 items-center p-2 bg-grey4 rounded-lg opacity-80"
          onClick={displayTokenList}
        >
          <div className="flex overflow-hidden w-fit gap-2 justify-between items-center">
            <Image
              src={selectedToken?.token.image || UNKNOWN_IMAGE_URL}
              alt="token"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span
              className={`text-base text-white3 ${
                selectedToken?.token.symbol &&
                selectedToken?.token.symbol.length > 5
                  ? "text-xs"
                  : ""
              }`}
            >
              {selectedToken?.token.symbol || "Select token"}
            </span>
          </div>
          <div>
            <Icon20Chevron />
          </div>
        </div>
      }
    >
      <div className="bg-gradient-to-b from-grey1 to-grey2 rounded-t-2xl max-h-[86vh] overflow-hidden z-20">
        <div className="flex justify-between items-center mx-4 px-2 py-5">
          <div className="w-3"></div>
          <span className="text-base text-white2">Select a token</span>
          <ModalClose>
            <IconClose />
          </ModalClose>
        </div>
        <InputSearch />
        {tokenList.map((option, index) => (
          <ModalClose key={index}>
            <div className="mx-4 flex py-2 gap-2 px-1 justify-start items-center" onClick={() => setToken(option)}>
              <Image
                className="rounded-full ml-1"
                src={option.token.image}
                alt="token icon"
                width={32}
                height={32}
              />

              <span className="text-base text-white2">
                {option.token.symbol}
              </span>
            </div>
          </ModalClose>
        ))}
      </div>
    </Modal>
  );
};
