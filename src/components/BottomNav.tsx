import { ArrowDownUpIcon, DropletsIcon, GiftIcon, TelescopeIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { AnimatedLink } from "./ui/animated-link";

export const TABS = [
    {
        id: "swap",
        text: "Swap",
        Icon: ({ isActive }: { isActive: boolean }) => <ArrowDownUpIcon className={isActive ? "stroke-[url(#paint0_linear_257_2027)]" : "stroke-[#FBFCF4]"} />,
    },
    {
        id: "pools",
        text: "Pools",
        Icon: ({ isActive }: { isActive: boolean }) => <DropletsIcon className={isActive ? "stroke-[url(#paint0_linear_257_2027)]" : "stroke-[#FBFCF4]"} />,
    },
    {
        id: "explore",
        text: "Explore",
        Icon: ({ isActive }: { isActive: boolean }) => <TelescopeIcon className={isActive ? "stroke-[url(#paint0_linear_257_2027)]" : "stroke-[#FBFCF4]"} />,
    },
    {
        id: "events",
        text: "Events",
        Icon: ({ isActive }: { isActive: boolean }) => <GiftIcon className={isActive ? "stroke-[url(#paint0_linear_257_2027)]" : "stroke-[#FBFCF4]"} />,
    },
];

export function BottomNav() {
    const pathname = usePathname();
    const currentTab = pathname.split("/")[1] || "swap";

    return (
        <div className="fixed bottom-0 left-0 z-[100] w-full md:hidden">
            <div className="flex bg-purple4 items-center justify-evenly">
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