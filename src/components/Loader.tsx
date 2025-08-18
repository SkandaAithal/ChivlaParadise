import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div id="preloader">
      <div className="flex flex-col items-center justify-center gap-4">
        <Image
          src="/chivla-paradise-logo.png"
          alt="Chivla Paradise"
          height={100}
          width={200}
          priority
          className="animate-pulse"
        />
        <svg
          className="pl"
          viewBox="0 0 64 64"
          width="64px"
          height="64px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#000" />
              <stop offset="100%" stopColor="#fff" />
            </linearGradient>
            <mask id="grad-mask">
              <rect x="0" y="0" width="64" height="64" fill="url(#grad)" />
            </mask>
          </defs>
          <circle
            className="pl__ring"
            cx="32"
            cy="32"
            r="26"
            fill="none"
            stroke="hsl(64.05797101449276, 90.3930131004367%, 55.09803921568628%)"
            strokeWidth="12"
            strokeDasharray="169.65 169.65"
            strokeDashoffset="-127.24"
            strokeLinecap="round"
            transform="rotate(135)"
          />
          <g fill="hsl(64.05797101449276, 90.3930131004367%, 55.09803921568628%)">
            <circle
              className="pl__ball1"
              cx="32"
              cy="45"
              r="6"
              transform="rotate(14)"
            />
            <circle
              className="pl__ball2"
              cx="32"
              cy="48"
              r="3"
              transform="rotate(-21)"
            />
          </g>
          <g mask="url(#grad-mask)">
            <circle
              className="pl__ring"
              cx="32"
              cy="32"
              r="26"
              fill="none"
              stroke="hsl(188.8235294117647, 100%, 40%)"
              strokeWidth="12"
              strokeDasharray="169.65 169.65"
              strokeDashoffset="-127.24"
              strokeLinecap="round"
              transform="rotate(135)"
            />
            <g fill="hsl(188.8235294117647, 100%, 40%)">
              <circle
                className="pl__ball1"
                cx="32"
                cy="45"
                r="6"
                transform="rotate(14)"
              />
              <circle
                className="pl__ball2"
                cx="32"
                cy="48"
                r="3"
                transform="rotate(-21)"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
