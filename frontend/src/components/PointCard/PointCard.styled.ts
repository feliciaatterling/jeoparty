import styled from "styled-components";

const ScPointCard = styled.button<{ $taken?: boolean }>`
  padding: 26px 34px;
  background: rgb(60, 202, 231);
  background: linear-gradient(
    180deg,
    rgba(60, 202, 231, 1) 10%,
    rgba(225, 27, 252, 1) 100%
  );
  margin: 10px;
  border-radius: 3px;
  color: white;
  border: none;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    background-color: blue;
  }
`;

export default ScPointCard;
