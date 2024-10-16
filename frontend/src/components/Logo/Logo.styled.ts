import styled from "styled-components";

interface LogoWrapperProps {
  size: "small" | "medium" | "large";
}

// Define the size styles based on the size prop
const logoSizes = {
  small: { width: 225, height: 225 / 6.088 },
  medium: { width: 350, height: 350 / 6.088 },
  large: { width: 700, height: 700 / 6.088 },
};

// Styled wrapper to apply different sizes based on props
export const LogoWrapper = styled.div<LogoWrapperProps>`
  width: ${(props) => logoSizes[props.size].width}px;
  height: ${(props) => logoSizes[props.size].height}px;
  position: relative; /* Required for next/image to work correctly */
`;
