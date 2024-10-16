import React from "react";
import ScPointCard from "@/components/PointCard/PointCard.styled";
import FlexDiv from "../FlexDiv/FlexDiv";

interface PointCardProps {
  points: number;
  onClick: () => void;
  disabled: boolean;
  owner: string | null;
  ownerColor: string;
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
      {disabled && owner ? ( // If the card is disabled, show team name
        <FlexDiv justifyContent="center" style={{ color: ownerColor }}>
          {owner} {/* Display team name */}
        </FlexDiv>
      ) : (
        `$${points}` // Otherwise, show the points
      )}
    </ScPointCard>
  );
};

export default PointCard;
