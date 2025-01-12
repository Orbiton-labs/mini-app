import { FC } from "react";
import { InputWithCurrencyValue } from "../InputWithCurrencyValue/InputWithCurrencyValue";
import { SelectTokenWithBalance } from "../SelectTokenWithBalance/SelectTokenWithBalance";
import "./styles.css";

export interface SelectTokenWithInputAmountProps {}

export const SelectTokenWithInputAmount: FC<
  SelectTokenWithInputAmountProps
> = ({}) => (
  <div className="select-token-with-input-amount__root">
    <SelectTokenWithBalance />
    <InputWithCurrencyValue />
  </div>
);
