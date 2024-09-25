"use client";
import styled from "styled-components";
import { TextField } from "@mui/material";

export const ScInput = styled(TextField)`
  .MuiOutlinedInput-root {
    background-color: #ffffff15; /* Background color for the input root */
  }

  &:hover .MuiOutlinedInput-root {
    fieldset {
      border-color: ${(props) =>
        props.theme.palette.primary.main}; /* Use primary color on hover */
    }
  }

  .MuiInputBase-input {
    color: white; /* Input text color */
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: #ffffff20; /* Input field border color */
  }

  /* Change the label color */
  .MuiInputLabel-root {
    color: white; /* Label text color */
  }

  /* Change label color when input is focused */
  .Mui-focused .MuiInputLabel-root {
    color: ${(props) =>
      props.theme.palette.primary.main}; /* Focused label color */
  }
`;
