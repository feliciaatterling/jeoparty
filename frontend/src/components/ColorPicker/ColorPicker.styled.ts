import styled from "styled-components";

const Circle = styled.div<{ color: string }>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const ColorPickerContainer = styled.div`
  position: relative; /* For positioning the color picker */
  display: inline-block; /* Allow it to sit next to other elements */
`;

const PickerWrapper = styled.div`
  position: absolute; /* Position it absolutely to the circle */
  top: -70px;
  left: 50px;
  padding: 12px;
  background-color: #ffffff10;
  border-radius: 12px;
`;

export { Circle, ColorPickerContainer, PickerWrapper };
