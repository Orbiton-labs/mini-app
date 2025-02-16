import { Button } from "@telegram-apps/telegram-ui";
import { FC } from "react";

export interface SubmitButtonProps {}

export const SubmitButton: FC<SubmitButtonProps> = ({}) => (
  <button className="bg-gradient-to-b from-green1 to-green2">
    <h1>Connect Wallet</h1>
  </button>
);

// background: linear-gradient(180deg, #30C558 0%, #D8EC14 100%),
// linear-gradient(180deg, #07C557 0%, #82FA73 100%);
