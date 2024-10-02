import styled from "styled-components";

interface TeamCardProps {
  $isActive?: boolean;
  $color?: string;
}

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff10;
  padding: 32px;
  width: 300px;
  border-radius: 8px;
  height: 100%;
  box-sizing: border-box;
  align-items: center;
`;

export const TeamsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
  width: 100%;
`;

export const TeamCard = styled.div<TeamCardProps>`
  background-color: ${(props) => (props.$isActive ? props.$color : "white")}; // Use team color if active
  color: ${(props) => (props.$isActive ? "white" : props.$color)}; // White text if active, team color if inactive
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  box-sizing: border-box;
  border: ${(props) => (!props.$isActive ? `2px solid ${props.$color}` : "none")}; // Add border for inactive teams
`;


export const TeamName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const TeamMoney = styled.div<TeamCardProps>`
  font-size: 14px;
  color: ${({ $isActive }) => ($isActive ? "white" : "#333")};
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: auto;
  width: 100%;
`;
