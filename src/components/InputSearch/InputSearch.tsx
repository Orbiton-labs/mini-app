import { IconFind } from "@/icons/fixed/find";
import { FC } from "react";

export interface InputSearchProps {}

export const InputSearch: FC<InputSearchProps> = ({}) => (
  <div className="bg-grey3 mx-4 gap-2 rounded-lg flex py-3 px-3 mb-2">
    <IconFind />
    <input
      className="text-white1 bg-transparent border-none focus:ring-transparent text-xs"
      placeholder="Find a token by its name"
    ></input>
  </div>
);
