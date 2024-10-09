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
      <ScCategory>
        {questions?.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <Typography variant="h3" color="white" align="center">
              {category.category}
            </Typography>
            <ScCard>
              {category.questionCards.map((question, questionIndex) => {
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
                    owner={question.isAnswered}
                    ownerColor={
                      question.isAnswered
                        ? teams.filter(
                            (team) => team.id.toString() === question.isAnswered
                          )[0].color
                        : "red"
                    } // Pass the correct team color
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
