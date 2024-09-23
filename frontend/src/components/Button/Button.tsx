"use client";
import React from "react";
import ScButton from "./Button.styled";
import ButtonProps from "./Button.types";

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <ScButton onClick={() => alert("KLlickad")}>{label}</ScButton>;
};

export default Button;
