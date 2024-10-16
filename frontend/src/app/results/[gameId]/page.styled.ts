import styled from "styled-components";

export const ScPageWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
`;

export const ScBackgroundWrapper = styled.div`
  background-color: #ffffff10;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 100%; /* Expands to full width */
  padding: 64px;
  border-radius: 8px;
  border: 2px solid #ffffff10;
  box-shadow: 0px 0px 50px rgba(225, 27, 252, 0.4);

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
export const ScPodiumSpot = styled.div<{ color: string }>`
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
export const FirstPlace = styled(ScPodiumSpot)`
  height: 300px;

  @media (min-width: 1200px) {
    height: 350px;
  }
`;

export const SecondPlace = styled(ScPodiumSpot)`
  height: 250px;

  @media (min-width: 1200px) {
    height: 300px;
  }
`;

export const ThirdPlace = styled(ScPodiumSpot)`
  height: 200px;

  @media (min-width: 1200px) {
    height: 250px;
  }
`;

export const ScButtonContainer = styled.div`
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
