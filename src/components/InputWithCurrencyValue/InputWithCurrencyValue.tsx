import { FC } from "react";
import { Input } from "../Input/Input";
import { NationalCurrencyValue } from "../NationCurrencyValue/NationalCurrencyValue";
import "./styles.css";

export interface InputWithCurrencyValueProps {}

export const InputWithCurrencyValue: FC<InputWithCurrencyValueProps> = ({}) => (
  <div className="input-with-currency-value__root">
    <Input />
    <NationalCurrencyValue />
  </div>
);
