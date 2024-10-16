import styled from "styled-components";
import Typography from "../Typography/Typography";

export const ScGameCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff10;
  border-radius: 8px;
  color: white;
  width: 920px;
  height: 464px;
  padding: 36px 52px;
  box-shadow: 0px 0px 50px rgba(225, 27, 252, 0.4);
  border: 2px solid #ffffff10;

  @media (min-width: 1640px) {
    width: 1160px; /* Maximum limit for ultra-wide screens */
    height: 564px;
  }
  @media (min-width: 1920px) {
    width: 1440px; /* Maximum limit for ultra-wide screens */
    height: 708px;
  }
  @media (min-width: 2560px) {
  }
`;

// Reuse the same base style for both question and answer text
export const ScLargeText = styled(Typography)`
  font-size: 48px;
  line-height: 1.2;

  @media (min-width: 1920px) {
    font-size: 64px;
  }
  @media (min-width: 2560px) {
  }
`;

// The buttons displayed for "Right" and "Wrong" in answer mode
export const ScAnswerButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ScShowAnswerWrapper = styled.div`
  width: 250px;
`;

export const ScCloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: white;

  &:hover {
    color: red;
  }
`;
