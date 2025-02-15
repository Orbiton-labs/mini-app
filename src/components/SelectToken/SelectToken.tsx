import { UNKNOWN_IMAGE_URL } from "@/constants/unknown";
import { Icon28ArrowDown } from "@/icons/28/arrow-down";
import { Icon28Close } from "@/icons/28/close";
import { Token } from "@/types/Token";
import {
  Button,
  Cell,
  Divider,
  List,
  Modal,
  Section,
  Text,
} from "@telegram-apps/telegram-ui";
import { ModalClose } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalClose/ModalClose";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
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
      header={
        <ModalHeader
          after={
            <ModalClose>
              <Icon28Close style={{ color: "var(--tgui--plain_foreground)" }} />
            </ModalClose>
          }
        >
          Select a token
        </ModalHeader>
      }
      trigger={
        <Button
          before={
            <Image
              src={selectedToken?.token.image || UNKNOWN_IMAGE_URL}
              alt="token"
              width={28}
              height={28}
              className="rounded-full"
            />
          }
          after={<Icon28ArrowDown />}
          onClick={displayTokenList}
        >
          {selectedToken?.token.symbol || "Select token"}
        </Button>
      }
    >
      <div className="slippage-setting__header">
        <Divider />
      </div>

      <List>
        <Section>
          <InputSearch />
        </Section>
        <Section className="max-h-[60vh]">
          {tokenList.map((option, index) => (
            <ModalClose>
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
                after={<Text>{option.balance}</Text>}
                key={index}
                Component="label"
              >
                {option.token.symbol}
              </Cell>
            </ModalClose>
          ))}
        </Section>
      </List>
    </Modal>
  );
};
