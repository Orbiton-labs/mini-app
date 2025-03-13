import { UNKNOWN_IMAGE_URL } from "@/constants/unknown";
import { Icon20Chevron } from "@/icons/20/chevron-down";
import { IconClose } from "@/icons/fixed/close";
import { Token } from "@/types/Token";
import { ModalClose } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalClose/ModalClose";
import Image from "next/image";
import { FC } from "react";
import { InputSearch } from "../InputSearch/InputSearch";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

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
    <Drawer>
      <DrawerTitle></DrawerTitle>
      <DrawerTrigger>
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
      </DrawerTrigger>
      <DrawerContent
        aria-describedby={undefined}
        className="bg-black3 rounded-t-2xl max-h-[86vh] overflow-hidden border-none mb-10"
      >
        <DrawerHeader className="grid-cols-4 grid-rows-1 items-center mx-4 px-2 py-5">
          <div></div>
          <span className="col-span-2 text-base text-white2">
            Select a token
          </span>
          <div className="flex justify-end">
            <ModalClose>
              <IconClose />
            </ModalClose>
          </div>
        </DrawerHeader>

        <div className="mx-4">
          <InputSearch
            type="text"
            onChange={(event) => {
              console.log(event);
            }}
            placeholder="Find token by name"
            value={undefined}
          />
        </div>
        {tokenList.map((option, index) => (
          <ModalClose key={index}>
            <div
              className="mx-4 flex py-2 gap-2 px-1 justify-start items-center"
              onClick={() => setToken(option)}
            >
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
      </DrawerContent>
    </Drawer>
  );
};
