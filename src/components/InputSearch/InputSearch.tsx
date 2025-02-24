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
  <div
    className={`bg-grey3 gap-2 rounded-lg flex items-center py-3 px-3 w-full ${className}`}
  >
    <div>
      <IconFind />
    </div>
    <input
      value={value}
      onChange={onChange}
      type={type}
      className={`text-white1 bg-transparent border-none focus:ring-transparent text-xs `}
      placeholder={placeholder}
    ></input>
  </div>
);
