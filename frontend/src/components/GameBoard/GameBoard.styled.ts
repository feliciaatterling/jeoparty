import styled from "styled-components";

// Main game board container ensuring content fits
export const ScGameBoard = styled.div`
  padding: 20px;
  background-color: #ffffff10;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;
  box-sizing: border-box;
  min-width: 1024px;
`;

// Wrapper for each category and its respective point cards
export const ScCategoryColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 5px; 
  width: calc(100% / 6 - 10px);  
  min-width: 140px;  
  max-width: 180px;  

  @media (min-width: 1600px) {
    width: calc(100% / 6 - 10px); 
  }
`;

// Category name wrapper ensuring dynamic text adjustment
export const ScCategoryName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px; 
  max-height: 50px;
  text-align: center;
  overflow: hidden;

  h3 {
    font-size: clamp(0.6rem, 1.2vw, 1.5rem); 
    line-height: 1;
    text-align: center;
    display: block;
    white-space: normal; 
    overflow: hidden;
    word-break: break-word;
    max-height: 98%; 
    display: -webkit-box; 
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;


export const ScCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; 
  text-align: center;
  margin-top: 5px; 
`;
