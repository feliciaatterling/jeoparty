import styled from "styled-components";

// Circle component for color selection
const Circle = styled.div<{ color: string }>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

// Container for the color picker
const ColorPickerContainer = styled.div`
  position: relative;
  display: inline-block;
`;

// Wrapper for the color picker options
const PickerWrapper = styled.div`
  position: absolute;
  top: -70px;
  left: 50px;
  padding: 12px;
  background-color: #ffffff10;
  border-radius: 12px;
`;

export { Circle, ColorPickerContainer, PickerWrapper };
