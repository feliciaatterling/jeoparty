import React, { useState } from "react";
import {
  GameCardWrapper,
  AnswerButtonsWrapper,
  ModeTag,
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
  // State to track whether we are in question mode or answer mode
  const [isQuestionMode, setIsQuestionMode] = useState(true);

  // Toggle between showing the question and the answer
  const handleToggleMode = () => {
    setIsQuestionMode(!isQuestionMode);
  };

  return (
    <GameCardWrapper>
      {/* Displays the category and value of the question */}
      <ModeTag>
        <Typography variant="h3" color="#D3D3D3" align="center">
          {category} ${value}
        </Typography>
      </ModeTag>
      
      {/* Conditional rendering based on question/answer mode */}
      {isQuestionMode ? (
        <>
          {/* Show the question */}
          <Spacer size={3} orientation="vertical" />
          <Typography variant="h1" align="center">
            {question}
          </Typography>
          <Spacer size={3} orientation="vertical" />

          {/* Button to toggle to answer mode */}
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
          {/* Show the answer */}
          <Spacer size={3} orientation="vertical" />
          <Typography variant="h1" color="white" align="center">
            Who Is {answer}?
          </Typography>
          <Spacer size={3} orientation="vertical" />
          
          {/* Ask if the player got the question right */}
          <Typography variant="meta" color="#D3D3D3" align="center">
            Did you get the question right?
          </Typography>
          <Spacer size={1} orientation="vertical" />
          
          {/* Buttons for Yes/No responses */}
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
