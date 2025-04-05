"use client";

import { Page } from "@/components/Page";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { truncateHash } from "@/helper/format";
import { IconLightning } from "@/icons/fixed/lightning";
import { IconPolygon } from "@/icons/fixed/polygon";
import { IconTarget } from "@/icons/fixed/target";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useRef } from "react";
import bronzeCup from "../../app/_assets/bronze-cup.png";
import goldenCup from "../../app/_assets/golden-cup.png";
import silverCup from "../../app/_assets/silver-cup.png";
import tierOne from "../../app/_assets/tier-one.png";
import tierThree from "../../app/_assets/tier-three.png";
import tierTwo from "../../app/_assets/tier-two.png";
import { columns as newColumns } from "./columns";
import { DataTable } from "./data-table";

const data = [
    {
        index: 1,
        address: "0x1234567890123456789012345678901234567890",
        points: 1000,
    },
    {
        index: 2,
        address: "0x1234567890123456789012345678901234567890",
        points: 1000,
    },
    {
        index: 3,
        address: "0x1234567890123456789012345678901234567890",
        points: 1000,
    },
    {
        index: 4,
        address: "0x1234567890123456789012345678901234567890",
        points: 1000,
    },
];

export default function EventsPage() {
    const tabList = useRef<HTMLDivElement>(null);

    return (
        <Page>
            <div className="flex flex-col pl-4 pr-4">
                <Tabs defaultValue="task" className="w-full">
                    <TabsList ref={tabList} className="w-full flex justify-between items-center gap-2 my-2">
                        <TabsTrigger
                            className="task-trigger w-full py-2 border-2 rounded-full transition-colors
                                    data-[state=active]:bg-white
                                    data-[state=inactive]:border-white data-[state=inactive]:text-white
                                    [&[data-state=active]_span]:bg-gradient-to-b [&[data-state=active]_span]:from-green1 [&[data-state=active]_span]:via-green1 [&[data-state=active]_span]:to-green2 [&[data-state=active]_span]:bg-clip-text [&[data-state=active]_span]:text-transparent
                                    [&[data-state=inactive]_span]:text-white"
                            value="task"
                        >
                            <span>Task</span>
                        </TabsTrigger>
                        <TabsTrigger
                            className="ranking-trigger w-full py-2 border-2 rounded-full transition-colors
                                    data-[state=active]:bg-white
                                    data-[state=inactive]:border-white data-[state=inactive]:text-white
                                    [&[data-state=active]_span]:bg-gradient-to-b [&[data-state=active]_span]:from-green1 [&[data-state=active]_span]:via-green1 [&[data-state=active]_span]:to-green2 [&[data-state=active]_span]:bg-clip-text [&[data-state=active]_span]:text-transparent
                                    [&[data-state=inactive]_span]:text-white"
                            value="ranking"
                        >
                            <span>Ranking</span>
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="ranking">
                        <div className="grid grid-cols-3 gap-0 w-full min-h-80">
                            <div className="w-full flex flex-col items-center gap-5 justify-end">
                                <Avatar>
                                    <AvatarImage className="object-cover" src={silverCup.src} />
                                </Avatar>
                                <div className="flex flex-col gap-2 items-center justify-between">
                                    <span className="text-sm">{truncateHash("0x1234567890123456789012345678901234567890", 3, 3)}</span>
                                    <div className="bg-white rounded-full px-3 py-2">
                                        <span className="text-xs bg-gradient-to-b from-green1 via-green1 to-green2 bg-clip-text text-transparent">654 XP</span>
                                    </div>
                                </div>
                                <Avatar className="w-full">
                                    <AvatarImage className="w-full h-full object-cover" src={tierTwo.src} />
                                </Avatar>
                            </div>
                            <div className="w-full flex flex-col items-center gap-5 justify-end">
                                <div className="bg-transparent relative rounded-full before:blur-xl before:bg-purple5 before:absolute before:-inset-2 before:z-[-1]">
                                    <Avatar>
                                        <AvatarImage className="object-cover" src={goldenCup.src} />
                                    </Avatar>
                                </div>
                                <div className="flex flex-col gap-2 items-center justify-between">
                                    <span className="text-sm">{truncateHash("0x1234567890123456789012345678901234567890", 3, 3)}</span>
                                    <div className="bg-white rounded-full px-3 py-2">
                                        <span className="text-xs bg-gradient-to-b from-green1 via-green1 to-green2 bg-clip-text text-transparent">987 XP</span>
                                    </div>
                                </div>
                                <Avatar className="w-full">
                                    <AvatarImage className="w-full h-full object-cover z-1" src={tierOne.src} />
                                </Avatar>
                            </div>
                            <div className="w-full flex flex-col items-center gap-5 justify-end">
                                <Avatar>
                                    <AvatarImage className="object-cover" src={bronzeCup.src} />
                                </Avatar>
                                <div className="flex flex-col gap-2 items-center justify-between">
                                    <span className="text-sm">{truncateHash("0x1234567890123456789012345678901234567890", 3, 3)}</span>
                                    <div className="bg-white rounded-full px-3 py-2">
                                        <span className="text-xs bg-gradient-to-b from-green1 via-green1 to-green2 bg-clip-text text-transparent">321 XP</span>
                                    </div>
                                </div>
                                <Avatar className="w-full">
                                    <AvatarImage className="w-full h-full object-cover -translate-x-[2.5px]" src={tierThree.src} />
                                </Avatar>
                            </div>
                        </div>

                        <div className="w-full">
                            <DataTable columns={newColumns} data={data} />
                        </div>
                    </TabsContent>
                    <TabsContent value="task">
                        <div className="w-full">
                            <h1 className="text-xl font-bold text-center">Your Point: 241 XP</h1>
                            <div className="w-full flex flex-col gap-2">
                                <h2 className="text-lg font-bold">Begin Missions 🎯</h2>
                                <div className="w-full flex flex-col gap-2">
                                    <div className="flex justify-start items-center gap-2 p-4 border border-grey7 rounded-3xl text-white2 bg-grey3">
                                        <IconPolygon />
                                        <span>
                                            Join Telegram Chat
                                        </span>
                                    </div>

                                    <div className="flex justify-start items-center gap-2 p-4 border border-grey7 rounded-3xl text-white2 bg-grey3">
                                        <IconLightning />
                                        <span>
                                            Follow Twitter
                                        </span>
                                    </div>

                                    <div className="flex justify-start items-center gap-2 p-4 border border-grey7 rounded-3xl text-white2 bg-grey3">
                                        <IconTarget />
                                        <span>
                                            Repost Campaign Post
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex flex-col gap-2">
                                <h2 className="text-lg font-bold">Challenge Events 🗓</h2>
                                <div className="w-full flex flex-col gap-2">
                                    <div className="flex justify-start items-center gap-2 p-4 border border-grey7 rounded-3xl text-white2 bg-grey3">
                                        <IconPolygon />
                                        <span>
                                            Join Telegram Chat
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </Page>
    );
}
