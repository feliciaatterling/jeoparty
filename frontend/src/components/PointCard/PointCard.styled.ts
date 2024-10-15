import styled from "styled-components";

// Utility function to convert HEX to RGBA
const hexToRgba = (hex: string, alpha: number) => {
  hex = hex.replace(/^#/, "");
  let r: number, g: number, b: number;
  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else {
    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);
  }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Interface for styled component to accept disabled state and team color
interface ScPointCardProps {
  $disabled: boolean;
  $teamColor?: string; // Optional team color prop
}

const ScPointCard = styled.button<ScPointCardProps>`
  padding: 20px; // Adjusted padding
  width: 140px; // Set a fixed width
  height: 70px; // Set a fixed height
  background: ${({ $disabled, $teamColor }) =>
    $disabled && $teamColor
      ? hexToRgba($teamColor, 0.5) // Convert HEX to RGBA with 50% transparency
      : "linear-gradient(180deg, rgba(60, 202, 231, 1) 10%, rgba(225, 27, 252, 1) 100%)"};
  border-radius: 4px;
  color: ${({ $disabled }) => ($disabled ? "#999999" : "white")};
  border: none;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? "0.8" : "1")};
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;

  @media (min-width: 1640px) {
    width: 180px;
    height: 90px;
    font-size: 18px;
  }
  @media (min-width: 1920px) {
    width: 220px; /* Maximum limit for ultra-wide screens */
    height: 110px;
    font-size: 22px;
  }
  @media (min-width: 2560px) {
  }

  &:hover {
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  }

  &:focus {
    background-color: ${({ $disabled }) =>
      $disabled ? "rgba(150, 150, 150, 1)" : "blue"};
  }

  div {
    width: 100%;
    white-space: nowrap; // Keep text on one line
    overflow: hidden; // Hide overflow
    text-overflow: ellipsis; // Show ellipsis for overflow text
  }
`;

export default ScPointCard;
