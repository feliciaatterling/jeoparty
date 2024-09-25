import React from "react";
import { TeamCardWrapper } from "./TeamCard.styled";
import { TeamCardProps } from "./TeamCard.types";

const TeamCard: React.FC<TeamCardProps> = ({ teamName, score, isActive }) => {
  return (
    <TeamCardWrapper isActive={isActive}>
      <div>{teamName}</div>
      <div>${score}</div>
    </TeamCardWrapper>
  );
};

export default TeamCard;
