import { Token } from "@/types/Token";
import { FC } from "react";
import { ChoosePercentOfBalance } from "../ChoosePercentOfBalance/ChoosePercentOfBalance";
import { SelectToken } from "../SelectToken/SelectToken";

export interface SelectTokenWithBalanceProps {
  selectedToken: Token | null;
  tokenList: Token[];
  setToken: (token: Token) => void;
  hideBalance?: boolean;
}

export const SelectTokenWithBalance: FC<SelectTokenWithBalanceProps> = ({
  selectedToken,
  tokenList,
  setToken,
  hideBalance = false,
}) => (
  <div className="flex flex-col p-3 justify-between">
    <SelectToken
      selectedToken={selectedToken}
      tokenList={tokenList}
      setToken={setToken}
    />
    {!hideBalance && (
      <ChoosePercentOfBalance
        balance={selectedToken?.balance ? selectedToken.balance : "0.00"}
      />
    )}
  </div>
);
