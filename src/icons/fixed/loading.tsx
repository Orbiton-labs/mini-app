import { Icon } from "../../types/Icon";

export const IconLoading = ({ ...restProps }: Icon) => (
  <svg
    width="45"
    height="44"
    viewBox="0 0 45 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="animate-spin"
    {...restProps}
  >
    <path
      d="M22.5 4C25.6288 4 28.7036 4.81556 31.4211 6.36624C34.1386 7.91693 36.4049 10.1492 37.9967 12.8429C39.5884 15.5365 40.4505 18.5986 40.4979 21.727C40.5454 24.8555 39.7765 27.9423 38.2672 30.683C36.758 33.4237 34.5603 35.7236 31.8911 37.356C29.2219 38.9884 26.1733 39.8968 23.0459 39.9917C19.9185 40.0866 16.8204 39.3647 14.0571 37.8971C11.2939 36.4296 8.96085 34.2671 7.28817 31.6229"
      stroke="url(#paint0_linear_239_3375)"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_239_3375"
        x1="22.5"
        y1="4"
        x2="22.5"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#836CDE" />
        <stop offset="1" stopColor="#B866D2" />
      </linearGradient>
    </defs>
  </svg>
);
