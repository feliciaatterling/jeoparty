import styled from "styled-components";

export const ScGameBoard = styled.div`
  padding: 32px;
  background-color: #ffffff10;
  border-radius: 8px;
`;

export const ScCategory = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  color: white;
  width: auto;
  justify-content: center;

  > div {
    flex: 1; // Allow equal distribution of space
    max-width: 140px; // Set a max width for each category
    overflow: hidden; // Hide overflow text
    text-overflow: ellipsis; // Add ellipsis for overflowing text
    white-space: nowrap; // Prevent wrapping
  }
`;

export const ScCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 140px; // Fixed width for point cards
  text-align: center;
  margin: 5px; // Optional: add some margin
`;
