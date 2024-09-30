"use client";
import React from "react";
import ButtonProps from "./Button.types";
import {
  ScDangerButton,
  ScPrimaryButton,
  ScSecondaryButton,
} from "./Button.styled";

const Button: React.FC<ButtonProps> = ({
  label,
  as,
  variant = "primary",
  ...props
}) => {
  switch (variant) {
    case "secondary":
      return (
        <ScSecondaryButton as={as} {...props}>
          {label}
        </ScSecondaryButton>
      );
    case "danger":
      return (
        <ScDangerButton as={as} {...props}>
          {label}
        </ScDangerButton>
      );
    default:
      return (
        <ScPrimaryButton as={as} {...props}>
          {label}
        </ScPrimaryButton>
      );
  }
};

export default Button;
