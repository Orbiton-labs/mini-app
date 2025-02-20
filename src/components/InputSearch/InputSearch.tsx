import { Icon28Search } from "@/icons/28/search";
import { FC } from "react";

export interface InputSearchProps {}

export const InputSearch: FC<InputSearchProps> = ({}) => (
  <div>
    <Icon28Search />
    <input placeholder="Find a token by its name"></input>
  </div>
);
