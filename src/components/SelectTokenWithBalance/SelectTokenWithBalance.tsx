import { FC } from "react";
import { ChoosePercentOfBalance } from "../ChoosePercentOfBalance/ChoosePercentOfBalance";
import { SelectToken } from "../SelectToken/SelectToken";

export interface SelectTokenWithBalanceProps {
  hideBalance?: boolean;
}

export const SelectTokenWithBalance: FC<SelectTokenWithBalanceProps> = ({
  hideBalance = false,
}) => (
  <div className="flex flex-col p-3">
    <SelectToken />
    {!hideBalance && <ChoosePercentOfBalance />}
  </div>
);
