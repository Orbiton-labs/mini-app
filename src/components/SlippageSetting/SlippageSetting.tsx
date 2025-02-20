import { Icon24Gear } from "@/icons/24/gear";
import { Icon28Close } from "@/icons/28/close";
import {
  Cell,
  Divider,
  Input,
  List,
  Modal,
  Section,
} from "@telegram-apps/telegram-ui";
import { ModalClose } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalClose/ModalClose";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
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
    <Modal
      header={
        <ModalHeader
          // before={
          //   <Subheadline level="1" weight="2">
          //     Transaction Settings
          //   </Subheadline>
          // }
          after={
            <ModalClose>
              <Icon28Close style={{ color: "var(--tgui--plain_foreground)" }} />
            </ModalClose>
          }
        >
          Transaction Settings
        </ModalHeader>
      }
      trigger={<Icon24Gear />}
    >
      <div className="slippage-setting__header">
        <Divider />
      </div>

      <List>
        <Section header="Slippage Tolerance">
          <div className="flex justify-between px-4 py-2">
            {SLIPPAGE_OPTIONS.map((option, index) => (
              <Cell
                key={option.value}
                Component="label"
                className={`border rounded-lg border-solid border-[grey] ${
                  slippage === option.value && !isCustom
                    ? "border border-solid"
                    : ""
                }`}
                onClick={() => {
                  setIsCustom(false);
                  setSlippage(option.value);
                }}
              >
                {option.value}%
              </Cell>
            ))}
          </div>
          <Input
            header="Custom"
            placeholder="10"
            type="number"
            value={
              isCustom &&
              !SLIPPAGE_OPTIONS.map((option) => option.value).includes(slippage)
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
            after={<h2>%</h2>}
          />
        </Section>

        <Section header="Transaction Deadline">
          <Input placeholder="30" after={<h2>minutes</h2>} />
        </Section>
      </List>
    </Modal>
  );
};
