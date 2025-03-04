import { IconArrowLeft } from "@/icons/fixed/angle-left";
// import { useRouter } from "next/navigation";
import { FC, ReactNode } from "react";

export interface SubPageTitleProps {
  title: string;
  canBack?: ReactNode;
}

export const SubPageTitle: FC<SubPageTitleProps> = ({ title, canBack = true }) => {
  // const router = useRouter();

  return (
    <div
      // onClick={() => canBack && router.back()}
      className="flex justify-start items-center gap-2 mt-2"
    >
      {canBack && <IconArrowLeft />}
      <span className="text-lg">{title}</span>
    </div>
  );
};
