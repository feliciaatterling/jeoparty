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

// Helper function to convert hex to rgba for translucent backgrounds
const hexToRgba = (hex: string, opacity: number) => {
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r},${g},${b},${opacity})`;
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

