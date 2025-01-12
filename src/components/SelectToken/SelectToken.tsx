import { Icon28ArrowDown } from "@/icons/28/arrow-down";
import { Button } from "@telegram-apps/telegram-ui";
import Image from "next/image";
import { FC } from "react";
import "./styles.css";

export interface SelectTokenProps {}

export const SelectToken: FC<SelectTokenProps> = ({}) => (
  <Button
    className="select-token__root"
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
);
