import styled from "styled-components";
import Typography from "../Typography/Typography";

export const GameCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff10;
  border-radius: 8px;
  color: white;
  width: 920px;
  height: 400px;
  padding: 42px;

  @media (min-width: 1640px) {
    width: 1160px; /* Maximum limit for ultra-wide screens */
    height: 460px;
  }
  @media (min-width: 1920px) {
    width: 1440px; /* Maximum limit for ultra-wide screens */
    height: 500px;
  }
  @media (min-width: 2560px) {
  }
`;

// Reuse the same base style for both question and answer text
export const LargeText = styled(Typography)`
  font-size: 48px;
  line-height: 1.2;

  @media (min-width: 1920px) {
    font-size: 64px;
  }
  @media (min-width: 2560px) {
  }
`;

// The buttons displayed for "Right" and "Wrong" in answer mode
export const AnswerButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ScShowAnswerWrapper = styled.div`
  width: 250px;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: white;

  &:hover {
    color: red;
  }
`;
