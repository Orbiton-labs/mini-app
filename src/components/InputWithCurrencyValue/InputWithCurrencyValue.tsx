import { bigIntToUsd } from "@/helper/format";
import { Token } from "@/types/Token";
import { FC, FocusEventHandler } from "react";
import { Input } from "../Input/Input";
import { NationalCurrencyValue } from "../NationCurrencyValue/NationalCurrencyValue";

export interface InputWithCurrencyValueProps {
  selectedToken: Token | null;
  setAmount: (amount: string | undefined) => void;
  onFocus?: FocusEventHandler<HTMLInputElement>;
}

export const InputWithCurrencyValue: FC<InputWithCurrencyValueProps> = ({
  selectedToken,
  setAmount,
  onFocus,
}) => (
  <div className="w-full flex flex-col flex-1 gap-2 justify-between">
    <Input
      onFocus={onFocus}
      setValue={setAmount}
      decimals={
        selectedToken?.token.decimals ? selectedToken.token.decimals : 9
      }
      value={selectedToken?.amount}
    />
    <NationalCurrencyValue
      value={
        selectedToken?.amount
          ? bigIntToUsd(
              selectedToken.amount,
              selectedToken.token.decimals,
              selectedToken.token.price
            )
          : "0.00"
      }
    />
  </div>
);
