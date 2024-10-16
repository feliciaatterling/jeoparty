import styled from "styled-components";

// Main game board container ensuring content fits
export const ScGameBoard = styled.div`
  padding: 24px 42px;
  background-color: #ffffff10;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (min-width: 1920px) {
    gap: 24px;
  }
  @media (min-width: 2560px) {
  }
`;

// Wrapper for each category and its respective point cards
export const ScCategoryColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 140px;

  @media (min-width: 1640px) {
    width: 180px;
  }
  @media (min-width: 1920px) {
    width: 220px; 
    gap: 12px;
  }
  @media (min-width: 2560px) {
  }
`;

export const ScCategoryName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  max-height: 50px;
  text-align: center;
  overflow: hidden;

  h3 {
    font-size: 18px;
    line-height: 1.2; 
    text-align: center;
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis; 
    word-break: break-word;
    max-width: 100%; 

    @media (min-width: 1920px) {
      font-size: 24px;
    }
    @media (min-width: 2560px) {
    }
  }
`;


export const ScCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  gap: 16px;

  @media (min-width: 1920px) {
    gap: 24px;
  }
  @media (min-width: 2560px) {
  }
`;
