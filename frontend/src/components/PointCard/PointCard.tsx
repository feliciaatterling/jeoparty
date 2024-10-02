import React from "react";
import ScPointCard from "@/components/PointCard/PointCard.styled";
import Typography from "@/components/Typography/Typography";

interface PointCardProps {
  points: number;
  category: string;
  onClick: () => void;
  disabled: boolean;
  owner: string | null; // Owner can be string or null
  ownerColor: string;    // Owner color to be passed from the GameBoard
}

const PointCard: React.FC<PointCardProps> = ({ points, category, onClick, disabled, owner, ownerColor }) => {
  return (
    <ScPointCard
      $disabled={disabled}
      $teamColor={ownerColor} // Pass ownerColor to styled component
      onClick={!disabled ? onClick : undefined} // Only allow clicks if not disabled
    >
      {disabled && owner ? (
        <Typography variant="p" color={`rgba(${ownerColor}, 0.9)`}>
          {owner}
        </Typography>
      ) : (
        `$${points}`
      )}
    </ScPointCard>
  );
};

export default PointCard;
