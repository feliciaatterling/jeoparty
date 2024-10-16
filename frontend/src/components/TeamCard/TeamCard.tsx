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
  teamId, // Include team ID
  onScoreChange, // Function to handle score change
}) => {
  return (
    <TeamCardWrapper isActive={isActive} color={teamColor}>
      {/* Show crown if the team has the highest score */}
      {highestTeam && teamId === highestTeam.id && <CrownIcon>👑</CrownIcon>}
      
      <TeamName isActive={isActive}>{teamName}</TeamName>
      
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
              onClick={() => onScoreChange(teamId, -100)} // Pass both teamId and amount
              action="subtract"
              teamColor={teamColor}
              isActive={isActive}
            />
          )}

          <TeamMoney isActive={isActive}>${score}</TeamMoney>

          {isEditMode && (
            <ScoreButton
              onClick={() => onScoreChange(teamId, 100)} // Pass both teamId and amount
              action="add"
              teamColor={teamColor}
              isActive={isActive}
            />
          )}
        </TeamMoneyContainer>
      </div>
    </TeamCardWrapper>
  );
};

export default TeamCard;
