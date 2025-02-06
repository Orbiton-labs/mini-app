import { FC } from "react";

export interface NationalCurrencyValueProps {}

export const NationalCurrencyValue: FC<NationalCurrencyValueProps> = ({}) => (
  <p
    className="text-right px-[1.1rem] py-0"
  >
    ≈ $ 0.00
  </p>
);
