"use client";
import styled from "styled-components";

// Styles for the GameBoard container
export const ScGameBoard = styled.div`
  padding: 32px;
  background-color: #ffffff10;
  border-radius: 8px;
`;

// Styles for category row, ensuring centered text and flexible width
export const ScCategory = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  color: white;
  justify-content: center;
  width: auto;
`;

// Styles for individual cards in a column layout
export const ScCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
