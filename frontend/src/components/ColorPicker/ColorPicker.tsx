import React, { useEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import {
  ColorPickerContainer,
  Circle,
  PickerWrapper,
} from "./ColorPicker.styled";
import ColorPickerProps from "./ColorPicker.types";

const ColorPicker: React.FC<ColorPickerProps> = ({
  color,
  setColor,
  defaultColors,
}) => {
  const [showPicker, setShowPicker] = useState<boolean>(false); // For toggling the picker
  const pickerRef = useRef<HTMLDivElement>(null); // To track if user clicks outside the picker

  const togglePicker = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent event bubbling
    setShowPicker((prev) => !prev); // Toggle state
  };

  const handleColorChange = (newColor: string) => {
    setColor(newColor); // Update the color
  };

  // Close the color picker if clicked outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      pickerRef.current &&
      !pickerRef.current.contains(event.target as Node)
    ) {
      setShowPicker(false); // Hide the color picker
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside); // Always add listener

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up
    };
  }, []); // Run only once when the component mounts

  return (
    <ColorPickerContainer>
      <Circle color={color} onClick={togglePicker} role="button" tabIndex={0} />
      {showPicker && (
        <PickerWrapper ref={pickerRef}>
          <HexColorPicker
            color={color}
            onChange={handleColorChange}
            role="color-picker"
          />

          {/* Render default color options */}
          <div style={{ display: "flex", marginTop: "10px" }}>
            {defaultColors.map((defaultColor) => (
              <Circle
                key={defaultColor}
                color={defaultColor}
                onClick={() => handleColorChange(defaultColor)}
                style={{ marginRight: "4px" }}
                role="color-option"
                aria-label={`Select ${defaultColor}`} // Add accessible label
              />
            ))}
          </div>
        </PickerWrapper>
      )}
    </ColorPickerContainer>
  );
};

export default ColorPicker;
