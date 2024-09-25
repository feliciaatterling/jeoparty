"use client";

import ColorPicker from "../ColorPicker/ColorPicker";
import Input from "../Input/Input";
import { ScContainer } from "./TeamNameColorPicker.styled";
import TeamNameColorPickerProps from "./TeamNameColorPicker.types";
//#2f53f9
const TeamNameColorPicker: React.FC<TeamNameColorPickerProps> = ({ label }) => {
  return (
    <ScContainer>
      <Input label={label} />
      <ColorPicker />
    </ScContainer>
  );
};

export default TeamNameColorPicker;
