import { Icon28Close } from "@/icons/28/close";
import { Icon36Setting } from "@/icons/36/setting";
import {
  Cell,
  Divider,
  IconButton,
  Input,
  List,
  Modal,
  Section,
  Subheadline,
  Text,
} from "@telegram-apps/telegram-ui";
import { ModalClose } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalClose/ModalClose";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
import { FC, useState } from "react";
import "./styles.css";

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
          before={
            <Subheadline level="1" weight="2">
              Transaction Settings
            </Subheadline>
          }
          after={
            <ModalClose>
              <Icon28Close style={{ color: "var(--tgui--plain_foreground)" }} />
            </ModalClose>
          }
        >
          Only iOS header
        </ModalHeader>
      }
      trigger={
        <IconButton>
          <Icon36Setting />
        </IconButton>
      }
    >
      <div className="slippage-setting__header">
        <Divider />
      </div>
      
      <List>
        <Section header="Slippage Tolerance">
          <div className="slippage-setting__slippage-option-root">
            {SLIPPAGE_OPTIONS.map((option, index) => (
              <Cell
                key={option.value}
                Component="label"
                className={`slippage-setting__slippage-option-btn ${
                  slippage === option.value && !isCustom
                    ? "slippage-setting__slippage-option-btn-chosen"
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
            after={<Text weight="3">%</Text>}
          />
        </Section>

        <Section header="Transaction Deadline">
          <Input placeholder="30" after={<Text weight="3">minutes</Text>} />
        </Section>
      </List>
    </Modal>
  );
};
