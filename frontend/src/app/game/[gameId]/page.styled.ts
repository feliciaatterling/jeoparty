import styled from "styled-components";

// Wrapper for the entire home page layout
export const HomeWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  gap: 32px;
  box-sizing: border-box;
`;

// Left section: Dashboard area
export const ScDashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 300px;
  height: 100vh;
  background-color: #ffffff10;
  padding: 32px;
  box-sizing: border-box;
  border-radius: 8px;
  position: relative;
`;

// Right section: GameCard area
export const ScGameCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 32px;
`;

export const ScLoadingContainer = styled.div`
  display: flex;
  width: 50vw;
  height: 55vh;
  background-color: #ffffff10;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 50px rgba(225, 27, 252, 0.4);
  border: 2px solid #ffffff10;
`;
