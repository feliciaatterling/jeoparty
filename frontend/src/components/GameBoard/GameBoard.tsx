import React from "react";
import PointCard from "@/components/PointCard/PointCard";
import { ScGameBoard, ScCategoryName, ScCategoryColumn, ScCard } from "./GameBoard.styled";
import Typography from "@/components/Typography/Typography";

interface GameBoardProps {
  onQuestionClick: (questionObject: {
    _id: string;
    question: string;
    answer: string;
    points: number;
    category: string;
  }) => void;
  questions: {
    category: string;
    questionCards: {
      _id: string;
      points: number;
      question: string;
      answer: string;
      isAnswered: string | null; 
    }[];
  }[];
  teams: { id: number; name: string; color: string; score: number }[];
}

const GameBoard: React.FC<GameBoardProps> = ({
  onQuestionClick,
  questions,
  teams,
}) => {
  return (
    <ScGameBoard>
      {questions?.map((category, categoryIndex) => (
        <ScCategoryColumn key={categoryIndex}>
          {/* Category Name */}
          <ScCategoryName>
            <Typography variant="h3" color="white" align="center">
              {category.category}
            </Typography>
          </ScCategoryName>

          {/* Points for the category */}
          <ScCard>
            {category.questionCards.map((question, questionIndex) => {
              const team = teams.find(
                (team) => team.id.toString() === question.isAnswered
              );
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
                    })
                  }
                  disabled={!!question.isAnswered} // Check if question is answered
                  owner={team ? team.name : null}
                  ownerColor={team ? team.color : "red"} // Pass the correct team color
                />
              );
            })}
          </ScCard>
        </ScCategoryColumn>
      ))}
    </ScGameBoard>
  );
};

export default GameBoard;
