"use client";
import React from "react";
import ScPointCard from "./PointCard.styled";
import Typography from "../Typography/Typography";

interface PointCardProps {
  points: number;
  category: string;
  onClick: () => void;
  disabled: boolean;
}

const PointCard: React.FC<PointCardProps> = ({ points, category, onClick, disabled }) => {
  return (
    <ScPointCard onClick={!disabled ? onClick : undefined} disabled={disabled}>
      <Typography variant="p" color={disabled ? "#999" : "white"} align="center">
        ${points}
      </Typography>
    </ScPointCard>
  );
};

export default PointCard;
