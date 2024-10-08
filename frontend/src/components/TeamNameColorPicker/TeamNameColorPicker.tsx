"use client";

import ColorPicker from "../ColorPicker/ColorPicker";
import Input from "../Input/Input";
import { ScContainer } from "./TeamNameColorPicker.styled";
import TeamNameColorPickerProps from "./TeamNameColorPicker.types";

const TeamNameColorPicker: React.FC<TeamNameColorPickerProps> = ({
  label,
  name,
  setName,
  color,
  setColor,
  defaultColors,
  error,
}) => {
  return (
    <ScContainer>
      <Input label={label} value={name} setValue={setName} error={error} />
      <ColorPicker
        color={color}
        setColor={setColor}
        defaultColors={defaultColors}
      />
    </ScContainer>
  );
};

export default TeamNameColorPicker;
