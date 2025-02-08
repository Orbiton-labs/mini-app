import { FC } from "react";
import { InputWithCurrencyValue } from "../InputWithCurrencyValue/InputWithCurrencyValue";
import { SelectTokenWithBalance } from "../SelectTokenWithBalance/SelectTokenWithBalance";

export interface SelectTokenWithInputAmountProps {
  hideBalance?: boolean;
}

export const SelectTokenWithInputAmount: FC<
  SelectTokenWithInputAmountProps
> = ({ hideBalance }) => (
  <div className="flex justify-between border w-full rounded-lg border-solid">
    <SelectTokenWithBalance hideBalance={hideBalance}/>
    <InputWithCurrencyValue />
  </div>
);
