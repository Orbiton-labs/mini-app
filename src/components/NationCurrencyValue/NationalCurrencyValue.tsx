import { FC } from "react";
import "./styles.css";

export interface NationalCurrencyValueProps {}

export const NationalCurrencyValue: FC<NationalCurrencyValueProps> = ({}) => (
  <p
    className="national-currency-value__root"
  >
    ≈ $ 0.00
  </p>
);
