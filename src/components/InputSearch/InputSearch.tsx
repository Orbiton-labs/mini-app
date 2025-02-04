import { Icon28Search } from "@/icons/28/search";
import { Input } from "@telegram-apps/telegram-ui";
import { FC } from "react";
import "./styles.css";

export interface InputSearchProps {}

export const InputSearch: FC<InputSearchProps> = ({}) => (
  <Input placeholder="Find a token by its name" before={<Icon28Search />} />
);
