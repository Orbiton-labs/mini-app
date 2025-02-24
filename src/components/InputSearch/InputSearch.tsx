import { IconFind } from "@/icons/fixed/find";
import { FC } from "react";

export interface InputSearchProps {
  type: "text" | "number";
  placeholder: string;
  value: any;
  onChange: (event: any) => void;
  className?: any;
}

export const InputSearch: FC<InputSearchProps> = ({
  type,
  placeholder,
  value,
  onChange,
  className,
}) => (
  <div className="bg-grey3 gap-2 rounded-lg flex py-3 px-3 mb-2 w-full">
    <IconFind />
    <input
      value={value}
      onChange={onChange}
      type={type}
      className={`text-white1 bg-transparent border-none focus:ring-transparent text-xs ${className}`}
      placeholder={placeholder}
    ></input>
  </div>
);
