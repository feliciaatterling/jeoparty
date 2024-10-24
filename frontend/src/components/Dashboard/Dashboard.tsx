import React, { useState } from "react";
import {
  DashboardWrapper,
  TeamsContainer,
  ButtonGroup,
} from "./Dashboard.styled";
import Logo from "@/components/Logo/Logo";
import Spacer from "../Spacer/Spacer";
import Button from "../Button/Button";
import TeamCard from "../TeamCard/TeamCard";
import DashboardProps from "./Dashboard.types";

const Dashboard: React.FC<DashboardProps> = ({
  teams,
  currentTurnId,
  onScoreChange,
  onEndGame,
  onSaveChange,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);

  // Get the team with the highest score
  const highestScore = Math.max(...teams.map((team) => team.score));
  const highestTeam = teams.find((team) => team.score === highestScore);

  const handleEditToggle = () => {
    setIsEditMode((prevMode) => !prevMode);
  };

  const saveChanges = () => {
    onSaveChange();
    handleEditToggle();
  };
  return (
    <DashboardWrapper>
      <Logo size="small" />
      <Spacer size={3} orientation="vertical" />
      <TeamsContainer>
        {teams?.map((team, index) => (
          <TeamCard
            key={index}
            teamName={team.name}
            score={team.score}
            teamId={team.id}
            teamColor={team.color}
            isActive={team.id === currentTurnId}
            highestTeam={highestTeam}
            isEditMode={isEditMode}
            onScoreChange={onScoreChange}
          />
        ))}
      </TeamsContainer>

      <ButtonGroup>
        {!isEditMode ? (
          <Button label={"EDIT GAME"} onClick={handleEditToggle} />
        ) : (
          <Button label={"SAVE CHANGES"} onClick={saveChanges} />
        )}
        <Button variant="danger" label="END GAME" onClick={onEndGame} />
      </ButtonGroup>
    </DashboardWrapper>
  );
};

export default Dashboard;
