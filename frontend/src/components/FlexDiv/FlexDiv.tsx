"use client";

import { PropsWithChildren } from "react";
import { ScDiv } from "./FlexDiv.styled";
import FlexDivProps from "./FlexDiv.types";

export default function FlexDiv({
  children,
  direction,
  justifyContent,
  alignItems,
  gap,
  style,
}: PropsWithChildren<FlexDivProps>) {
  return (
    <ScDiv
      style={{
        flexDirection: direction,
        justifyContent: justifyContent,
        alignItems: alignItems,
        gap: gap,
        ...style,
      }}
    >
      {children}
    </ScDiv>
  );
}
