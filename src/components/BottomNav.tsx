import { IconExplore } from "@/icons/fixed/explore";
import { IconPool } from "@/icons/fixed/pool";
import { IconPortfolio } from "@/icons/fixed/portfolio";
import { IconSwap } from "@/icons/fixed/swap";
import { usePathname } from "next/navigation";
import { AnimatedLink } from "./ui/animated-link";

export const TABS = [
    {
        id: "swap",
        text: "Swap",
        Icon: IconSwap,
    },
    {
        id: "pools",
        text: "Pools",
        Icon: IconPool,
    },
    {
        id: "explore",
        text: "Explore",
        Icon: IconExplore,
    },
    {
        id: "portfolio",
        text: "Portfolio",
        Icon: IconPortfolio,
    },
];

export function BottomNav() {
    const pathname = usePathname();
    const currentTab = pathname.split("/")[1] || "swap";

    return (
        <div className="fixed bottom-0 left-0 z-[100] w-full md:hidden">
            <div className="flex bg-grey3 items-center justify-evenly">
                {TABS.map(({ id, text, Icon }) => {
                    const selected = id === currentTab;
                    return (
                        <AnimatedLink
                            key={id}
                            href={`/${id}`}
                            isActive={selected}
                            className={`${selected
                                ? "bg-gradient-to-b from-green-1 to-green-2 text-transparent bg-clip-text"
                                : "text-white-2"
                                } mb-6 flex flex-col gap-2 justify-between items-center pt-3 pb-4 pl-2 pr-2`}
                        >
                            <Icon isActive={id === currentTab} />
                            <span
                                className={`${selected
                                    ? "bg-gradient-to-b from-green1 via-green1 to-green2 bg-clip-text text-transparent"
                                    : ""
                                    } text-sm`}
                            >
                                {text}
                            </span>
                        </AnimatedLink>
                    );
                })}
            </div>
        </div>
    );
} 