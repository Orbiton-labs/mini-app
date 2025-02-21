import { FC } from "react";

export interface TransactionSimulationProps {
  infos: {
    key: string;
    data: string;
  }[];
}

export const TransactionSimulation: FC<TransactionSimulationProps> = ({
  infos,
}) => (
  <div className="flex flex-col gap-1">
    {infos.map((info, index) => (
      <div key={index} className="flex flex-row justify-between">
        <span className="text-xs text-white1">{info.key}</span>
        <span className="text-xs text-white2">{info.data}</span>
      </div>
    ))}
  </div>
);
