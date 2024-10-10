import { SetStateAction } from "react";

interface InfoIconProps {
  onHoverId: number;
  onHover: (value: SetStateAction<number>) => void;
}

export default InfoIconProps;
