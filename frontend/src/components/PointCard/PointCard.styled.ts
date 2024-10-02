import styled from "styled-components";

// Interface for styled component to accept disabled state and team color
interface ScPointCardProps {
  $disabled: boolean;
  $teamColor?: string; // Optional team color prop
}

const ScPointCard = styled.button<ScPointCardProps>`
  padding: 26px 34px;
  background: ${({ $disabled, $teamColor }) =>
    $disabled && $teamColor
      ? `rgba(${$teamColor}, 0.3)` // Translucent background with team color when disabled
      : "linear-gradient(180deg, rgba(60, 202, 231, 1) 10%, rgba(225, 27, 252, 1) 100%)"};
  margin: 10px;
  border-radius: 3px;
  color: ${({ $disabled }) => ($disabled ? "#999999" : "white")};
  border: none;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? "0.8" : "1")};
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};

  &:hover {
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  }

  &:focus {
    background-color: ${({ $disabled }) =>
      $disabled ? "rgba(150, 150, 150, 1)" : "blue"};
  }
`;

export default ScPointCard;
