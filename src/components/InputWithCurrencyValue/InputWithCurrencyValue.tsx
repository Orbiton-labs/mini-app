import { FC } from "react";
import { Input } from "../Input/Input";
import { NationalCurrencyValue } from "../NationCurrencyValue/NationalCurrencyValue";

export interface InputWithCurrencyValueProps {}

export const InputWithCurrencyValue: FC<InputWithCurrencyValueProps> = ({}) => (
  <div className="flex flex-col p-3 justify-between ">
    <Input />
    <NationalCurrencyValue />
  </div>
);
