import { formatLargeNumber } from "@/helper/format";
import { FC } from "react";

export interface NationalCurrencyValueProps {
  value: string;
  currency?: string;
  decimals?: number;
}

export const NationalCurrencyValue: FC<NationalCurrencyValueProps> = ({
  value,
  currency = "$",
  decimals = 2,
}) => (
  <span className="text-right text-sm text-white1">
    ≈ {currency}
    {formatLargeNumber(value, decimals)}
  </span>
);
