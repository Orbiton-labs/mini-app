import { Title } from "@telegram-apps/telegram-ui";
import { FC, ReactNode } from "react";

export interface PageTitleProps {
  title: string;
  after?: ReactNode;
}

export const PageTitle: FC<PageTitleProps> = ({ title, after }) => (
  <div className="flex w-[full] justify-between items-center py-4">
    <Title className="px-3 py-0" level="1" weight="3">
      {title}
    </Title>
    <div>{after}</div>
  </div>
);
