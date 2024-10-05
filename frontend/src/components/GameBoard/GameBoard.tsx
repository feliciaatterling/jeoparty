import React from "react";
import PointCard from "@/components/PointCard/PointCard";
import { ScGameBoard, ScCategory, ScCard } from "./GameBoard.styled";
import Typography from "@/components/Typography/Typography";

interface GameBoardProps {
  onQuestionClick: (categoryIndex: number, pointIndex: number) => void;
  disabledCards: boolean[][];
  cardOwners: (string | null)[][];
  teamColors: { [key: string]: string }; // Maps team names to colors
  categories: string[];
}

const GameBoard: React.FC<GameBoardProps> = ({
  onQuestionClick,
  disabledCards,
  cardOwners,
  teamColors,
  categories,
}) => {
  const points = [200, 400, 600, 800, 1000];

  return (
    <ScGameBoard>
      {/* Render each category and its cards */}
      <ScCategory>
        {categories.map((title, categoryIndex) => (
          <div key={categoryIndex}>
            <Typography variant="h3" color="white" align="center">
              {title}
            </Typography>
            <ScCard>
              {points.map((point, pointIndex) => (
                <PointCard
                  key={`${categoryIndex}-${pointIndex}`}
                  points={point}
                  category={title}
                  onClick={() => onQuestionClick(categoryIndex, pointIndex)}
                  disabled={disabledCards[categoryIndex][pointIndex]}
                  owner={cardOwners[categoryIndex][pointIndex]}
                  ownerColor={
                    teamColors[cardOwners[categoryIndex][pointIndex] || ""]
                  } // Assign team color
                />
              ))}
            </ScCard>
          </div>
        ))}
      </ScCategory>
    </ScGameBoard>
  );
};

export default GameBoard;
