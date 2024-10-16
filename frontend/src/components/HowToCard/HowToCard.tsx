"use client";

import { ScHowToCard } from "./HowToCard.styled";
import Spacer from "../Spacer/Spacer";
import Typography from "../Typography/Typography";
import HowToCardProps from "./HowToCard.types";
import { PropsWithChildren } from "react";

export default function HowToCard({
  label,
  children,
  Icon,
  mobile = false,
}: PropsWithChildren<HowToCardProps>) {
  return (
    <ScHowToCard>
      <Icon size={64} color="white" />
      <Spacer orientation="vertical" size={2} />
      <Typography variant="h2" align="center">
        {label}
      </Typography>
      <Spacer orientation="vertical" size={1} />

      <Typography
        variant="p"
        align="center"
        style={{
          lineHeight: "1.2em",
          fontSize: mobile ? 14 : 16,
          fontWeight: 300,
          color: "#ffffff90",
        }}
      >
        {children}
      </Typography>
    </ScHowToCard>
  );
}
