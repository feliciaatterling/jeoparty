import Spacer from "@/components/Spacer/Spacer";
import {
  ScContainer,
  ScGameSettings,
  ScHeading,
  ScSubHeading,
  ScWrap,
} from "./page.styled";
import { OutlinedInput, InputAdornment } from "@mui/material";

export default function GameSetup() {
  return (
    <ScWrap>
      <ScContainer>
        <ScGameSettings>
          <ScHeading>Jeopardy settings</ScHeading>
          <Spacer size={2} orientation="vertical" />
          <ScSubHeading>Categories</ScSubHeading>
          <OutlinedInput
            id="outlined-adornment-weight"
            startAdornment={<InputAdornment position="start">1</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
          />
        </ScGameSettings>
      </ScContainer>
    </ScWrap>
  );
}
