import { IconClose } from "@/icons/fixed/close";
import { IconLoading } from "@/icons/fixed/loading";
import { IconToOtherPage } from "@/icons/fixed/to-other-page";
import { FC } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

export interface TransactionStatusProps {
  title: string;
  description: string;
  onViewOnTonviewer: () => void;
}

export const TransactionStatus: FC<TransactionStatusProps> = ({ title, description, onViewOnTonviewer }) => {
  return (
    <Drawer>
      <DrawerTitle></DrawerTitle>
      <DrawerTrigger asChild={true}>
        <div className="flex w-full py-3 px-3 justify-between items-center bg-black3 rounded-lg border border-solid border-grey5 mb-[125px] mx-4">
          <div className="flex flex-col gap-2 justify-between items-start">
            <p className="text-white2 text-sm">{title}</p>
            <p className="text-white1 text-xs">Transaction pending</p>
          </div>

          <div>
            <IconLoading />
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent
        aria-describedby={undefined}
        className="bg-black3 rounded-t-2xl overflow-hidden border-none pb-12"
      >
        <DrawerHeader className="flex justify-center items-center mx-4 px-2 py-5">
          <div>
            <span className="col-span-8 text-sm text-white2">
              {title}
            </span>
          </div>
          <DrawerClose>
            <IconClose className="absolute right-6 top-6" />
          </DrawerClose>
        </DrawerHeader>

        <div className="flex flex-col gap-4 justify-between items-center w-full my-5">
          <IconLoading />

          <div className="flex flex-col gap-2 justify-between items-center">
            <p className="text-white2 text-sm">{description}</p>
            <p className="text-white1 text-xs">It will only take a moment</p>
          </div>
        </div>

        {/* <div className="grid grid-cols-3 gap-2 mt-8 mx-10">
          <div className="flex flex-col gap-4 justify-between items-center">
            <IconSendTransaction />
            <ProgressBar value={100} />
            <div className="text-xs text-white2 text-center">
              Sending Transaction
            </div>
          </div>
          <div className="flex flex-col gap-3 justify-between items-center">
            <IconShieldCheck />
            <ProgressBar value={100} />
            <div className="text-xs text-white2 text-center">
              Verifying Jettons
            </div>
          </div>
          <div className="flex flex-col gap-3 justify-between items-center">
            <IconArrowUpArrowDown />
            <ProgressBar />
            <div className="text-xs text-white2 text-center">
              Confirming Swap
            </div>
          </div>
        </div> */}

        <div onClick={onViewOnTonviewer} className="flex justify-center gap-2 items-center w-full mt-10 mb-2">
          <p className="text-base text-white2">View on Tonviewer</p>
          <IconToOtherPage />
        </div>
      </DrawerContent>
    </Drawer>
  );
};
