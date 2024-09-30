"use client";
import React from "react";
import ScPointCard from "./PointCard.styled";

interface PointCardProps {
  points: number;
  category: string;
  onClick: () => void;
  disabled: boolean;
}

const PointCard: React.FC<PointCardProps> = ({ points, category, onClick, disabled }) => {
  return (
    <ScPointCard onClick={!disabled ? onClick : undefined} disabled={disabled}>
      ${points}
    </ScPointCard>
  );
};

export default PointCard;
