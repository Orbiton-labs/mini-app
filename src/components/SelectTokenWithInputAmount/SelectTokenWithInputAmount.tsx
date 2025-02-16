import { Token } from "@/types/Token";
import { FC } from "react";
import { InputWithCurrencyValue } from "../InputWithCurrencyValue/InputWithCurrencyValue";
import { SelectTokenWithBalance } from "../SelectTokenWithBalance/SelectTokenWithBalance";

export interface SelectTokenWithInputAmountProps {
  selectedToken: Token | null;
  tokenList: Token[];
  setToken: (token: Token) => void;
  setAmount: (amount: string | undefined) => void;
  displayTokenList: () => void;
  hideBalance?: boolean;
}

export const SelectTokenWithInputAmount: FC<
  SelectTokenWithInputAmountProps
> = ({ selectedToken, setToken, setAmount, displayTokenList, tokenList, hideBalance }) => (
  <div className="flex justify-between border w-full rounded-lg border-solid">
    <SelectTokenWithBalance
      hideBalance={hideBalance}
      tokenList={tokenList}
      displayTokenList={displayTokenList}
      selectedToken={selectedToken}
      setToken={setToken}
    />
    <InputWithCurrencyValue setAmount={setAmount} selectedToken={selectedToken}/>
  </div>
);
