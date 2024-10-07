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
      isAnswered: number | null;
    }[];
  }[];
}

const GameBoard: React.FC<GameBoardProps> = ({
  onQuestionClick,
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
                  onClick={() =>
                    onQuestionClick({
                      _id: question._id,
                      question: question.question,
                      answer: question.answer,
                      points: question.points,
                      category: category.category,
                    })
                  }
                  disabled={question.isAnswered ? true : false}
                  owner={question.isAnswered}
                  ownerColor={"red"} // Assign team color
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
