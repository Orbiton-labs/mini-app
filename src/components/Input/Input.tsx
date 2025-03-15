import { numberToBigInt, printBigInt } from "@/helper/format";
import { FC } from "react";

export interface InputProps {
  value: string | undefined;
  decimals: number;
  setValue: (value: string | undefined) => void;
}

export const Input: FC<InputProps> = ({ value, decimals = 9, setValue }) => {
  const handleSetValue = (value: any) => {
    const number = numberToBigInt(value, decimals);
    if (number === "NaN" || number === "0") {
      setValue(undefined);
      return;
    }
    setValue(number);
  };

  return (
    <input
      placeholder="0.0"
      className={`w-[100%] text-right text-xl bg-transparent overflow-visible  ${
        value ? "text-white2" : "text-white1"
      } py-[8px] border-none focus:ring-transparent`}
      type="number"
      value={value ? printBigInt(value, decimals, decimals) : undefined}
      onChange={(e) => handleSetValue(e.target.value)}
    ></input>
  );
};
