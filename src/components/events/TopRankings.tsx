import { truncateHash } from "@/helper/format";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { StaticImageData } from "next/image";

interface TopRankingProps {
    address: string;
    points: number;
    cupImage: StaticImageData;
    tierImage: StaticImageData;
    highlight?: boolean;
}

interface TopRankingsProps {
    firstPlace: TopRankingProps;
    secondPlace: TopRankingProps;
    thirdPlace: TopRankingProps;
}

export function TopRankings({ firstPlace, secondPlace, thirdPlace }: TopRankingsProps) {
    return (
        <div className="grid grid-cols-3 gap-0 w-full min-h-80">
            <div className="w-full flex flex-col items-center gap-5 justify-end">
                <Avatar>
                    <AvatarImage className="object-cover" src={secondPlace.cupImage.src} />
                </Avatar>
                <div className="flex flex-col gap-2 items-center justify-between">
                    <span className="text-sm">{truncateHash(secondPlace.address, 3, 3)}</span>
                    <div className="bg-white rounded-full px-3 py-2">
                        <span className="text-xs bg-gradient-to-b from-green1 via-green1 to-green2 bg-clip-text text-transparent">{secondPlace.points} XP</span>
                    </div>
                </div>
                <Avatar className="w-full">
                    <AvatarImage className="w-full h-full object-cover" src={secondPlace.tierImage.src} />
                </Avatar>
            </div>

            <div className="w-full flex flex-col items-center gap-5 justify-end">
                <div className={`${firstPlace.highlight ? "bg-transparent relative rounded-full before:blur-xl before:bg-purple5 before:absolute before:-inset-2 before:z-[-1]" : ""}`}>
                    <Avatar>
                        <AvatarImage className="object-cover" src={firstPlace.cupImage.src} />
                    </Avatar>
                </div>
                <div className="flex flex-col gap-2 items-center justify-between">
                    <span className="text-sm">{truncateHash(firstPlace.address, 3, 3)}</span>
                    <div className="bg-white rounded-full px-3 py-2">
                        <span className="text-xs bg-gradient-to-b from-green1 via-green1 to-green2 bg-clip-text text-transparent">{firstPlace.points} XP</span>
                    </div>
                </div>
                <Avatar className="w-full">
                    <AvatarImage className="w-full h-full object-cover z-1" src={firstPlace.tierImage.src} />
                </Avatar>
            </div>

            <div className="w-full flex flex-col items-center gap-5 justify-end">
                <Avatar>
                    <AvatarImage className="object-cover" src={thirdPlace.cupImage.src} />
                </Avatar>
                <div className="flex flex-col gap-2 items-center justify-between">
                    <span className="text-sm">{truncateHash(thirdPlace.address, 3, 3)}</span>
                    <div className="bg-white rounded-full px-3 py-2">
                        <span className="text-xs bg-gradient-to-b from-green1 via-green1 to-green2 bg-clip-text text-transparent">{thirdPlace.points} XP</span>
                    </div>
                </div>
                <Avatar className="w-full">
                    <AvatarImage className="w-full h-full object-cover -translate-x-[2.5px]" src={thirdPlace.tierImage.src} />
                </Avatar>
            </div>
        </div>
    );
} 