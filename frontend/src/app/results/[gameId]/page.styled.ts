import styled from "styled-components";

// PageWrapper: Centers content both horizontally and vertically within the viewport
export const PageWrapper = styled.div`
  display: flex;              /* Flexbox layout */
  justify-content: center;     /* Center content horizontally */
  align-items: center;         /* Center content vertically */
  min-height: 100vh;           /* Ensure the container takes at least full viewport height */
  padding: 20px;               /* Add padding inside the container */
  box-sizing: border-box;      /* Include padding and border in the element's total width and height */
`;

// Utility function to convert HEX to RGBA
const hexToRgba = (hex: string, alpha: number) => {
  hex = hex.replace(/^#/, '');
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


// Styling for the podium positions
export const PodiumSpot = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 200px;
  height: 300px;
  position: relative;

  // Apply the translucent team background using hexToRgba
  background-color: ${({ color }) => hexToRgba(color, 0.6)}; // 60% opacity for translucency
`;

// Specific podium styles for first, second, and third place
export const FirstPlace = styled(PodiumSpot)`
  height: 300px;
`;

export const SecondPlace = styled(PodiumSpot)`
  height: 250px;
`;

export const ThirdPlace = styled(PodiumSpot)`
  height: 200px;
`;

