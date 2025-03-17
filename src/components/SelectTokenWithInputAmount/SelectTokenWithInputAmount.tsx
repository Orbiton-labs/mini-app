import { Token } from "@/types/Token";
import { FC, FocusEventHandler } from "react";
import { InputWithCurrencyValue } from "../InputWithCurrencyValue/InputWithCurrencyValue";
import { SelectTokenWithBalance } from "../SelectTokenWithBalance/SelectTokenWithBalance";

export interface SelectTokenWithInputAmountProps {
  selectedToken: Token | null;
  tokenList: Token[];
  setToken: (token: Token) => void;
  setAmount: (amount: string | undefined) => void;
  displayTokenList: () => void;
  hideBalance?: boolean;
  canChangeToken?: boolean;
  disabledInput?: boolean;
  onFocus?: FocusEventHandler<HTMLInputElement>;
}

export const SelectTokenWithInputAmount: FC<
  SelectTokenWithInputAmountProps
> = ({
  selectedToken,
  setToken,
  setAmount,
  displayTokenList,
  tokenList,
  hideBalance,
  canChangeToken,
  disabledInput,
  onFocus,
}) => (
  <div className="flex gap-2 justify-between bg-grey3 pt-4 pb-4 pl-3 pr-3 w-full rounded-lg border border-grey7">
    <SelectTokenWithBalance
      hideBalance={hideBalance}
      tokenList={tokenList}
      displayTokenList={displayTokenList}
      selectedToken={selectedToken}
      setToken={setToken}
      canChangeToken={canChangeToken}
    />
    <InputWithCurrencyValue
      disabled={disabledInput}
      setAmount={setAmount}
      selectedToken={selectedToken}
      onFocus={onFocus}
    />
  </div>
);
