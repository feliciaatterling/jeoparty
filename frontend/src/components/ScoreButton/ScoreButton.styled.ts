// ScoreButton.styled.ts
import styled from "styled-components";

// Styled component for the score button
export const ScScoreButton = styled.button<{ $teamColor?: string; $isActive?: boolean; }>`
  background-color: ${({ $teamColor, $isActive }) =>
    $isActive ? "white" : $teamColor}; // Active team buttons are white
  color: ${({ $teamColor, $isActive }) =>
    $isActive ? $teamColor : "white"}; // Active team text is the team color
  border: none;
  border-radius: 4px;
  padding: 3px 6px; // Smaller padding for smaller buttons
  font-size: 14px; // Match the font size of TeamMoney
  cursor: pointer;
  width: 16px; // Ensure consistent width
  height: 16px; // Set the height to match TeamMoney's height
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ $teamColor, $isActive }) =>
      $isActive ? $teamColor : "white"}; // Hover effect for active team buttons
    color: ${({ $isActive }) => ($isActive ? "white" : "#000")}; // Hover text color
  }

  &:active {
    transform: scale(0.95); // Slight shrink on click
  }

  &:focus {
    outline: none;
  }
`;
