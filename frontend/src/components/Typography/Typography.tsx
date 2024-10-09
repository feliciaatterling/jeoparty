"use client";

import { ScH1, ScH2, ScH3, ScMeta, ScP } from "./Typography.styled";
import TypographyProps from "./Typography.types";

const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  children,
  color = "white",
  align,
  style, // Accept the style prop
}) => {
  switch (variant) {
    case "h1":
      return (
        <ScH1 style={{ color: color, textAlign: align, ...style }}>
          {children}
        </ScH1>
      );
    case "h2":
      return (
        <ScH2 style={{ color: color, textAlign: align, ...style }}>
          {children}
        </ScH2>
      );
    case "h3":
      return (
        <ScH3 style={{ color: color, textAlign: align, ...style }}>
          {children}
        </ScH3>
      );
    case "meta":
      return (
        <ScMeta style={{ color: color, textAlign: align, ...style }}>
          {children}
        </ScMeta>
      );
    default:
      return (
        <ScP style={{ color: color, textAlign: align, ...style }}>
          {children}
        </ScP>
      );
  }
};

export default Typography;
