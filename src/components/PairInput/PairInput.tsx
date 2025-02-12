import { Icon32SwapVertical } from "@/icons/32/swap-vertical";
import { Token } from "@/types/Token";
import { IconButton } from "@telegram-apps/telegram-ui";
import { FC } from "react";
import { SelectTokenWithInputAmount } from "../SelectTokenWithInputAmount/SelectTokenWithInputAmount";

export interface PairInputProps {
  token1: Token | null;
  token2: Token | null;
  setToken1: (token: Token) => void;
  setToken2: (token: Token) => void;
  tokenList: Token[];
  reverseOrder: () => void;
  canSwapOrder: boolean;
  hideBalance: boolean;
}

export const PairInput: FC<PairInputProps> = ({
  token1,
  token2,
  setToken1,
  setToken2,
  reverseOrder,
  tokenList,
  hideBalance = false,
  canSwapOrder = true,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 relative">
      <SelectTokenWithInputAmount
        hideBalance={hideBalance}
        selectedToken={token1}
        tokenList={tokenList}
        setToken={setToken1}
      />
      {canSwapOrder && (
        <IconButton
          className="absolute z-[1] border bg-[white] border-solid"
          onClick={() => {
            reverseOrder();
          }}
        >
          <Icon32SwapVertical />
        </IconButton>
      )}
      <SelectTokenWithInputAmount
        tokenList={tokenList}
        hideBalance={hideBalance}
        selectedToken={token2}
        setToken={setToken2}
      />
    </div>
  );
};
