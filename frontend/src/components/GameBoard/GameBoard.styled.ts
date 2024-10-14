import styled from "styled-components";

// Main game board container ensuring content fits
export const ScGameBoard = styled.div`
  padding: 20px;
  background-color: #ffffff10;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 100%;
`;

// Wrapper for each category and its respective point cards
export const ScCategoryColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 5px; 
  width: calc(100% / 6 - 10px); 
  min-width: 100px;
  max-width: 140px;

  @media (max-width: 1200px) {
    width: calc(100% / 5 - 10px); 
  }

  @media (max-width: 992px) {
    width: calc(100% / 4 - 10px); 
  }

  @media (max-width: 768px) {
    width: calc(100% / 3 - 10px); 
  }

  @media (max-width: 576px) {
    width: calc(100% / 2 - 10px); 
  }
`;

// Category name wrapper ensuring dynamic text adjustment
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
    font-size: clamp(0.6rem, 1.2vw, 1.5rem); // Dynamic font size based on available width
    line-height: 1.1;
    text-align: center;
    display: block;
    white-space: normal; // Allow text to wrap
    overflow: hidden;
    word-break: break-word; // Break words to avoid overflow
    max-height: 100%; // Ensure the text fits within the available space
    display: -webkit-box; // Ensure it works well in flexbox
    -webkit-line-clamp: 3; // Limit to 3 lines
    -webkit-box-orient: vertical; // Orientation for line clamping
  }
`;


export const ScCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; 
  text-align: center;
  margin-top: 5px; 
`;
