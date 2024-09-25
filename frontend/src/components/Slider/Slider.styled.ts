"use client";
import styled from "styled-components";
import Slider from "@mui/material/Slider";

const ScSlider = styled(Slider)``;

const ScSliderContainer = styled.div`
  display: flex;
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  font-family: "Roboto";
  align-items: center;
  gap: 16px;
  color: white;
`;

export { ScSlider, ScSliderContainer };
