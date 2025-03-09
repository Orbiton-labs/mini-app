import { Icon } from "../../types/Icon";

export const IconExplore = ({ isActive, ...restProps }: Icon) => (
  <svg
    width="65"
    height="24"
    viewBox="0 0 65 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <path
      d="M21.7988 2.25V18.75C21.7988 20.0156 22.7832 21 24.0488 21H43.5488C43.9238 21 44.2988 21.375 44.2988 21.75C44.2988 22.1719 43.9238 22.5 43.5488 22.5H24.0488C21.9395 22.5 20.2988 20.8594 20.2988 18.75V2.25C20.2988 1.875 20.627 1.5 21.0488 1.5C21.4238 1.5 21.7988 1.875 21.7988 2.25ZM35.2988 6.75C35.2988 6.375 35.627 6 36.0488 6H42.0488C42.4238 6 42.7988 6.375 42.7988 6.75V12.75C42.7988 13.1719 42.4238 13.5 42.0488 13.5C41.627 13.5 41.2988 13.1719 41.2988 12.75V8.57812L35.8145 14.0625C35.5332 14.3438 35.0176 14.3438 34.7363 14.0625L30.7988 10.0781L26.0645 14.8125C25.7832 15.0938 25.2676 15.0938 24.9863 14.8125C24.7051 14.5312 24.7051 14.0156 24.9863 13.7344L30.2363 8.48438C30.5176 8.20312 31.0332 8.20312 31.3145 8.48438L35.2988 12.4688L40.2207 7.5H36.0488C35.627 7.5 35.2988 7.17188 35.2988 6.75Z"
      fill={isActive ? "url(#paint0_linear_257_2027)" : "#FBFCF4"}
    />
    <defs>
      <linearGradient
        id="paint0_linear_257_2027"
        x1="12.6992"
        y1="1"
        x2="12.6992"
        y2="21"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#07C557" />
        <stop offset="1" stopColor="#82FA73" />
      </linearGradient>
    </defs>
  </svg>
);
