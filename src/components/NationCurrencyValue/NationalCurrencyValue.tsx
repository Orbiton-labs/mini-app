import { FC } from "react";

export interface NationalCurrencyValueProps {}

export const NationalCurrencyValue: FC<NationalCurrencyValueProps> = ({}) => (
  <p
    className="text-right pb-2 text-xl"
  >
    ≈ $ 0.00
  </p>
);
