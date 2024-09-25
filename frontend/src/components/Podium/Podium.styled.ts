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
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  max-height: 100vh;
  padding: 75px;
  box-sizing: border-box;
  color: white;
`;

// Title for the results
export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #111c44;
  background-color: white;
  padding: 10px 20px;
  border-radius: 2px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

// Container for the podium spots
export const PodiumContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 30px;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 10px;
`;

// Base styling for the podium spots with animation
export const PodiumSpot = styled.div<{ delay: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  border-radius: 2px;
  text-align: center;
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
  width: 200px;
  position: relative;

  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  animation-delay: ${(props) => props.delay}s;
`;

// Add PlayerInfo for positioning the player info at the top of the podium
export const PlayerInfo = styled.div`
  position: absolute;
  top: 10px;
  text-align: center;
`;

// Specific styles for the first, second, and third places
export const FirstPlace = styled(PodiumSpot)`
  height: 300px;
  background-color: rgba(255, 255, 255, 0.15);
`;

export const SecondPlace = styled(PodiumSpot)`
  height: 250px;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const ThirdPlace = styled(PodiumSpot)`
  height: 200px;
  background-color: rgba(255, 255, 255, 0.1);
`;

// Player name and score styling
export const PlayerName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const PlayerScore = styled.div`
  font-size: 18px;
  margin-top: 5px;
`;

// Button Container
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
`;

// Button styling
export const ActionButton = styled.button<{ color: string }>`
  background-color: ${(props) => props.color};
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  width: 150px;

  &:hover {
    opacity: 0.9;
  }
`;
