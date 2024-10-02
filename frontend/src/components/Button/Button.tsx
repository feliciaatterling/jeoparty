"use client";

import React from "react";
import { ScPrimaryButton, ScSecondaryButton, ScDangerButton } from "./Button.styled";
import ButtonProps from "./Button.types";

// Button component using React.forwardRef to allow refs to be passed to the button
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, as, variant = "primary", ...props }, ref) => {
    switch (variant) {
      case "secondary":
        return (
          // Secondary button with ref and custom props
          <ScSecondaryButton as={as} ref={ref} {...props}>
            {label}
          </ScSecondaryButton>
        );
      case "danger":
        return (
          // Danger button with ref and custom props
          <ScDangerButton as={as} ref={ref} {...props}>
            {label}
          </ScDangerButton>
        );
      default:
        return (
          // Primary button (default) with ref and custom props
          <ScPrimaryButton as={as} ref={ref} {...props}>
            {label}
          </ScPrimaryButton>
        );
    }
  }
);

// Set display name to help with debugging in React DevTools
Button.displayName = "Button";

export default Button;
