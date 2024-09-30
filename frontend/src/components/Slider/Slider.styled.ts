"use client";
import styled from "styled-components";
import Slider from "@mui/material/Slider";

const ScSlider = styled(Slider)`
  &.MuiSlider-root {
    color: #b45ad5; // Change the color of the track and thumb
  }
`;

const ScSliderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: white;
`;

export { ScSlider, ScSliderContainer };
