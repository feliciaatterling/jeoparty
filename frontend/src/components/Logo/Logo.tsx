import React from "react";
import Image from "next/image";
import { LogoWrapper } from "./Logo.styled"; // Import the styled component

interface LogoProps {
  size?: "small" | "medium" | "large"; // Accept size prop
}

const Logo: React.FC<LogoProps> = ({ size = "medium" }) => {
  return (
    <LogoWrapper size={size}>
      <Image
        src="/images/Jeoparty_Logo.png"
        alt="JeoParty Logo"
        fill
        priority // Priority for LCP optimization
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: "contain" }}
      />
    </LogoWrapper>
  );
};

export default Logo;
