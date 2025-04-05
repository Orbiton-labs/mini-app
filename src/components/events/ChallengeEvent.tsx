import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { StaticImageData } from "next/image";
import { EventProgressBar } from "./EventProgressBar";

interface ChallengeEventProps {
    backgroundColor: string;
    buttonText: string;
    title: string;
    description: string;
    image: StaticImageData;
    progress: number;
    currentValue: number;
    totalValue: number;
}

export function ChallengeEvent({
    backgroundColor,
    buttonText,
    title,
    description,
    image,
    progress,
    currentValue,
    totalValue
}: ChallengeEventProps) {
    return (
        <div className="flex flex-col w-full rounded-3xl gap-0">
            <div className={`flex gap-4 justify-between items-center ${backgroundColor} rounded-t-3xl py-4 px-4`}>
                <div className="flex flex-col gap-2 justify-between">
                    <button className="bg-gradient-to-r from-green1 via-green1 to-green2 text-white2 rounded-full px-4 py-2 text-sm">
                        {buttonText}
                    </button>
                    <p className="text-white2 text-xl">{title}</p>
                    <p className="text-white2 text-base">{description}</p>
                </div>

                <Avatar>
                    <AvatarImage className="object-cover" src={image.src} />
                </Avatar>
            </div>
            <div className="flex flex-col gap-3 bg-grey3 rounded-b-3xl py-5 px-5 border border-grey7 border-t-0">
                <EventProgressBar
                    value={progress}
                    currentValue={currentValue}
                    totalValue={totalValue}
                />
            </div>
        </div>
    );
} 