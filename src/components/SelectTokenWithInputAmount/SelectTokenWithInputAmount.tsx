import { FC } from "react";
import { InputWithCurrencyValue } from "../InputWithCurrencyValue/InputWithCurrencyValue";
import { SelectTokenWithBalance } from "../SelectTokenWithBalance/SelectTokenWithBalance";

export interface SelectTokenWithInputAmountProps {}

export const SelectTokenWithInputAmount: FC<
  SelectTokenWithInputAmountProps
> = ({}) => (
  <div className="flex justify-between items-center border w-full rounded-lg border-solid">
    <SelectTokenWithBalance />
    <InputWithCurrencyValue />
  </div>
);
