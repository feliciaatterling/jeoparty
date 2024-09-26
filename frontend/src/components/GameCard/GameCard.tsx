import React, { useState } from "react";
import {
  GameCardWrapper,
  QuestionText,
  AnswerText,
  ModeTag,
  AnswerButtonsWrapper,
} from "./GameCard.styled";
import Button from "../Button/Button";
import Spacer from "../Spacer/Spacer";
import Typography from "../Typography/Typography";

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
          <div style={{ width: 200 }}>
            <Button
              label="SHOW ANSWER"
              variant="secondary"
              onClick={handleToggleMode}
            />
          </div>
        </>
      ) : (
        <>
          <AnswerText>Who Is {answer}?</AnswerText>
          <Typography variant="meta">
            Did you get the question right?
          </Typography>
          <Spacer size={1} orientation="vertical" />
          <AnswerButtonsWrapper>
            <Button label="YES" onClick={onBack} variant="primary" />
            <Spacer size={3} orientation="horizontal" />
            <Button label="NO" onClick={onBack} variant="secondary" />
          </AnswerButtonsWrapper>
        </>
      )}
    </GameCardWrapper>
  );
};

export default GameCard;
