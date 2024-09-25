import React, { useState } from "react";
import {
  GameCardWrapper,
  QuestionText,
  AnswerText,
  ModeTag,
  AnswerButtonsWrapper,
  AnswerButton,
  SmallText,
  ShowAnswerButton,
} from "./GameCard.styled";

interface GameCardProps {
  question: string;
  answer: string;
  category: string;
  value: number;
  onBack: () => void;
}

const GameCard: React.FC<GameCardProps> = ({
  question,
  answer,
  category,
  value,
  onBack,
}) => {
  const [isQuestionMode, setIsQuestionMode] = useState(true);

  const handleToggleMode = () => {
    setIsQuestionMode(!isQuestionMode);
  };

  return (
    <GameCardWrapper>
      <ModeTag>
        {category} ${value}
      </ModeTag>
      {isQuestionMode ? (
        <>
          <QuestionText>{question}</QuestionText>
          <ShowAnswerButton onClick={handleToggleMode}>
            SHOW ANSWER
          </ShowAnswerButton>
        </>
      ) : (
        <>
          <AnswerText>Who Is {answer}?</AnswerText>
          <SmallText>Did you get the question right?</SmallText>
          <AnswerButtonsWrapper>
            <AnswerButton correct onClick={onBack}>
              Yes
            </AnswerButton>
            <AnswerButton onClick={onBack}>No</AnswerButton>
          </AnswerButtonsWrapper>
        </>
      )}
    </GameCardWrapper>
  );
};

export default GameCard;
