"use client";
import React from "react";
import ScPointCard from "./PointCard.styled";
import PCProps from "./PointCard.types";
import Link from "next/link";

const PointCard: React.FC<PCProps> = ({ points, category }) => {
  return (
    <Link href={"/gameboard"}>
      <ScPointCard onClick={() => console.log(points, category)}>
        ${points}
      </ScPointCard>
    </Link>
  );
};

export default PointCard;
