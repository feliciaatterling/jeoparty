import React from "react";
import PointCard from "@/components/PointCard/PointCard";
import { ScGameBoard, ScCategory, ScCard } from "./GameBoard.styled";
import Typography from "@/components/Typography/Typography";

interface GameBoardProps {
  onQuestionClick: (questionObject: {
    _id: string;
    question: string;
    answer: string;
    points: number;
    category: string;
    cardOwners: (string | null)[][]; 
    teamColors: { [key: string]: string };
  }) => void;
  questions: {
    category: string;
    questionCards: {
      _id: string;
      points: number;
      question: string;
      answer: string;
      isAnswered: number | null;
    }[];
  }[];
  cardOwners: (string | null)[][]; 
  teamColors: { [key: string]: string }; 
  teams: { id: number; name: string; }[]; 
}

const GameBoard: React.FC<GameBoardProps> = ({
  onQuestionClick,
  questions,
  cardOwners,
  teamColors,
  teams,
}) => {
  return (
    <ScGameBoard>
      <ScCategory>
        {questions.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <Typography variant="h3" color="white" align="center">
              {category.category}
            </Typography>
            <ScCard>
              {category.questionCards.map((question, questionIndex) => {
                const ownerName = question.isAnswered 
                  ? teams.find(team => team.id === question.isAnswered)?.name || null 
                  : null;

                const ownerColor = ownerName ? teamColors[ownerName] : "transparent"; // Get the correct team color

                return (
                  <PointCard
                    key={`${categoryIndex}-${questionIndex}`}
                    points={question.points}
                    onClick={() =>
                      onQuestionClick({
                        _id: question._id,
                        question: question.question,
                        answer: question.answer,
                        points: question.points,
                        category: category.category,
                        cardOwners,
                        teamColors,
                      })
                    }
                    disabled={!!question.isAnswered} // Check if question is answered
                    owner={ownerName}
                    ownerColor={ownerColor} // Pass the correct team color
                  />
                );
              })}
            </ScCard>
          </div>
        ))}
      </ScCategory>
    </ScGameBoard>
  );
};

export default GameBoard;
