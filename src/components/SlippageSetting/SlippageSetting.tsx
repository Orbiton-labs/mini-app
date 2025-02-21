import { Icon24Gear } from "@/icons/24/gear";
import { IconClose } from "@/icons/fixed/close";
import { Modal } from "@telegram-apps/telegram-ui";
import { ModalClose } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalClose/ModalClose";
import { FC, useState } from "react";

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
    <Modal trigger={<Icon24Gear />}>
      <div className="bg-gradient-to-b from-grey1 to-grey2 rounded-t-2xl min-h-[45vh] overflow-auto">
        <div className="flex justify-between items-center mx-4 px-2 py-5">
          <div className="w-3"></div>
          <span className="text-base text-white2">Select a token</span>
          <ModalClose>
            <IconClose />
          </ModalClose>
        </div>
        <div className="mx-4 px-2">
          <span className="text-sm text-white2">Slippage Tolerance</span>
          <div className="mt-2 flex justify-between gap-2 items-center">
            {SLIPPAGE_OPTIONS.map((option, index) => (
              <div
                key={option.value}
                className={`border rounded-lg border-solid border-[grey] flex-1 py-3 text-center  ${
                  slippage === option.value && !isCustom
                    ? "bg-gradient-to-b from-green1 to-green2 border-none text-black2"
                    : ""
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
            <h2>%</h2>
          </div>
        </div>

        <div className="mx-4 px-2 mt-6">
          <span className="text-sm text-white2">Transaction Deadline</span>
          <div className="bg-grey3 gap-2 rounded-lg flex py-3 px-3 mb-2 mt-2">
            <input
              className="text-white1 bg-transparent border-none focus:ring-transparent text-xs w-full"
              placeholder="30"
            />
            <span className="text-sm">minutes</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};
