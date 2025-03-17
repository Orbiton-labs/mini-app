import { Icon20AnglesUpDown } from "@/icons/20/angles-up-down";
import { Token } from "@/types/Token";
import { FC, FocusEventHandler } from "react";
import { SelectTokenWithInputAmount } from "../SelectTokenWithInputAmount/SelectTokenWithInputAmount";

export interface PairInputProps {
  token1: Token | null;
  token2: Token | null;
  setToken1: (token: Token) => void;
  setToken2: (token: Token) => void;
  setAmount1: (amount: string | undefined) => void;
  setAmount2: (amount: string | undefined) => void;
  displayTokenList: () => void;
  tokenList: Token[];
  reverseOrder: () => void;
  canSwapOrder: boolean;
  hideBalance: boolean;
  canChangeToken0?: boolean;
  canChangeToken1?: boolean;
  disable0?: boolean;
  disable1?: boolean;
  onFocus1?: FocusEventHandler<HTMLInputElement>;
  onFocus2?: FocusEventHandler<HTMLInputElement>;
}

export const PairInput: FC<PairInputProps> = ({
  token1,
  token2,
  setToken1,
  setToken2,
  setAmount1,
  setAmount2,
  reverseOrder,
  displayTokenList,
  tokenList,
  hideBalance = false,
  canSwapOrder = true,
  canChangeToken0 = true,
  canChangeToken1 = true,
  disable0 = false,
  disable1 = false,
  onFocus1,
  onFocus2,
}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center relative gap-2">
        <SelectTokenWithInputAmount
          hideBalance={hideBalance}
          selectedToken={token1}
          tokenList={tokenList}
          displayTokenList={displayTokenList}
          setToken={setToken1}
          setAmount={setAmount1}
          canChangeToken={canChangeToken0}
          onFocus={onFocus1}
          disabledInput={disable0}
        />
        {canSwapOrder && (
          <div
            className="absolute z-[1] bg-black1 p-3 rounded-full border border-grey7"
            onClick={() => {
              reverseOrder();
            }}
          >
            <Icon20AnglesUpDown />
          </div>
        )}
        <SelectTokenWithInputAmount
          tokenList={tokenList}
          hideBalance={hideBalance}
          selectedToken={token2}
          displayTokenList={displayTokenList}
          setToken={setToken2}
          setAmount={setAmount2}
          canChangeToken={canChangeToken1}
          onFocus={onFocus2}
          disabledInput={disable1}
        />
      </div>
    </>
  );
};
