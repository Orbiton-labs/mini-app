import { Token } from "@/types/Token";
import { FC } from "react";
import { InputWithCurrencyValue } from "../InputWithCurrencyValue/InputWithCurrencyValue";
import { SelectTokenWithBalance } from "../SelectTokenWithBalance/SelectTokenWithBalance";

export interface SelectTokenWithInputAmountProps {
  tokens: Token[];
  hideBalance?: boolean;
}

export const SelectTokenWithInputAmount: FC<
  SelectTokenWithInputAmountProps
> = ({ hideBalance, tokens }) => (
  <div className="flex justify-between border w-full rounded-lg border-solid">
    <SelectTokenWithBalance hideBalance={hideBalance} tokens={tokens}/>
    <InputWithCurrencyValue />
  </div>
);
