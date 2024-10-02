import styled, { css } from "styled-components";

export const TeamCardWrapper = styled.div<{ isActive: boolean }>`
  background-color: #f3f3f3;
  padding: 10px;
  margin: 5px 0;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;

  ${(props) =>
    props.isActive &&
    css`
      background-color: #ff6f61;
      color: white;
    `}
`;
