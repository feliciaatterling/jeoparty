import styled, { keyframes } from "styled-components";

// Define the fade-in animation
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Wrapper for the entire page
export const PodiumWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;  /* Center podiums vertically */
  align-items: center;
  width: 100%;
  height: 100%;  /* Set to 100% of the container */
  padding: 0;  /* Remove extra padding */
  box-sizing: border-box;
  color: white;
`;

// Container for the podium spots
export const PodiumContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;  /* Reduce gap between podiums */
  width: 100%;
  max-width: 90vw;  /* Make sure the podiums take up available width */
  flex-wrap: wrap; /* Allows podiums to wrap on smaller screens */
  height: auto;

  @media (min-width: 1200px) {
    max-width: 80vw;
  }

  @media (max-width: 768px) {
    gap: 5px;  /* Smaller gap on smaller screens */
  }
`;

// Base styling for the podium spots with animation
export const PodiumSpot = styled.div<{ $delay: number; color?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 2px;
  text-align: center;
  color: white;
  background: ${(props) => props.color || "rgba(255, 255, 255, 0.1)"};
  width: 15vw;  /* Width based on viewport width */
  position: relative;

  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  animation-delay: ${(props) => props.$delay}s;

  @media (min-width: 1200px) {
    width: 12vw; /* Slightly smaller on larger screens */
    height: calc(30vh - 30px);
  }

  @media (max-width: 768px) {
    width: 20vw; /* Smaller podiums on smaller screens */
    height: calc(25vh - 30px);
  }
`;

// Specific styles for the first, second, and third places
export const FirstPlace = styled(PodiumSpot)`
  height: calc(30vh - 20px);
`;

export const SecondPlace = styled(PodiumSpot)`
  height: calc(24vh - 20px);
`;

export const ThirdPlace = styled(PodiumSpot)`
  height: calc(18vh - 20px);
`;

export const PlayerInfo = styled.div`
  position: absolute;
  top: 10px;
  text-align: center;
`;

// Player name and score styling
export const PlayerName = styled.div`
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 16px; /* Adjust font size on smaller screens */
  }
`;

export const PlayerScore = styled.div`
  font-size: 16px;
  margin-top: 5px;

  @media (max-width: 768px) {
    font-size: 14px; /* Adjust font size on smaller screens */
  }
`;

export const PlaceLabel = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin-top: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// Add this missing PodiumObject component
export const PodiumObject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; /* Gap between the podium and the place label */
  width: auto;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%; /* Stack podiums vertically on smaller screens */
  }
`;
