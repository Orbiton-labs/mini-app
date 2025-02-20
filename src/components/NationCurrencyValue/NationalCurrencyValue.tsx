import { FC } from "react";

export interface NationalCurrencyValueProps {
  value: string;
  currency?: string;
}

export const NationalCurrencyValue: FC<NationalCurrencyValueProps> = ({
  value,
  currency = "$",
}) => (
  <span className="text-right text-sm">
    ≈ {currency}
    {value}
  </span>
);
