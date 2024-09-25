"use client";
import styled from "styled-components";

const SIZES: number[] = [4, 8, 16, 32, 64];

const ScSpacer = styled.div<{
  orientation: "horizontal" | "vertical";
  size: number;
}>`
  width: ${(props) =>
    props.orientation === "horizontal" ? SIZES[props.size] + "px" : 0};
  height: ${(props) =>
    props.orientation === "vertical" ? SIZES[props.size] + "px" : 0};
`;

export default ScSpacer;
