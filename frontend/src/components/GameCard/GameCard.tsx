import React, { useState, useEffect } from "react";
import {
  GameCardWrapper,
  AnswerButtonsWrapper,
  CloseButton,
  LargeText,
  ScShowAnswerWrapper,
} from "./GameCard.styled";
import Button from "../Button/Button";
import Spacer from "../Spacer/Spacer";
import Typography from "../Typography/Typography";
import TimerButton from "../TimerButton/TimerButton";

interface GameCardProps {
  question: string;
  answer: string;
  category: string;
  value: number;
  onBack: (isCorrect: boolean) => void;
  onClose: () => void;
}

const GameCard: React.FC<GameCardProps> = ({
  question,
  answer,
  category,
  value,
  onBack,
  onClose,
}) => {
  const [isQuestionMode, setIsQuestionMode] = useState(true);

  const handleToggleMode = () => {
    setIsQuestionMode(!isQuestionMode);
  };

  useEffect(() => {
    const handleEscPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscPress);

    return () => {
      document.removeEventListener("keydown", handleEscPress);
    };
  }, [onClose]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <GameCardWrapper>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <CloseButton style={{ opacity: 0, cursor: "default" }}>X</CloseButton>
          <Typography
            variant="h2"
            color="#ffffff80"
            align="center"
            style={{ fontWeight: 400 }}
          >
            {category} ${value}
          </Typography>
          <CloseButton onClick={onClose}>X</CloseButton>
        </div>

        <Spacer size={4} orientation="vertical" />
        {isQuestionMode ? (
          <>
            <LargeText variant="h1" align="center">
              {question}
            </LargeText>
            <Spacer size={3} orientation="vertical" />

            <ScShowAnswerWrapper>
            <TimerButton
              duration={10000}
              label="SHOW ANSWER" 
              onClick={handleToggleMode}
            />
            </ScShowAnswerWrapper>
            <Spacer orientation="vertical" size={2} />
          </>
        ) : (
          <>
            <LargeText variant="h1" align="center">
              {answer}
            </LargeText>
            <Spacer size={3} orientation="vertical" />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: 400,
              }}
            >
              <Typography variant="meta" color="#D3D3D3" align="center">
                Did you get the question right?
              </Typography>
              <Spacer size={1} orientation="vertical" />

              <AnswerButtonsWrapper>
                <Button
                  label="YES"
                  onClick={() => onBack(true)}
                  variant="primary"
                />
                <Spacer size={3} orientation="horizontal" />
                <Button
                  label="NO"
                  onClick={() => onBack(false)}
                  variant="secondary"
                />
              </AnswerButtonsWrapper>
            </div>
            <Spacer orientation="vertical" size={2} />
          </>
        )}
      </GameCardWrapper>
    </div>
  );
};

export default GameCard;
