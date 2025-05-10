import { StaticImageData } from "next/image";
import { ChallengeEvent } from "./ChallengeEvent";

interface ChallengeInfo {
    backgroundColor: string;
    buttonText: string;
    title: string;
    description: string;
    image: StaticImageData;
    progress: number;
    currentValue: number;
    totalValue: number;
}

interface ChallengesListProps {
    challenges: ChallengeInfo[];
}

export function ChallengesList({ challenges }: ChallengesListProps) {
    return (
        <div className="w-full flex flex-col gap-2">
            <h2 className="text-lg font-bold mt-4 mb-2">Challenge Events 🗓</h2>
            <div className="w-full flex flex-col gap-5">
                {challenges.map((challenge, index) => (
                    <ChallengeEvent
                        key={index}
                        backgroundColor={challenge.backgroundColor}
                        buttonText={challenge.buttonText}
                        title={challenge.title}
                        description={challenge.description}
                        image={challenge.image}
                        progress={challenge.progress}
                        currentValue={challenge.currentValue}
                        totalValue={challenge.totalValue}
                    />
                ))}
            </div>
        </div>
    );
} 