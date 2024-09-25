"use client";
import React from "react";
import ScButton from "./Button.styled";
import ButtonProps from "./Button.types";

/*
const Button: React.FC<ButtonProps> = ({ label }) => {
  return <ScButton onClick={() => alert("Klickad")}>{label}</ScButton>;
};
*/

const Button: React.FC<ButtonProps> = ({ label, as, ...props }) => {
  return (
    <ScButton as={as} {...props}>
      {label}
    </ScButton>
  );
};
export default Button;
