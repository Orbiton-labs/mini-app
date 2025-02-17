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
    {infos.map((info) => (
      <div className="flex flex-row justify-between">
        <h3>{info.key}</h3>
        <h3>{info.data}</h3>
      </div>
    ))}
  </div>
);
