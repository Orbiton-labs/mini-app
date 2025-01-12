import { FC } from "react";
import "./styles.css";

export interface InputProps {}

export const Input: FC<InputProps> = ({}) => (
  <input
    placeholder="123123123"
    className="input__root"
  ></input>
);
