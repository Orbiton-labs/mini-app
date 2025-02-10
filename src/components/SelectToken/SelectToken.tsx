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
  tokens: Token[];
}

export const SelectToken: FC<SelectTokenProps> = ({ tokens }) => (
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
            src="https://assets.dedust.io/images/ton.webp"
            alt="TON"
            width={28}
            height={28}
          />
        }
        after={<Icon28ArrowDown />}
      >
        TON
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
        {tokens.map((option, index) => (
          <Cell
            before={
              <Image
                src={option.image}
                alt="token icon"
                width={28}
                height={28}
              />
            }
            after={<Text>{option.balance}</Text>}
            key={index}
            Component="label"
          >
            {option.name}
          </Cell>
        ))}
      </Section>
    </List>
  </Modal>
);
