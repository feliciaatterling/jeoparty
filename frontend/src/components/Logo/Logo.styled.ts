import styled from "styled-components";

interface LogoWrapperProps {
  size: "small" | "medium" | "large";
}

// Define the size styles based on the size prop
const logoSizes = {
  small: { width: 150, height: 50 },
  medium: { width: 225, height: 32 },
  large: { width: 700, height: 100 },
};

// Styled wrapper to apply different sizes based on props
export const LogoWrapper = styled.div<LogoWrapperProps>`
  width: ${(props) => logoSizes[props.size].width}px;
  height: ${(props) => logoSizes[props.size].height}px;
  position: relative; /* Required for next/image to work correctly */
`;
