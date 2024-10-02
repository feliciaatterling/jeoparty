"use client";

import React from "react";
import { ScPrimaryButton, ScSecondaryButton, ScDangerButton } from "./Button.styled";
import ButtonProps from "./Button.types";

// Use React.forwardRef to allow passing refs to the Button component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, as, variant = "primary", ...props }, ref) => {
    switch (variant) {
      case "secondary":
        return (
          <ScSecondaryButton as={as} ref={ref} {...props}>
            {label}
          </ScSecondaryButton>
        );
      case "danger":
        return (
          <ScDangerButton as={as} ref={ref} {...props}>
            {label}
          </ScDangerButton>
        );
      default:
        return (
          <ScPrimaryButton as={as} ref={ref} {...props}>
            {label}
          </ScPrimaryButton>
        );
    }
  }
);

// Set display name to help with debugging
Button.displayName = "Button";

export default Button;
