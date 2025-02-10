import { Icon32SwapVertical } from "@/icons/32/swap-vertical";
import { Token } from "@/types/Token";
import { IconButton } from "@telegram-apps/telegram-ui";
import { FC } from "react";
import { SelectTokenWithInputAmount } from "../SelectTokenWithInputAmount/SelectTokenWithInputAmount";

export interface PairInputProps {
  canSwapOrder: boolean;
  tokens: Token[];
  hideBalance?: boolean;
}

export const PairInput: FC<PairInputProps> = ({
  canSwapOrder = true,
  tokens,
  hideBalance,
}) => (
  <div className="flex flex-col items-center justify-center gap-8 relative">
    <SelectTokenWithInputAmount hideBalance={hideBalance} tokens={tokens}/>
    {canSwapOrder && (
      <IconButton className="absolute z-[1] border bg-[white] border-solid">
        <Icon32SwapVertical />
      </IconButton>
    )}
    <SelectTokenWithInputAmount hideBalance={hideBalance} tokens={tokens}/>
  </div>
);
