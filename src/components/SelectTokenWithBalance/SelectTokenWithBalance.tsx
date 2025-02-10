import { Token } from "@/types/Token";
import { FC } from "react";
import { ChoosePercentOfBalance } from "../ChoosePercentOfBalance/ChoosePercentOfBalance";
import { SelectToken } from "../SelectToken/SelectToken";

export interface SelectTokenWithBalanceProps {
  tokens: Token[];
  hideBalance?: boolean;
}

export const SelectTokenWithBalance: FC<SelectTokenWithBalanceProps> = ({
  tokens,
  hideBalance = false,
}) => (
  <div className="flex flex-col p-3 justify-between">
    <SelectToken tokens={tokens}/>
    {!hideBalance && <ChoosePercentOfBalance />}
  </div>
);
