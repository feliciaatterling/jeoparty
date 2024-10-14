import React, { useState } from "react";
import {
  DashboardWrapper,
  TeamsContainer,
  TeamCard,
  TeamName,
  TeamMoney,
  ButtonGroup,
  ButtonScoreContainer,
} from "./Dashboard.styled";
import Logo from "@/components/Logo/Logo";
import Spacer from "../Spacer/Spacer";
import Button from "../Button/Button";
import DashboardProps from "./Dashboard.types";
import ScoreButton from "../ScoreButton/ScoreButton";

const Dashboard: React.FC<DashboardProps> = ({
  teams,
  currentTurnId,
  onScoreChange,
  onEndGame,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditToggle = () => {
    setIsEditMode((prevMode) => !prevMode); // Toggle edit mode
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

            <ButtonScoreContainer>
              {isEditMode && (
                <ScoreButton
                  onClick={() => onScoreChange(team.id, 100)}
                  action="add"
                  teamColor={team.color}
                  isActive={team.id === currentTurnId}
                />
              )}

              {/* Team score */}
              <TeamMoney
                $isActive={team.id === currentTurnId}
                color={team.color}
              >
                ${team.score}
              </TeamMoney>

              {isEditMode && (
                <ScoreButton
                  onClick={() => onScoreChange(team.id, -100)}
                  action="subtract"
                  teamColor={team.color}
                  isActive={team.id === currentTurnId}
                />
              )}
            </ButtonScoreContainer>
          </TeamCard>
        ))}
      </TeamsContainer>

      {/* Button group for game controls */}
      <ButtonGroup>
        <Button
          label={isEditMode ? "DONE EDITING" : "EDIT GAME"}
          onClick={handleEditToggle}
        />

        <Button variant="danger" label="END GAME" onClick={onEndGame} />
      </ButtonGroup>
    </DashboardWrapper>
  );
};

export default Dashboard;
