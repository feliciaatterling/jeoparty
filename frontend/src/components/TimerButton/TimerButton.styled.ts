import styled, { CSSProperties, keyframes, css } from "styled-components";

// Define the pulsing animation for the shadow when the timer is complete
const pulseShadow = keyframes`
  0% {
    box-shadow: 0px 0px 20px 4px rgba(92, 192, 246, 0.7);
  }
  50% {
    box-shadow: 0px 0px 30px 8px rgba(92, 192, 246, 0.4);
  }
  100% {
    box-shadow: 0px 0px 20px 4px rgba(92, 192, 246, 0.7);
  }
`;

// Main timer button styling
export const ScTimerButton = styled.button.attrs<{ $fillPercentage: number; $isComplete: boolean }>((props) => ({
  style: {
    "--fill-width": `${props.$fillPercentage}%`,
  } as CSSProperties,
}))<{ $fillPercentage: number; $isComplete: boolean }>`
  border: none;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  position: relative;
  padding: 12px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  border: 2px solid #43b3f4;
  overflow: hidden;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  background: linear-gradient(
    to right,
    #43b3f4 var(--fill-width),
    transparent var(--fill-width)
  ); // Background fill effect

  // Hover effect to change the button background color without affecting the fill
  &:hover {
    background-color: rgba(92, 192, 246, 0.1); // Slight background change
    color: white;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px 3px rgba(92, 192, 246, 0.5);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  // Glowing effect when the timer is complete
  ${({ $isComplete }) =>
    $isComplete &&
    css`
      animation: ${pulseShadow} 1.5s infinite; // Start the pulsing animation when complete
      background: #43b3f4; // Fully fill the background when complete
      color: white; // Ensure text color remains white
    `}

  // Ensure text remains visible on top
  span {
    position: relative;
    z-index: 1;
  }

  // Background fill animation
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: var(--fill-width); // Use dynamic variable for fill width
    height: 100%;
    background-color: #43b3f4; // Fill color
    transition: width 0.1s linear; // Smooth fill effect
    z-index: -1;
  }
`;
