export default function Backdrop({ className }: { className?: string }) {
    return (
        <svg width="972" height="910" viewBox="0 0 972 810" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}    >
            <g filter="url(#filter0_f_815_28017)">
                <circle cx="486" cy="364" r="244" fill="#985FE2" />
            </g>
            <defs>
                <filter id="filter0_f_815_28017" x="0.100006" y="-121.9" width="971.8" height="971.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="120.95" result="effect1_foregroundBlur_815_28017" />
                </filter>
            </defs>
        </svg>
    );
}
