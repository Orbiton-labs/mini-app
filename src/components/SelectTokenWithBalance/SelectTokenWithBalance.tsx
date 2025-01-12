import { FC } from "react";
import { ChoosePercentOfBalance } from "../ChoosePercentOfBalance/ChoosePercentOfBalance";
import { SelectToken } from "../SelectToken/SelectToken";
import "./styles.css";

export interface SelectTokenWithBalanceProps {}

export const SelectTokenWithBalance: FC<SelectTokenWithBalanceProps> = ({}) => (
  <div className="select-token-with-balance__root">
    <SelectToken />
    <ChoosePercentOfBalance />
  </div>
);
