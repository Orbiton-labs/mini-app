import { Icon28Wallet } from "@/icons/28/wallet";
import { Button, Text } from "@telegram-apps/telegram-ui";
import { FC } from "react";

export interface ChoosePercentOfBalanceProps {
  balance: string;
}

export const ChoosePercentOfBalance: FC<ChoosePercentOfBalanceProps> = ({
  balance,
}) => (
  <Button
    before={<Icon28Wallet />}
    mode="plain"
    after={<Text weight="2">Max</Text>}
  >
    <Text weight="3">{balance}</Text>
  </Button>
);
