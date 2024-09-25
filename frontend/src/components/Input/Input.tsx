"use client";
import { ScInput } from "./Input.styled";
import React from "react";
import InputProps from "./Input.types";
import { useTheme } from "@mui/material";

const Input: React.FC<InputProps> = ({ label, multiline }) => {
  const theme = useTheme();

  return (
    <ScInput
      label={label}
      theme={theme}
      variant="outlined"
      size="small"
      multiline={multiline ? true : false}
      rows={4}
    />
  );
};

export default Input;
