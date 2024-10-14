import styled from "styled-components";

// Shared styles for both question and answer text
const TextBase = styled.h1`
  font-size: clamp(1.5rem, 4vw, 3rem); // Dynamically adjust font size
  line-height: 1.4;
  margin-bottom: 30px;
  text-align: center;
  max-width: 90%; // Limit width to ensure readability
  font-weight: bold;
`;

export const GameCardWrapper = styled.div`
  background-color: #ffffff10;
  border-radius: 8px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 552px;
  position: relative;
  width: calc(100% - 275px);
  margin-left: 250px;
`;

// Tag displaying the category and value
export const ModeTag = styled.h3`
  color: #ccc;
  font-size: 18px;
  margin-bottom: 20px;
`;

// Reuse the same base style for both question and answer text
export const QuestionText = TextBase;
export const AnswerText = TextBase;

// Text for "Did you get the question right?"
export const SmallText = styled.p`
  font-size: 12px;
  color: #ccc;
  margin-bottom: 10px;
  text-align: center;
`;

// The buttons displayed for "Right" and "Wrong" in answer mode
export const AnswerButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 400px;
`;

// Specific styling for the "Show Answer" button
export const ShowAnswerButton = styled.button`
  background-color: #43b3f4; /* Blue for Show Answer */
  color: white;
  padding: 12px 24px; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 18px;

  &:hover {
    background-color: #359fcf; /* Darker blue on hover */
  }
`;

// Buttons for if the answer is right or wrong
export const AnswerButton = styled.button<{ correct?: boolean }>`
  background-color: ${(props) => (props.correct ? "#4caf50" : "#d64d4d")};
  color: white;
  padding: 12px 32px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  white-space: nowrap;
  width: auto;
  min-width: 150px;

  &:hover {
    background-color: ${(props) => (props.correct ? "#45a049" : "#c74646")};
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: white;

  &:hover {
    color: red;
  }
`;
