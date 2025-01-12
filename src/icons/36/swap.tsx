import { Icon } from "../../types/Icon";

export const Icon36Swap = ({ ...restProps }: Icon) => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="swapHorizontalIconTitle"
    stroke="#000000"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    color="#000000"
    {...restProps}
  >
    <title id="swapHorizontalIconTitle">Swap items (horizontally)</title>
    <path d="M16 4L19 7L16 10" />
    <path d="M4 7L18 7" />
    <path d="M7 20L4 17L7 14" />
    <path d="M19 17L5 17" />
  </svg>
);
