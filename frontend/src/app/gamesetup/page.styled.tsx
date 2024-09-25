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
  height: 70vh;
  background-color: #ffffff10;
  border-radius: 8px;
`;

const ScGameSettings = styled.div`
  padding: 48px;
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const ScTeamSettings = styled(ScGameSettings)`
  width: 30%;
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

const ScHeading = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  color: white;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 28px;
`;

const ScSubHeading = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  color: white;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 22px;
`;

export {
  ScWrap,
  ScContainer,
  ScHeading,
  ScSubHeading,
  ScGameSettings,
  ScTeamSettings,
  ScCategoryGrid,
  ScGridItem,
};
