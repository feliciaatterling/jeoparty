import React from "react";
import PointCard from "@/components/PointCard/PointCard";
import { ScGameBoard, ScCategory, ScCard } from "./GameBoard.styled";
import Typography from "@/components/Typography/Typography";

interface GameBoardProps {
  onQuestionClick: (categoryIndex: number, pointIndex: number) => void;
  disabledCards: boolean[][]; // Accept disabledCards as a prop from Home
  cardOwners: string[][]; // Accept cardOwners prop from Home to track which team picked the card
}

const GameBoard: React.FC<GameBoardProps> = ({ onQuestionClick, disabledCards, cardOwners }) => {
  const points = [200, 400, 600, 800, 1000];
  const categories = ["History", "Movies", "Art", "Science", "Books", "Music"];

  return (
    <div>
      <ScGameBoard>
        <ScCategory>
          {categories.map((title, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Remove unnecessary <h3> and use Typography */}
              <Typography variant="h3" color="white" align="center">
                {title}
              </Typography>
              <ScCard>
                {points.map((point, pointIndex) => (
                  <PointCard
                    key={`${categoryIndex}-${pointIndex}`}
                    points={point}
                    category={title}
                    onClick={() => onQuestionClick(categoryIndex, pointIndex)} // Handle click by passing indices
                    disabled={disabledCards[categoryIndex][pointIndex]} // Use the correct disabled state
                  />
                ))}
              </ScCard>
            </div>
          ))}
        </ScCategory>
      </ScGameBoard>
    </div>
  );
};

export default GameBoard;
