import React from "react";
import PointCard from "@/components/PointCard/PointCard";
import { ScGameBoard, ScCategory, ScCard } from "./GameBoard.styled";
import Typography from "@/components/Typography/Typography";

interface GameBoardProps {
  onQuestionClick: (categoryIndex: number, pointIndex: number) => void;
  disabledCards: boolean[][];
  cardOwners: (string | null)[][];
  teamColors: { [key: string]: string }; // Maps team names to colors
  questions: {
    category: string;
    questionCards: {
      points: number;
      question: string;
      answer: string;
      isAnswered: boolean;
    }[];
  }[];
}

const GameBoard: React.FC<GameBoardProps> = ({
  onQuestionClick,
  disabledCards,
  cardOwners,
  teamColors,
  questions,
}) => {
  return (
    <ScGameBoard>
      {/* Render each category and its cards */}
      <ScCategory>
        {questions.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <Typography variant="h3" color="white" align="center">
              {category.category}
            </Typography>
            <ScCard>
              {category.questionCards.map((question, questionIndex) => (
                <PointCard
                  key={`${categoryIndex}-${questionIndex}`}
                  points={question.points}
                  category={category.category}
                  onClick={() => onQuestionClick(categoryIndex, questionIndex)}
                  disabled={disabledCards[categoryIndex][questionIndex]}
                  owner={cardOwners[categoryIndex][questionIndex]}
                  ownerColor={
                    teamColors[cardOwners[categoryIndex][questionIndex] || ""]
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
