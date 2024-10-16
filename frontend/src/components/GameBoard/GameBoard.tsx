import React from "react";
import PointCard from "@/components/PointCard/PointCard";
import {
  ScGameBoard,
  ScCategoryName,
  ScCategoryColumn,
  ScCard,
} from "./GameBoard.styled";
import Typography from "@/components/Typography/Typography";
import FlexDiv from "../FlexDiv/FlexDiv";
import GameBoardProps from "./GameBoard.types";

const GameBoard: React.FC<GameBoardProps> = ({
  onQuestionClick,
  questions,
  teams,
}) => {
  return (
    <FlexDiv justifyContent="center">
      <ScGameBoard>
        {questions?.map((category, categoryIndex) => (
          <ScCategoryColumn key={categoryIndex}>
            {/* Category Name */}
            <ScCategoryName>
              <Typography variant="h3" color="white" align="center">
                {category.category}
              </Typography>
            </ScCategoryName>

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
    </FlexDiv>
  );
};

export default GameBoard;
