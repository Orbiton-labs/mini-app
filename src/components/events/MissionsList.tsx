import { ReactNode } from "react";
import { MissionItem } from "./MissionItem";

interface MissionsListProps {
    missions: Array<{
        icon: ReactNode;
        text: string;
    }>;
}

export function MissionsList({ missions }: MissionsListProps) {
    return (
        <div className="w-full flex flex-col gap-2">
            <h2 className="text-lg font-bold">Begin Missions 🎯</h2>
            <div className="w-full flex flex-col gap-2">
                {missions.map((mission, index) => (
                    <MissionItem
                        key={index}
                        icon={mission.icon}
                        text={mission.text}
                    />
                ))}
            </div>
        </div>
    );
} 