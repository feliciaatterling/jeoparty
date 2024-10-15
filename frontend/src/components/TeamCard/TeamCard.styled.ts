import styled, { css } from "styled-components";

// Wrapper for each team card
export const TeamCardWrapper = styled.div<{ isActive: boolean; color: string }>`
  background-color: ${({ isActive, color }) =>
    isActive ? color : "transparent"};
  padding: 8px;
  margin: 5px 0;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  border: 2px solid ${({ isActive, color }) => (isActive ? "transparent" : color)};
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
  position: relative;

  ${(props) =>
    props.isActive
      ? css`
          box-shadow: 0px 0px 12px ${props.color};
          transform: scale(1.05); /* Make the active card slightly larger */
          color: white; /* Ensure text is white for active cards */
        `
      : css`
          opacity: 0.6; /* Transparent for non-active */
          color: white; /* White text for non-active cards */
        `}
`;

// Team name styling
export const TeamName = styled.div<{ isActive: boolean }>`
  font-size: 16px;
  font-weight: bold;
  color: white; /* Always white text */
  margin-bottom: 5px;
`;

// Money/Score styling
export const TeamMoney = styled.div<{ isActive: boolean }>`
  font-size: 16px;
  color: white; /* Always white text */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-shrink: 0;
  padding: 0 8px;
  margin: 0 5px;
`;

// Container for money and score buttons
export const TeamMoneyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  margin-top: 5px;
`;

// Crown icon styling
export const CrownIcon = styled.div`
  position: absolute;
  top: -19px; 
  left: -15px; 
  font-size: 32px; 
  transform: rotate(-40deg); 
  z-index: 10;
`;
