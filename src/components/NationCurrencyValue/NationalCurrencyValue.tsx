import { FC } from "react";

export interface NationalCurrencyValueProps {
  value: string;
  currency?: string;
}

export const NationalCurrencyValue: FC<NationalCurrencyValueProps> = ({
  value,
  currency = "$",
}) => (
  <p className="text-right pb-2 text-xl">
    ≈ {currency}
    {value}
  </p>
);
