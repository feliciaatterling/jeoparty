type TypographyVariant = "h1" | "h2" | "h3" | "p" | "meta";

interface TypographyProps {
  variant: TypographyVariant;
  children: React.ReactNode;
  color?: string;
  align?: "left" | "right" | "center";
  style?: React.CSSProperties; // This allows for custom styles
  className?: string;
}

export default TypographyProps;
