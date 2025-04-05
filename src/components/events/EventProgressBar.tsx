import * as Progress from "@radix-ui/react-progress";

interface EventProgressBarProps {
    value: number;
    currentValue: number;
    totalValue: number;
}

export function EventProgressBar({ value, currentValue, totalValue }: EventProgressBarProps) {
    return (
        <div className="flex flex-col gap-3">
            <Progress.Root
                className="relative w-full h-3 overflow-hidden rounded-full bg-grey7"
                style={{
                    transform: "translateZ(0)",
                }}
                value={value}
            >
                <Progress.Indicator
                    className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] size-full rounded-full bg-gradient-to-r from-green1 via-green1 to-green2 transition-transform duration-[660ms]"
                    style={{ transform: `translateX(-${100 - value}%)` }}
                />
            </Progress.Root>

            <div className="grid grid-cols-2 gap-2">
                <p className="text-white2 text-sm">Your Progress</p>
                <p className="bg-gradient-to-b from-green1 via-green1 to-green2 bg-clip-text text-transparent text-end">{currentValue}/{totalValue}</p>
            </div>
        </div>
    );
} 