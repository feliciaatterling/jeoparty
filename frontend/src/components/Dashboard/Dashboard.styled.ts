import styled from "styled-components";

interface TeamCardProps {
  $isActive?: boolean;
  color: string;
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
  width: 100%;
  gap: 7px;
  margin-bottom: 20px;
`;

export const TeamCard = styled.div<{ $isActive?: boolean; color?: string }>`
  border: 2px solid ${({ color }) => color};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, opacity 0.3s ease;
  box-sizing: border-box;
  height: 100%; /* Make sure each card takes up 1 row */
  padding: 8px; /* Reduced padding to fit content */

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
  color: ${(props) => (props.$isActive ? "white" : "white")}; // Use team color for non-active, white for active
`;

export const TeamMoney = styled.div<TeamCardProps>`
  font-size: 16px;
  color: ${(props) => (props.$isActive ? "white" : "white")};
  display: flex;
  justify-content: center;  // Always center horizontally
  align-items: center;      // Always center vertically
  text-align: center;       // Ensure text is centered
  width: auto;              // Allow auto width to keep flexibility
  flex-shrink: 0;           // Prevent shrinking
  padding: 0 8px;           // Add padding for better alignment with buttons
  margin: 0 5px;
`;


export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: auto;
  width: 100%;
  align-items: center;
`;

export const ButtonScoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;  // Small gap between the buttons and the points
  width: 100%;  // Ensure it takes full width for proper centering
  flex-shrink: 0;  // Prevent resizing when buttons are added
  margin-top: 5px;
  position: relative;
`;
