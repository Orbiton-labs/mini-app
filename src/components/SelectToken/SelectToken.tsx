import { Icon28ArrowDown } from "@/icons/28/arrow-down";
import { Icon28Close } from "@/icons/28/close";
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

const listTokens = [
  {
    name: "TON",
    image: "https://assets.dedust.io/images/ton.webp",
    balance: "10.00",
  },
  {
    name: "DUST",
    image: "https://assets.dedust.io/images/dust.gif",
    balance: "1230.75",
  },
  {
    name: "USDT",
    image: "https://assets.dedust.io/images/usdt.webp",
    balance: "65.99",
  },
  {
    name: "TON",
    image: "https://assets.dedust.io/images/ton.webp",
    balance: "10.00",
  },
  {
    name: "DUST",
    image: "https://assets.dedust.io/images/dust.gif",
    balance: "1230.75",
  },
  {
    name: "USDT",
    image: "https://assets.dedust.io/images/usdt.webp",
    balance: "65.99",
  },
  {
    name: "TON",
    image: "https://assets.dedust.io/images/ton.webp",
    balance: "10.00",
  },
  {
    name: "DUST",
    image: "https://assets.dedust.io/images/dust.gif",
    balance: "1230.75",
  },
  {
    name: "USDT",
    image: "https://assets.dedust.io/images/usdt.webp",
    balance: "65.99",
  },
  {
    name: "TON",
    image: "https://assets.dedust.io/images/ton.webp",
    balance: "0",
  },
  {
    name: "DUST",
    image: "https://assets.dedust.io/images/dust.gif",
    balance: "0",
  },
  {
    name: "USDT",
    image: "https://assets.dedust.io/images/usdt.webp",
    balance: "0",
  },
];

export interface SelectTokenProps {}

export const SelectToken: FC<SelectTokenProps> = ({}) => (
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
        className="px-0 py-8"
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
        TONS
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
        {listTokens.map((option, index) => (
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
