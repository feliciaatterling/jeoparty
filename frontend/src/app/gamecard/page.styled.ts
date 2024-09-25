import styled from "styled-components";

// Wrapper for the entire home page layout
export const HomeWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

// Left section: Dashboard area
export const DashboardWrapper = styled.div`
  flex: 0 0 300px;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

// Right section: GameCard area
export const GameCardWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
