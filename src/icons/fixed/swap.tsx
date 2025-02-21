import { Icon } from "../../types/Icon";

export const IconSwap = ({ ...restProps }: Icon) => (
  <svg
    width="65"
    height="24"
    viewBox="0 0 65 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.2158 1.73438L31.7158 6.23438C31.9971 6.51562 31.9971 7.03125 31.7158 7.3125C31.4346 7.59375 30.9189 7.59375 30.6377 7.3125L27.4502 4.07812V21.75C27.4502 22.1719 27.0752 22.5 26.7002 22.5C26.2783 22.5 25.9502 22.1719 25.9502 21.75V4.07812L22.7158 7.3125C22.4346 7.59375 21.9189 7.59375 21.6377 7.3125C21.3564 7.03125 21.3564 6.51562 21.6377 6.23438L26.1377 1.73438C26.4189 1.45312 26.9346 1.45312 27.2158 1.73438ZM43.7158 17.8125L39.2158 22.3125C38.9346 22.5938 38.4189 22.5938 38.1377 22.3125L33.6377 17.8125C33.3564 17.5312 33.3564 17.0156 33.6377 16.7344C33.9189 16.4531 34.4346 16.4531 34.7158 16.7344L37.9502 19.9688V2.25C37.9502 1.875 38.2783 1.5 38.7002 1.5C39.0752 1.5 39.4502 1.875 39.4502 2.25V19.9688L42.6377 16.7344C42.9189 16.4531 43.4346 16.4531 43.7158 16.7344C43.9971 17.0156 43.9971 17.5312 43.7158 17.8125Z"
      fill={restProps.isActive ? "url(#paint0_linear_257_2027)" : "#FBFCF4"}
    />
    <defs>
      <linearGradient
        id="paint0_linear_280_2511"
        x1="32.7002"
        y1="2"
        x2="32.7002"
        y2="22"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#07C557" />
        <stop offset="1" stop-color="#82FA73" />
      </linearGradient>
    </defs>
  </svg>
);
