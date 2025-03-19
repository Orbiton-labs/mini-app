import { IconLoading } from "@/icons/fixed/loading";
import { FC } from "react";
import { Button } from "../ui/button";

export interface SubmitButtonProps {
  onClick: () => Promise<void>;
  isLoading?: boolean;
  isDisabled?: boolean;
  error?: string;
  content?: string;
}

export const SubmitButton: FC<SubmitButtonProps> = ({
  onClick,
  isLoading = false,
  isDisabled = false,
  error,
  content = "Swap",
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={onClick}
        disabled={isLoading || isDisabled}
        className="w-full bg-gradient-to-b from-green1 to-green2 py-8 text-base text-black2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <div className="flex items-center justify-center gap-3 w-full">
            <IconLoading className="w-6 h-6" />
            <div className="flex flex-col items-start gap-1">
              <span>Processing</span>
              <div className="flex space-x-1">
                <div className="h-1.5 w-1.5 bg-black2 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="h-1.5 w-1.5 bg-black2 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="h-1.5 w-1.5 bg-black2 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        ) : error ? (
          <span className="text-white2">{error}</span>
        ) : (
          content
        )}
      </Button>
    </div>
  );
};

// background: linear-gradient(180deg, #30C558 0%, #D8EC14 100%),
// linear-gradient(180deg, #07C557 0%, #82FA73 100%);
