import { FC } from "react";

export interface InputProps {}

export const Input: FC<InputProps> = ({}) => (
  <input
    placeholder="123123123"
    className="text-right mt-[0.3rem] px-4 py-[1.3rem] border-0 border-solid outline-0 outline-transparent"
  ></input>
);
