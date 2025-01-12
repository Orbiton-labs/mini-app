import { Button, Title } from "@telegram-apps/telegram-ui";
import { FC } from "react";
import "./styles.css";

export interface SubmitButtonProps {}

export const SubmitButton: FC<SubmitButtonProps> = ({}) => (
  <Button className="submit-button__root" size="l">
    <Title level="2" weight="2">
      Connect Wallet
    </Title>
  </Button>
);
