import { IconWallet } from "@/icons/fixed/wallet";
import { FC } from "react";

export interface ChoosePercentOfBalanceProps {
  balance: string;
}

export const ChoosePercentOfBalance: FC<ChoosePercentOfBalanceProps> = ({
  balance,
}) => (
  <div className="flex justify-start items-center gap-1">
    <IconWallet />
    <span className="text-sm text-white1">{balance}</span>
  </div>
);
