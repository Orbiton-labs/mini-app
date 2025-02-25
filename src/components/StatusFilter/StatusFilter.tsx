import { Icon20Chevron } from "@/icons/20/chevron-down";
import { IconClose } from "@/icons/fixed/close";
import { ModalClose } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalClose/ModalClose";
import { FC } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "../ui/drawer";

export interface StatusFilterProps {
  selectedStatus: string;
  statusFilterList: string[];
  setStatus: (status: string) => void;
  displayStatusList: () => void;
}

export const StatusFilter: FC<StatusFilterProps> = ({
  selectedStatus,
  statusFilterList,
  setStatus,
  displayStatusList,
}) => {
  return (
    <Drawer>
      <DrawerTrigger>
        <div
          className="flex justify-between gap-2 w-full items-center h-full px-3 bg-grey3 rounded-lg"
          onClick={displayStatusList}
        >
          <p className="text-xs">{selectedStatus}</p>
          <div>
            <Icon20Chevron />
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent className="bg-gradient-to-b from-grey1 to-grey2 rounded-t-2xl overflow-hidden border-none pb-12">
        <DrawerHeader className="flex justify-between items-center mx-4 px-2 py-5">
          <div className="w-2"></div>
          <span className="text-base text-white2">Select Position Status</span>
          <ModalClose>
            <IconClose />
          </ModalClose>
        </DrawerHeader>
        {statusFilterList.map((option, index) => (
          <ModalClose key={index}>
            <div
              className="mx-4 flex py-4 gap-2 px-1 justify-center items-center"
              onClick={() => setStatus(option)}
            >
              <span className="text-sm text-white2">{option}</span>
            </div>
          </ModalClose>
        ))}
      </DrawerContent>
    </Drawer>
  );
};
