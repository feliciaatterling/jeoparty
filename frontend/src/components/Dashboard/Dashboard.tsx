import React, { useState } from "react";
import {
  DashboardWrapper,
  TeamsContainer,
  TeamCard,
  TeamName,
  TeamMoney,
  ButtonGroup,
  CrownIcon,
  TeamMoneyContainer,
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

  // Get the team with the highest score
  const highestScore = Math.max(...teams.map((team) => team.score));
  const highestTeam = teams.find((team) => team.score === highestScore);

  const handleEditToggle = () => {
    setIsEditMode((prevMode) => !prevMode);
  };

  return (
    <DashboardWrapper>
      <Logo size="medium" />
      <Spacer size={3} orientation="vertical" />
      <TeamsContainer>
        {teams?.map((team, index) => (
          <TeamCard
            key={index}
            $isActive={team.id === currentTurnId}
            color={team.color}
          >
            {/* Show crown if the team has the highest score */}
            {team === highestTeam && <CrownIcon>👑</CrownIcon>}
            <TeamName $isActive={team.id === currentTurnId} color={team.color}>
              {team.name}
            </TeamName>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <TeamMoneyContainer>
                {isEditMode && (
                  <ScoreButton
                    onClick={() => onScoreChange(team.id, -100)}
                    action="subtract"
                    teamColor={team.color}
                    isActive={team.id === currentTurnId}
                  />
                )}

                <TeamMoney
                  $isActive={team.id === currentTurnId}
                  color={team.color}
                >
                  ${team.score}
                </TeamMoney>

                {isEditMode && (
                  <ScoreButton
                    onClick={() => onScoreChange(team.id, 100)}
                    action="add"
                    teamColor={team.color}
                    isActive={team.id === currentTurnId}
                  />
                )}
              </TeamMoneyContainer>
            </div>
          </TeamCard>
        ))}
      </TeamsContainer>

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
