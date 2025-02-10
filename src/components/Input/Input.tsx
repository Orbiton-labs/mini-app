import { FC } from "react";

export interface InputProps {}

export const Input: FC<InputProps> = ({}) => (
  <input
    placeholder="123123123"
    style={{
      fontSize: '150%'
    }}
    className="w-[100%] text-right py-1  border-0 border-solid outline-0 outline-transparent"
    type="number"
  ></input>
);
