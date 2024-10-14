import React from "react";
import { ScScoreButton } from "./ScoreButton.styled";
import { ScoreButtonProps } from "./ScoreButton.types";

const ScoreButton: React.FC<ScoreButtonProps> = ({
  onClick,
  action,
  teamColor,
  isActive,
}) => {
  return (
    <ScScoreButton onClick={onClick} $teamColor={teamColor} $isActive={isActive}>
      {action === "add" ? "+" : "-"}
    </ScScoreButton>
  );
};

export default ScoreButton;
