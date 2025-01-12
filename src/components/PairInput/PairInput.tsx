import { Icon32SwapVertical } from "@/icons/32/swap-vertical";
import { IconButton } from "@telegram-apps/telegram-ui";
import { FC } from "react";
import { SelectTokenWithInputAmount } from "../SelectTokenWithInputAmount/SelectTokenWithInputAmount";
import "./styles.css";

export interface PairInputProps {
  canSwapOrder: boolean;
}

export const PairInput: FC<PairInputProps> = ({ canSwapOrder = true }) => (
  <div className="pair-input__root">
    <SelectTokenWithInputAmount />
    {canSwapOrder && (
      <IconButton className="pair-input__swap-token-btn">
        <Icon32SwapVertical />
      </IconButton>
    )}
    <SelectTokenWithInputAmount />
  </div>
);
