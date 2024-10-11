"use client";

import { PropagateLoader } from "react-spinners";
import Typography from "../Typography/Typography";
import { ScContainer, ScLoadingBarContainer } from "./LoadingBar.styled";
import Spacer from "../Spacer/Spacer";
import LoadingBarProps from "./LoadingBar.types";

export default function LoadingBar({ message }: LoadingBarProps) {
  return (
    <ScContainer>
      <ScLoadingBarContainer>
        <PropagateLoader
          size={15}
          color="#b45ad5"
          speedMultiplier={0.75}
          cssOverride={{ height: 15, paddingRight: 15 }}
        />
      </ScLoadingBarContainer>
      <Spacer orientation="vertical" size={2} />
      <Typography variant="p">{message}</Typography>
    </ScContainer>
  );
}
