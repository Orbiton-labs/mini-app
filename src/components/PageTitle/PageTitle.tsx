import { FC, ReactNode } from "react";

export interface PageTitleProps {
  title: string;
  after?: ReactNode;
}

export const PageTitle: FC<PageTitleProps> = ({ title, after }) => (
  <div className="flex justify-between items-center">
    <span className="bg-gradient-to-b from-green1 via-green1 to-green2 bg-clip-text text-transparent text-3xl">
      {title}
    </span>
    <div>{after}</div>
  </div>
);
