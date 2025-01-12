import { Icon } from "../../types/Icon";

export const Icon32SwapVertical = ({ ...restProps }: Icon) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    fill="none"
    stroke="#000000"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    {...restProps}
  >
    <path d="m7.75 5.75-3-3-3 3m3 7.5v-10.5m9.5 7.5-3 3-3-3m3-7.5v10.5" />
  </svg>
);
