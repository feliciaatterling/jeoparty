"use client";
import styled from "styled-components";

const ScWrap = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScContainer = styled.div`
  width: 70vw;
  height: 70vh;
  background-color: #ffffff10;
  padding: 48px;
`;

const ScGameSettings = styled.div`
  display: flex;
  flex-direction: column;
`;

const ScHeading = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  color: white;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 32px;
`;

const ScSubHeading = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  color: white;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 24px;
`;

export { ScWrap, ScContainer, ScHeading, ScSubHeading, ScGameSettings };
