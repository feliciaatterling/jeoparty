"use client";

import { BiInfoCircle } from "react-icons/bi";
import InfoIconProps from "./InfoIcon.types";
import { ScIconContainer } from "./InfoIcon.styled";

function InfoIcon({ onHover, onHoverId }: InfoIconProps) {
  return (
    <ScIconContainer>
      <BiInfoCircle
        size={20}
        onMouseEnter={() => onHover(onHoverId)}
        onMouseLeave={() => onHover(0)}
      />
    </ScIconContainer>
  );
}

export default InfoIcon;
