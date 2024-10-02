"use client";
import styled from "styled-components";

// Define possible spacer sizes
const SIZES: number[] = [4, 8, 16, 32, 64];

// Styled component for spacing
const ScSpacer = styled.div<{
  orientation: "horizontal" | "vertical"; // Spacer orientation
  size: number; // Size index to determine spacing
}>`
  width: ${(props) =>
    props.orientation === "horizontal" ? SIZES[props.size] + "px" : 0}; // Set width for horizontal spacer
  height: ${(props) =>
    props.orientation === "vertical" ? SIZES[props.size] + "px" : 0}; // Set height for vertical spacer
`;

export default ScSpacer;
