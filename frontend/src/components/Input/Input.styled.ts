"use client";
import styled from "styled-components";
import { TextField } from "@mui/material";

export const ScInput = styled(TextField)<{ $error: boolean }>`
  flex: 1 1 auto;

  .MuiOutlinedInput-root {
    background-color: #ffffff15; /* Background color for the input root */

    /* Apply border color based on error state */
    & fieldset {
      border-color: ${(props) => (props.$error ? "#ef5350" : "#ffffff20")};
    }

    /* Keep the red border color when focused, if there's an error */
    &.Mui-focused fieldset {
      border-color: ${(props) =>
        props.$error ? "#ef5350" : props.theme.palette.primary.main};
    }
  }

  &:hover .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${(props) =>
        props.$error
          ? "#ef5350"
          : props.theme.palette.primary
              .main}; /* Use primary color on hover, red if error */
    }
  }

  .MuiInputBase-input {
    color: white; /* Input text color */
    font-size: 14px;
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

  /* Error label color */
  .MuiFormLabel-root.Mui-error {
    color: #ef5350; /* Label color when there is an error */
  }
`;
