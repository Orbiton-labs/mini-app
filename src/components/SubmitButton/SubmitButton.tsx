import { Button, Title } from "@telegram-apps/telegram-ui";
import { FC } from "react";

export interface SubmitButtonProps {}

export const SubmitButton: FC<SubmitButtonProps> = ({}) => (
  <Button className="w-full px-0 py-10" size="l">
    <Title level="2" weight="2">
      Connect Wallet
    </Title>
  </Button>
);
