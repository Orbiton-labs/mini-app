import { Icon24Gear } from "@/icons/24/gear";
import { IconClose } from "@/icons/fixed/close";
import { ModalClose } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalClose/ModalClose";
import { FC, useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

export interface SlippageSettingProps {
  slippage: number;
  setSlippage: (slippage: number) => void;
}

export const SLIPPAGE_OPTIONS = [
  {
    value: 0.5,
  },
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 5,
  },
];

export const SlippageSetting: FC<SlippageSettingProps> = ({
  slippage,
  setSlippage,
}) => {
  const [isCustom, setIsCustom] = useState<boolean>(false);

  return (
    <Drawer>
      <DrawerTitle></DrawerTitle>
      <DrawerTrigger>
        <Icon24Gear />
      </DrawerTrigger>
      <DrawerContent
        aria-describedby={undefined}
        className="bg-black3 rounded-t-2xl border-none"
      >
        <DrawerHeader className="flex justify-center items-center mx-4 px-2 py-5">
          <div>
            <span className="col-span-8 text-sm text-white2">
              Slippage Settings
            </span>
          </div>
          <ModalClose>
              <IconClose className="absolute right-6 top-6" />
          </ModalClose>
        </DrawerHeader>

        <div className="mx-4 px-2">
          <span className="text-sm text-white2">Slippage Tolerance</span>
          <div className="mt-2 flex justify-between gap-2 items-center">
            {SLIPPAGE_OPTIONS.map((option, index) => (
              <div
                key={option.value}
                className={`border rounded-lg border-solid border-[grey] flex-1 py-3 text-center  ${
                  slippage === option.value && !isCustom
                    ? "bg-gradient-to-b from-green1 to-green2 border-none text-black2"
                    : "text-white2"
                }`}
                onClick={() => {
                  setIsCustom(false);
                  setSlippage(option.value);
                }}
              >
                {option.value}%
              </div>
            ))}
          </div>

          <div className="bg-grey3 gap-2 rounded-lg flex py-3 px-3 mb-2 mt-2">
            <input
              className="text-white1 bg-transparent border-none focus:ring-transparent text-xs w-full"
              placeholder="10"
              type="number"
              value={
                isCustom &&
                !SLIPPAGE_OPTIONS.map((option) => option.value).includes(
                  slippage
                )
                  ? slippage
                  : undefined
              }
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                if (!isNaN(value)) {
                  setSlippage(value);
                } else {
                  setSlippage(SLIPPAGE_OPTIONS[0].value);
                  setIsCustom(false);
                }
              }}
              onBlur={(e) => {
                const value = parseFloat(e.target.value);
                if (isNaN(value)) {
                  setSlippage(SLIPPAGE_OPTIONS[0].value);
                  setIsCustom(false);
                }
              }}
              onFocus={() => setIsCustom(true)}
            />
            <span className="text-xs text-white1">%</span>
          </div>
        </div>

        <div className="mx-4 px-2 mt-6 pb-6">
          <span className="text-sm text-white2">Transaction Deadline</span>
          <div className="bg-grey3 gap-2 rounded-lg flex py-3 px-3 mb-2 mt-2">
            <input
              type="number"
              className="text-white1 bg-transparent border-none focus:ring-transparent text-xs w-full"
              placeholder="30"
            />
            <span className="text-xs text-white1">minutes</span>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
