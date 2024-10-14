import styled from "styled-components";

interface TeamCardProps {
  $isActive?: boolean;
  color: string;
}

export const CrownIcon = styled.div`
  position: absolute;
  top: -19px; 
  left: -15px; 
  font-size: 32px; 
  transform: rotate(-40deg); 
`;

export const DashboardWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #ffffff10;
  padding: 32px;
  width: 300px;
  border-radius: 8px;
  height: 100vh;
  box-sizing: border-box;
  align-items: center;
`;

export const TeamsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);  /* Create 6 equal rows for the team cards */
  width: 100%;
  height: 100%;  /* Ensure the container takes up full height of the parent */
  gap: 8px;
  padding-bottom: 20px;
`;

export const TeamCard = styled.div<{ $isActive?: boolean; color?: string }>`
  border: 2px solid ${({ color }) => color};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.3s ease, opacity 0.3s ease;
  box-sizing: border-box;
  height: 100%;
  padding: 8px;

  ${({ $isActive, color }) =>
    $isActive
      ? `
    box-shadow: 0px 0px 12px ${color};
    transform: scale(1.05);
    background: ${color};
    opacity: 1;
  `
      : `
    opacity: 0.6;
  `}
`;

export const TeamName = styled.div<TeamCardProps>`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (props.$isActive ? "white" : "white")}; 
`;

export const TeamMoney = styled.div<{ $isActive?: boolean; color?: string }>`
  font-size: 16px;
  color: ${(props) => (props.$isActive ? "white" : "white")};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-shrink: 0;
  padding: 0 8px;
  margin: 0 5px;
`;

export const TeamMoneyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  margin-top: 5px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: auto;
  width: 100%;
  align-items: center;
`;

export const ButtonScoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;
  flex-shrink: 0;
  margin-top: 5px;
  position: relative;
`;
