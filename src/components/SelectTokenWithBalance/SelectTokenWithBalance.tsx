import { printBigInt } from "@/helper/format";
import { Token } from "@/types/Token";
import { FC } from "react";
import { ChoosePercentOfBalance } from "../ChoosePercentOfBalance/ChoosePercentOfBalance";
import { SelectToken } from "../SelectToken/SelectToken";

export interface SelectTokenWithBalanceProps {
  selectedToken: Token | null;
  tokenList: Token[];
  setToken: (token: Token) => void;
  displayTokenList: () => void;
  hideBalance?: boolean;
}

export const SelectTokenWithBalance: FC<SelectTokenWithBalanceProps> = ({
  selectedToken,
  tokenList,
  setToken,
  displayTokenList,
  hideBalance = false,
}) => (
  <div className="flex flex-col p-3 justify-between">
    <SelectToken
      selectedToken={selectedToken}
      tokenList={tokenList}
      displayTokenList={displayTokenList}
      setToken={setToken}
    />
    {!hideBalance && (
      <ChoosePercentOfBalance
        balance={
          selectedToken?.balance
            ? printBigInt(selectedToken.balance, selectedToken.token.decimals)
            : "0.00"
        }
      />
    )}
  </div>
);
