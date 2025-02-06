import { FC } from "react";
import { ChoosePercentOfBalance } from "../ChoosePercentOfBalance/ChoosePercentOfBalance";
import { SelectToken } from "../SelectToken/SelectToken";

export interface SelectTokenWithBalanceProps {}

export const SelectTokenWithBalance: FC<SelectTokenWithBalanceProps> = ({}) => (
  <div className="flex flex-col w-fit p-3">
    <SelectToken />
    <ChoosePercentOfBalance />
  </div>
);
