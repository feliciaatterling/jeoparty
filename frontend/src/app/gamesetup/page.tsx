import Spacer from "@/components/Spacer/Spacer";
import {
  ScCategoryGrid,
  ScContainer,
  ScGameSettings,
  ScGridItem,
  ScHeading,
  ScSubHeading,
  ScTeamSettings,
  ScWrap,
} from "./page.styled";
import Input from "@/components/Input/Input";

const GRID: number[] = [1, 2, 3, 4, 5, 6];

export default function GameSetup() {
  return (
    <ScWrap>
      <ScContainer>
        <ScGameSettings>
          <ScHeading>Jeopardy settings</ScHeading>
          <Spacer size={3} orientation="vertical" />
          <ScSubHeading>Categories</ScSubHeading>
          <Spacer size={2} orientation="vertical" />
          <ScCategoryGrid>
            {GRID.map((i) => {
              return (
                <ScGridItem key={i}>
                  <Input label={"Category " + i} />
                </ScGridItem>
              );
            })}
          </ScCategoryGrid>
          <Spacer size={3} orientation="vertical" />
          <ScSubHeading>Context</ScSubHeading>
          <Spacer size={2} orientation="vertical" />
          <Input label="Describe the occasion!" multiline />
        </ScGameSettings>
        <ScTeamSettings>
          <ScHeading>Team settings</ScHeading>
        </ScTeamSettings>
      </ScContainer>
    </ScWrap>
  );
}
