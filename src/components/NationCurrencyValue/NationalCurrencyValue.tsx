import { FC } from "react";

export interface NationalCurrencyValueProps {
  value: string;
  currency?: string;
}

export const NationalCurrencyValue: FC<NationalCurrencyValueProps> = ({
  value,
  currency = "$",
}) => (
  <span className="text-right text-sm text-white3">
    ≈ {currency}
    {value}
  </span>
);
