"use client";
import React from "react";
import ScPointCard from "./PointCard.styled";
import PCProps from "./PointCard.types";
import Link from "next/link";

interface PointCardProps {
  points: number;
  category: string;
  onClick: () => void; // Function passed from parent to handle clicks
}

const PointCard: React.FC<PointCardProps> = ({ points, category, onClick }) => {
  return <ScPointCard onClick={onClick}>${points}</ScPointCard>;
};

export default PointCard;
