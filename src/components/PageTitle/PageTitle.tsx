import { FC, ReactNode } from "react";

export interface PageTitleProps {
  title: string;
  after?: ReactNode;
}

export const PageTitle: FC<PageTitleProps> = ({ title, after }) => (
  <div className="flex w-[full] justify-between items-center py-4">
    <h1 className="px-3 py-0 bg-gradient-to-b from-green1 via-green1 to-green2 bg-clip-text text-transparent">{title}</h1>
    <div>{after}</div>
  </div>
);
