import { AnchorHTMLAttributes } from "react";

/*
la till "as-propen" då det tydligen är väldigt användbart när man använder styled components och typescript
"as it allows your button to be rendered as different HTML elements or React components"
*/

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  variant?: "primary" | "secondary" | "danger";
  as?: React.ElementType; // Allow rendering as another element
}

export default ButtonProps;
