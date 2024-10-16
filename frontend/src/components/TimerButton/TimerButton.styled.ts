import styled, { CSSProperties, keyframes, css } from "styled-components";

// Define the pulsing animation for the shadow
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
    // Reverse the fill width by subtracting the percentage from 100
    "--fill-width": `${100 - props.$fillPercentage}%`,
  } as CSSProperties,
}))<{ $fillPercentage: number; $isComplete: boolean }>`
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  padding: 12px;
  position: relative;
  background-color: transparent;
  color: white;
  border: 2px solid #43b3f4;
  overflow: hidden;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover {
    background-color: #5cc0f6;
    color: white;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px 3px rgba(92, 192, 246, 0.5);
  }

  // Glowing effect when the timer is complete, including pulse
  ${({ $isComplete }) =>
    $isComplete &&
    css`
      animation: ${pulseShadow} 1.5s infinite; // Start the pulsing animation
    `}

  // Reverse fill animation for the button (starts full, then empties)
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: var(--fill-width); // Use the dynamic variable for reversed width
    height: 100%;
    background-color: #43b3f4;
    transition: width 0.1s linear; // Smooth emptying effect
    z-index: -1;
  }

  // Text should always be on top of the fill
  z-index: 2;
  position: relative;
`;
