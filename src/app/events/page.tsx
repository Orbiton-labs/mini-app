"use client";

import { ChallengesList } from "@/components/events/ChallengesList";
import { MissionsList } from "@/components/events/MissionsList";
import { TopRankings } from "@/components/events/TopRankings";
import { Page } from "@/components/Page";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IconLightning } from "@/icons/fixed/lightning";
import { IconPolygon } from "@/icons/fixed/polygon";
import { IconTarget } from "@/icons/fixed/target";
import { useRef } from "react";
import bronzeCup from "../../app/_assets/bronze-cup.png";
import goldenCup from "../../app/_assets/golden-cup.png";
import silverCup from "../../app/_assets/silver-cup.png";
import tierOne from "../../app/_assets/tier-one.png";
import tierThree from "../../app/_assets/tier-three.png";
import tierTwo from "../../app/_assets/tier-two.png";
import waterCool from "../../app/_assets/water-cool.png";
import waterDance from "../../app/_assets/water-dance.png";
import waterPatient from "../../app/_assets/water-patient.png";
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

    const missions = [
        {
            icon: <IconPolygon />,
            text: "Join Telegram Chat"
        },
        {
            icon: <IconLightning />,
            text: "Follow Twitter"
        },
        {
            icon: <IconTarget />,
            text: "Repost Campaign Post"
        }
    ];

    const challenges = [
        {
            backgroundColor: "bg-gradient-to-r from-yellow2 via-yellow2 to-yellow3",
            buttonText: "Swap",
            title: "Let's become a trader!",
            description: "Each swap will gain 1 points.",
            image: waterDance,
            progress: 50,
            currentValue: 100,
            totalValue: 200
        },
        {
            backgroundColor: "bg-gradient-to-r from-pink1 via-pink1 to-pink2",
            buttonText: "Add Liquidity",
            title: "Be a liquidity provider!",
            description: "Each add lp will gain 2 point.",
            image: waterCool,
            progress: 50,
            currentValue: 100,
            totalValue: 200
        },
        {
            backgroundColor: "bg-gradient-to-r from-green6 via-green6 to-green7",
            buttonText: "Remove Liquidity",
            title: "Be a clear-minded guy!",
            description: "Each remove lp will gain 3 point.",
            image: waterPatient,
            progress: 50,
            currentValue: 100,
            totalValue: 200
        }
    ];

    return (
        <Page>
            <div className="flex flex-col pl-4 pr-4 h-full pb-60">
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
                        <TopRankings
                            firstPlace={{
                                address: "0x1234567890123456789012345678901234567890",
                                points: 987,
                                cupImage: goldenCup,
                                tierImage: tierOne,
                                highlight: true
                            }}
                            secondPlace={{
                                address: "0x1234567890123456789012345678901234567890",
                                points: 654,
                                cupImage: silverCup,
                                tierImage: tierTwo
                            }}
                            thirdPlace={{
                                address: "0x1234567890123456789012345678901234567890",
                                points: 321,
                                cupImage: bronzeCup,
                                tierImage: tierThree
                            }}
                        />
                        <div className="w-full">
                            <DataTable columns={newColumns} data={data} />
                        </div>
                    </TabsContent>
                    <TabsContent value="task">
                        <div className="w-full">
                            <h1 className="text-xl font-bold text-center">Your Point: 241 XP</h1>
                            <MissionsList missions={missions} />
                            <ChallengesList challenges={challenges} />
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </Page>
    );
}
