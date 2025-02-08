import { Icon32SwapVertical } from "@/icons/32/swap-vertical";
import { IconButton } from "@telegram-apps/telegram-ui";
import { FC } from "react";
import { SelectTokenWithInputAmount } from "../SelectTokenWithInputAmount/SelectTokenWithInputAmount";

export interface PairInputProps {
  canSwapOrder: boolean;
  hideBalance?: boolean
}

export const PairInput: FC<PairInputProps> = ({ canSwapOrder = true, hideBalance }) => (
  <div className="flex flex-col items-center gap-1 relative">
    <SelectTokenWithInputAmount hideBalance={hideBalance}/>
    {canSwapOrder && (
      <IconButton className="absolute z-[1] border bg-[white] border-solid border-[w]">
        <Icon32SwapVertical />
      </IconButton>
    )}
    <SelectTokenWithInputAmount hideBalance={hideBalance}/>
  </div>
);
