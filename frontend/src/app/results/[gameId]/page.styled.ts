import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
`;

export const BackgroundWrapper = styled.div`
  background-color: #ffffff10;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  width: 100%;
  max-width: 100%; /* Expands to full width */
  padding: 30px;
  border-radius: 8px;

  @media (min-width: 1200px) {
    max-width: 1200px;
  }

  @media (min-width: 1440px) {
    max-width: 1400px;
  }

  @media (min-width: 1920px) {
    max-width: 1600px;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 20px;
  }
`;

// Styling for the podium positions
export const PodiumSpot = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 150px; /* Default size for smaller screens */
  height: 250px;
  position: relative;

  @media (min-width: 1200px) {
    width: 200px;
    height: 300px; /* Larger size for bigger screens */
  }
`;

// Specific podium styles for first, second, and third place
export const FirstPlace = styled(PodiumSpot)`
  height: 300px;

  @media (min-width: 1200px) {
    height: 350px;
  }
`;

export const SecondPlace = styled(PodiumSpot)`
  height: 250px;

  @media (min-width: 1200px) {
    height: 300px;
  }
`;

export const ThirdPlace = styled(PodiumSpot)`
  height: 200px;

  @media (min-width: 1200px) {
    height: 250px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  padding: 0 20px;
  box-sizing: border-box;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 80%;
    gap: 15px;
  }
`;

export const Scoreboard = styled.div`
  width: 80%;
  margin-top: 20px;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    width: 100%; /* Full width on smaller screens */
  }
`;

export const ScoreboardItem = styled.div<{ color: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ color }) => color};
  padding: 10px;
  border-radius: 8px;
  font-size: 16px;
  color: white;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ScoreboardTeamName = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ScoreboardTeamScore = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

