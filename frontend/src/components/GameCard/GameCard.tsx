import React, { useState, useEffect } from "react";
import {
  GameCardWrapper,
  AnswerButtonsWrapper,
  ModeTag,
  CloseButton,
} from "./GameCard.styled";
import Button from "../Button/Button";
import Spacer from "../Spacer/Spacer";
import Typography from "../Typography/Typography";

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
    // Function to handle "esc" key press
    const handleEscPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // Attach event listener when the component mounts
    document.addEventListener("keydown", handleEscPress);

    // Clean up event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleEscPress);
    };
  }, [onClose]);

  return (
    <GameCardWrapper>
      {/* Use the CloseButton from GameCard.styled.ts */}
      <CloseButton onClick={onClose}>X</CloseButton>

      <ModeTag>
        <Typography variant="meta" color="#D3D3D3" align="center">
          {category} ${value}
        </Typography>
      </ModeTag>

      {isQuestionMode ? (
        <>
          <Spacer size={3} orientation="vertical" />
          <Typography variant="h2" align="center" style={{ fontSize: "3rem" }}>
            {question}
          </Typography>
          <Spacer size={3} orientation="vertical" />

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
          <Spacer size={3} orientation="vertical" />
          <Typography
            variant="h2"
            color="white"
            align="center"
            style={{ fontSize: "4rem" }}
          >
            Who Is {answer}?
          </Typography>
          <Spacer size={3} orientation="vertical" />

          <Typography variant="meta" color="#D3D3D3" align="center">
            Did you get the question right?
          </Typography>
          <Spacer size={1} orientation="vertical" />

          <AnswerButtonsWrapper>
            <Button
              label="YES"
              onClick={() => onBack(true)} // Pass true for correct
              variant="primary"
            />
            <Spacer size={3} orientation="horizontal" />
            <Button
              label="NO"
              onClick={() => onBack(false)} // Pass false for incorrect
              variant="secondary"
            />
          </AnswerButtonsWrapper>
        </>
      )}
    </GameCardWrapper>
  );
};

export default GameCard;
