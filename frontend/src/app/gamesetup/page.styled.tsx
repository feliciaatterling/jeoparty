"use client";
import styled from "styled-components";

// Center content vertically and horizontally
const ScWrap = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Container for the game content
const ScContainer = styled.div`
  display: flex;
  width: 70vw;
  height: 85vh;
  background-color: #ffffff10;
  border-radius: 8px;
`;

// Game settings section (60% width)
const ScGameSettings = styled.div`
  padding: 48px;
  display: flex;
  flex-direction: column;
  width: 60%;
`;

// Team settings section (40% width) with left border
const ScTeamSettings = styled(ScGameSettings)`
  width: 40%;
  border-left: 2px solid #ffffff10;
`;

// Grid layout for categories with flexible wrapping
const ScCategoryGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  row-gap: 16px;
`;

// Each grid item takes up a third of the row
const ScGridItem = styled.div`
  flex: 1 0 calc(33.33%-18px);
  box-sizing: border-box;
`;

// Container for team settings, displayed vertically
const ScTeamsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// Small container for info display
const ScInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  color: white;
`;

export {
  ScWrap,
  ScContainer,
  ScGameSettings,
  ScTeamSettings,
  ScCategoryGrid,
  ScGridItem,
  ScTeamsContainer,
  ScInfoContainer,
};
