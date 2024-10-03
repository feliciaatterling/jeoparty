import styled from "styled-components";

// Wrapper for the entire home page layout
export const HomeWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  gap: 32px;
`;

// Left section: Dashboard area
export const DashboardWrapper = styled.div`
  height: 100%;
  padding: 32px;
  box-sizing: border-box;
`;

// Right section: GameCard area
export const GameCardWrapper = styled.div`
  width: 100%;
  padding: 32px;
`;
