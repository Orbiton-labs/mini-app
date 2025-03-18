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
        className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Processing...</span>
          </div>
        ) : error ? (
          <span className="text-red-500">{error}</span>
        ) : (
          content
        )}
      </Button>
      {error && <p className="text-sm text-red-500 text-center">{error}</p>}
    </div>
  );
};

// background: linear-gradient(180deg, #30C558 0%, #D8EC14 100%),
// linear-gradient(180deg, #07C557 0%, #82FA73 100%);
