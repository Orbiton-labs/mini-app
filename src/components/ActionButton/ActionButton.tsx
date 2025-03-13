import { FC } from "react";

export interface ActionButtonProps {
  content: string;
  onClick?: () => void;
}

export const ActionButton: FC<ActionButtonProps> = ({ content, onClick }) => (
  <button
    onClick={onClick}
    className="bg-green3 py-3 text-white2 text-sm rounded-lg w-full"
  >
    {content}
  </button>
);

// background: linear-gradient(180deg, #30C558 0%, #D8EC14 100%),
// linear-gradient(180deg, #07C557 0%, #82FA73 100%);
