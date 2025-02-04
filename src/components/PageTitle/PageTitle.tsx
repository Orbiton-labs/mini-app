import { Title } from "@telegram-apps/telegram-ui";
import { FC, ReactNode } from "react";
import "./styles.css";

export interface PageTitleProps {
  title: string;
  after?: ReactNode;
}

export const PageTitle: FC<PageTitleProps> = ({ title, after }) => (
  <div className="page-title__header-root">
    <Title className="page-title__header-title" level="1" weight="3">
      {title}
    </Title>
    <div>{after}</div>
  </div>
);
