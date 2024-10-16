import React from "react";
import {
  TeamCardWrapper,
  TeamName,
  TeamMoney,
  TeamMoneyContainer,
  CrownIcon,
} from "./TeamCard.styled";
import { TeamCardProps } from "./TeamCard.types";
import ScoreButton from "../ScoreButton/ScoreButton";

const TeamCard: React.FC<TeamCardProps> = ({
  teamName,
  score,
  isActive,
  isEditMode,
  teamColor,
  highestTeam,
  teamId,
  onScoreChange,
}) => {
  return (
    <TeamCardWrapper $isActive={isActive} color={teamColor}>
      {/* Show crown if the team has the highest score */}
      {highestTeam && teamId === highestTeam.id && <CrownIcon>👑</CrownIcon>}
      
      <TeamName>{teamName}</TeamName>
      
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
              onClick={() => onScoreChange(teamId, -100)}
              action="subtract"
              teamColor={teamColor}
              isActive={isActive} // Pass isActive here
            />
          )}

          <TeamMoney>${score}</TeamMoney>

          {isEditMode && (
            <ScoreButton
              onClick={() => onScoreChange(teamId, 100)}
              action="add"
              teamColor={teamColor}
              isActive={isActive} // Pass isActive here
            />
          )}
        </TeamMoneyContainer>
      </div>
    </TeamCardWrapper>
  );
};

export default TeamCard;
