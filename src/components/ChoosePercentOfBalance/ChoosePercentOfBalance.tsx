import { Icon28Wallet } from "@/icons/28/wallet";
import { Button } from "@telegram-apps/telegram-ui";
import { FC } from "react";

export interface ChoosePercentOfBalanceProps {
  balance: string;
}

export const ChoosePercentOfBalance: FC<ChoosePercentOfBalanceProps> = ({
  balance,
}) => (
  <Button before={<Icon28Wallet />} mode="plain" after={<h2>Max</h2>}>
    <h2>{balance}</h2>
  </Button>
);
