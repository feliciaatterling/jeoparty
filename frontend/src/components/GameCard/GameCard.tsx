import React, { useState, useEffect } from "react";
import {
  ScGameCardWrapper,
  ScAnswerButtonsWrapper,
  ScCloseButton,
  ScLargeText,
  ScShowAnswerWrapper,
} from "./GameCard.styled";
import Button from "../Button/Button";
import Spacer from "../Spacer/Spacer";
import Typography from "../Typography/Typography";
import TimerButton from "../TimerButton/TimerButton";
import FlexDiv from "../FlexDiv/FlexDiv";

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
    <FlexDiv justifyContent="center">
      <ScGameCardWrapper>
        <FlexDiv
          justifyContent="space-between"
          alignItems="center"
          style={{ width: "100%" }}
        >
          <ScCloseButton style={{ opacity: 0, cursor: "default" }}>
            X
          </ScCloseButton>
          <Typography
            variant="h2"
            color="#ffffff80"
            align="center"
            style={{ fontWeight: 400 }}
          >
            {category} ${value}
          </Typography>
          <ScCloseButton onClick={onClose}>X</ScCloseButton>
        </FlexDiv>

        <Spacer size={4} orientation="vertical" />
        {isQuestionMode ? (
          <>
            <ScLargeText variant="h1" align="center">
              {question}
            </ScLargeText>
            <Spacer size={3} orientation="vertical" />

            <ScShowAnswerWrapper>
              <TimerButton
                duration={30000}
                label="SHOW ANSWER"
                onClick={handleToggleMode}
              />
            </ScShowAnswerWrapper>
            <Spacer orientation="vertical" size={2} />
          </>
        ) : (
          <>
            <ScLargeText variant="h1" align="center">
              {answer}
            </ScLargeText>
            <Spacer size={3} orientation="vertical" />

            <FlexDiv
              direction="column"
              style={{ width: "100%", maxWidth: 400 }}
            >
              <Typography variant="meta" color="#D3D3D3" align="center">
                Did you get the question right?
              </Typography>
              <Spacer size={1} orientation="vertical" />

              <ScAnswerButtonsWrapper>
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
              </ScAnswerButtonsWrapper>
            </FlexDiv>
            <Spacer orientation="vertical" size={2} />
          </>
        )}
      </ScGameCardWrapper>
    </FlexDiv>
  );
};

export default GameCard;
