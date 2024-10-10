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
import Link from "next/link";
import Button from "../Button/Button";
import DashboardProps from "./Dashboard.types";

const Dashboard: React.FC<DashboardProps & { gameId: string }> = ({
  teams,
  currentTurnId,
  gameId,
}) => {
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

        <Link href={`/results/${gameId}`} legacyBehavior>
          <Button variant="danger" label="END GAME" />
        </Link>
      </ButtonGroup>
    </DashboardWrapper>
  );
};

export default Dashboard;
