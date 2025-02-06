import { Icon28Wallet } from "@/icons/28/wallet";
import { Button, Text } from "@telegram-apps/telegram-ui";
import { FC } from "react";

export interface ChoosePercentOfBalanceProps {}

export const ChoosePercentOfBalance: FC<ChoosePercentOfBalanceProps> = ({}) => (
  <Button
    before={<Icon28Wallet />}
    mode="plain"
    after={<Text weight="2">Max</Text>}
  >
    <Text weight="3">21.07</Text>
  </Button>
);
