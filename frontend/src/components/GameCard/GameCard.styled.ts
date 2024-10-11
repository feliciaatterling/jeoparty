import styled from "styled-components";

// The container for the GameCard
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
`;

// Tag displaying the category and value
export const ModeTag = styled.h3`
  color: #ccc;
  font-size: 18px;
  margin-bottom: 20px;
`;

// Text for the question
export const QuestionText = styled.h1`
  font-size: 30px;
  line-height: 1.4;
  margin-bottom: 30px;
  text-align: center;
`;

// Text for the answer
export const AnswerText = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
`;

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

// Buttons for if answer is right or wrong
export const AnswerButton = styled.button<{ correct?: boolean }>`
  background-color: ${(props) => (props.correct ? "#4caf50" : "#d64d4d")};
  color: white;
  padding: 12px 32px; /* Increase padding to give more space */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  white-space: nowrap; /* Ensure the text doesn't wrap */
  display: inline-block;
  width: auto; /* Let the width adjust automatically based on the content */
  min-width: 150px; /* Set a minimum width to make sure it's not too small */

  &:hover {
    background-color: ${(props) =>
      props.correct ? "#45a049" : "#c74646"}; /* Hover color change */
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: white;

  &:hover {
    color: red;
  }
`;
