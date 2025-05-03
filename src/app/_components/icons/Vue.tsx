import React from "react";
import { type IconProps } from "./types";

interface VueIconProps extends IconProps {
  innerOpacity?: number; // Controls the opacity of the inner V
}

const VueIcon = ({ 
  iconClassName,
  innerOpacity = 0.4, // Default inner opacity that creates contrast with outer part
}: VueIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 221"
      className={iconClassName}
    >
      {/* Outer V */}
      <path
        d="M0,0 L128,220.8 L256,0 L204.8,0 L128,132.48 L50.56,0 L0,0 Z"
        fill="currentColor"
      />
      {/* Inner V with adjustable opacity */}
      <path
        d="M50.56,0 L128,133.12 L204.8,0 L157.44,0 L128,51.2 L97.92,0 L50.56,0 Z"
        fill="currentColor"
        fillOpacity={innerOpacity}
      />
    </svg>
  );
};

export default VueIcon;