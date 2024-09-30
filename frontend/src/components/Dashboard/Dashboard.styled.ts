import styled from "styled-components";

interface TeamCardProps {
  isActive?: boolean;
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
  gap: 10px;
  width: 100%;
`;

export const TeamCard = styled.div<TeamCardProps>`
  background-color: ${(props) => (props.isActive ? "#ef5350" : "white")};
  color: ${(props) => (props.isActive ? "white" : "black")};
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  box-sizing: border-box;
`;

export const TeamName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const TeamMoney = styled.div<TeamCardProps>`
  /* Add TeamCardProps type here */
  font-size: 14px;
  color: ${(props) =>
    props.isActive ? "white" : "#333"}; /* Use the isActive prop */
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: auto;
  width: 100%;
`;
