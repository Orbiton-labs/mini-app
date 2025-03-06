import * as Progress from "@radix-ui/react-progress";
import { FC } from "react";

export interface ProgressBarProps {
  value?: number;
}

export const ProgressBar: FC<ProgressBarProps> = ({ value = 20 }) => {
  return (
    <Progress.Root
      className="relative h-[3px] w-full overflow-hidden rounded-full bg-blackA6"
      style={{
        // Fix overflow clipping in Safari
        // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
        transform: "translateZ(0)",
      }}
      value={value}
    >
      <Progress.Indicator
        className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] size-full bg-gradient-to-b from-green1 to-green2 transition-transform duration-[660ms]"
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </Progress.Root>
  );
};
