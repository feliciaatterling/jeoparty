"use client";
import styled from "styled-components";

const ScWrap = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScContainer = styled.div`
  display: flex;
  width: 70vw;
  height: 85vh;
  background-color: #ffffff10;
  border-radius: 8px;
`;

const ScGameSettings = styled.div`
  padding: 48px;
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const ScTeamSettings = styled(ScGameSettings)`
  width: 40%;
  border-left: 2px solid #ffffff10;
`;

const ScCategoryGrid = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next line */
  gap: 16px;
  row-gap: 16px;
`;

const ScGridItem = styled.div`
  flex: 1 0 calc(33.33%-18px);
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
`;

const ScTeamsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export {
  ScWrap,
  ScContainer,
  ScGameSettings,
  ScTeamSettings,
  ScCategoryGrid,
  ScGridItem,
  ScTeamsContainer,
};
