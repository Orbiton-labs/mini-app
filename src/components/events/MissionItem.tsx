import { ReactNode } from "react";

interface MissionItemProps {
    icon: ReactNode;
    text: string;
}

export function MissionItem({ icon, text }: MissionItemProps) {
    return (
        <div className="flex justify-start items-center gap-2 p-4 border border-grey7 rounded-3xl text-white2 bg-grey3">
            {icon}
            <span>{text}</span>
        </div>
    );
} 