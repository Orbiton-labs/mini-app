import { FC } from "react";

export interface SubmitButtonProps {}

export const SubmitButton: FC<SubmitButtonProps> = ({}) => (
  <button className="bg-gradient-to-b from-green1 to-green2 text-base text-black2 py-4 rounded-lg">
    Enter an amount
  </button>
);

// background: linear-gradient(180deg, #30C558 0%, #D8EC14 100%),
// linear-gradient(180deg, #07C557 0%, #82FA73 100%);
