import React from "react";
import ScPointCard from "@/components/PointCard/PointCard.styled";

interface PointCardProps {
  points: number;
  onClick: () => void;
  disabled: boolean;
  owner: number | null; // Add owner prop
  ownerColor?: string; // Optional team color prop
}

const PointCard: React.FC<PointCardProps> = ({
  points,
  onClick,
  disabled,
  owner,
  ownerColor, // Include ownerColor prop
}) => {
  return (
    <ScPointCard
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      $disabled={disabled} // Pass $disabled prop to styled component
      $teamColor={ownerColor} // Pass the team color to styled component
    >
      {disabled ? (
        <span style={{ color: ownerColor || "white" }}>{owner}</span> // Set team name color to the team color
      ) : (
        `$${points}` // Display points when not disabled
      )}
    </ScPointCard>
  );
};

export default PointCard;
