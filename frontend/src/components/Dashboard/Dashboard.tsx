import React from "react";
import {
  DashboardWrapper,
  TeamsContainer,
  TeamCard,
  TeamName,
  TeamMoney,
  ButtonGroup,
} from "./Dashboard.styled";
import Logo from "@/components/Logo/Logo";
import Spacer from "../Spacer/Spacer";
import { useRouter } from "next/navigation";
import Button from "../Button/Button";
import DashboardProps from "./Dashboard.types";


const Dashboard: React.FC<DashboardProps> = ({ teams, currentTurnId, gameId }) => {
  const router = useRouter();

  // Define handleEndGame function to redirect to the results page
  const handleEndGame = () => {
    if (gameId) {
      router.push(`/results/${gameId}`); // Redirect to the results page with the gameId
    } else {
      console.error("Game ID is missing.");
    }
  };

  return (
    <DashboardWrapper>
      <Logo size="medium" />
      <Spacer size={3} orientation="vertical" />
      {/* Render team cards */}
      <TeamsContainer>
        {teams?.map((team, index) => (
          <TeamCard
            key={index}
            $isActive={team.id === currentTurnId}
            color={team.color}
          >
            <TeamName $isActive={team.id === currentTurnId} color={team.color}>
              {team.name}
            </TeamName>
            <TeamMoney $isActive={team.id === currentTurnId} color={team.color}>
              ${team.score}
            </TeamMoney>
          </TeamCard>
        ))}
      </TeamsContainer>

      {/* Button group for game controls */}
      <ButtonGroup>
        <Button label="EDIT GAME" />
        <Button
          variant="danger"
          label="END GAME"
          onClick={handleEndGame}
        />
      </ButtonGroup>
    </DashboardWrapper>
  );
};

export default Dashboard;
