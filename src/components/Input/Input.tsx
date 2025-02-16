import { numberToBigInt } from "@/helper/format";
import { FC } from "react";

export interface InputProps {
  decimals: number;
  setValue: (value: string | undefined) => void;
}

export const Input: FC<InputProps> = ({ decimals = 9, setValue }) => {
  const handleSetValue = (value: any) => {
    const number = numberToBigInt(value, decimals);
    if (number === "NaN") {
      setValue(undefined);
      return;
    }
    setValue(number);
  };

  return (
    <input
      placeholder="123123123"
      style={{
        fontSize: "150%",
      }}
      className="w-[100%] text-right py-1  border-0 border-solid outline-0 outline-transparent text-black"
      type="number"
      onChange={(e) => handleSetValue(e.target.value)}
    ></input>
  );
};
