import { UNKNOWN_IMAGE_URL } from "@/constants/unknown";
import { IconClose } from "@/icons/fixed/close";
import { Token } from "@/types/Token";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import { InputSearch } from "../InputSearch/InputSearch";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
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
  canChangeToken?: boolean;
}

export const SelectToken: FC<SelectTokenProps> = ({
  selectedToken,
  tokenList,
  displayTokenList,
  setToken,
  canChangeToken = true,
}) => {
  return (
    <Drawer>
      <DrawerTitle></DrawerTitle>
      <DrawerTrigger disabled={!canChangeToken} asChild>
        <Button
          className="min-w-fit"
          asChild={false}
          disabled={!canChangeToken}
        >
          <div className="p-2 mt-2 bg-grey4 rounded-lg opacity-80 flex gap-2 justify-between items-center">
            <Image
              src={selectedToken?.token.image || UNKNOWN_IMAGE_URL}
              alt="token"
              width={32}
              height={32}
              className="rounded-full flex-none"
            />
            <p className="flex-1 min-w-0">
              {selectedToken?.token.symbol || "Select token"}
            </p>
            {canChangeToken && (
              <div className="flex-none">
                <ChevronDownIcon width={20} height={20} />
              </div>
            )}
          </div>
        </Button>
        {/* </div> */}
      </DrawerTrigger>
      <DrawerContent
        aria-describedby={undefined}
        className="bg-black3 rounded-t-2xl max-h-[86vh] overflow-hidden border-none mb-10"
      >
        <DrawerHeader className="flex justify-center items-center mx-4 px-2 py-5">
          <div>
            <span className="col-span-8 text-sm text-white2">
              Select a token
            </span>
          </div>
          <DrawerClose>
            <IconClose className="absolute right-6 top-6" />
          </DrawerClose>
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
          <DrawerClose key={index}>
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
          </DrawerClose>
        ))}
      </DrawerContent>
    </Drawer>
  );
};
