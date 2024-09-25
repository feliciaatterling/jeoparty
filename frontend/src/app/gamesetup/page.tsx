"use client";
import Spacer from "@/components/Spacer/Spacer";
import {
  ScCategoryGrid,
  ScContainer,
  ScGameSettings,
  ScGridItem,
  ScHeading,
  ScSubHeading,
  ScTeamsContainer,
  ScTeamSettings,
  ScWrap,
} from "./page.styled";
import Input from "@/components/Input/Input";
import Slider from "@/components/Slider/Slider";
import TeamNameColorPicker from "@/components/TeamNameColorPicker/TeamNameColorPicker";
import { useState } from "react";
import Button from "@/components/Button/Button";

const GRID: number[] = [1, 2, 3, 4, 5, 6];

export default function GameSetup() {
  const [sliderValue, setSliderValue] = useState<number>(2);

  const handleSlider = (newValue: number) => {
    setSliderValue(newValue);
  };

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
          <Spacer size={2} orientation="vertical" />
          <Button label="START GAME" />
        </ScGameSettings>
        <ScTeamSettings>
          <ScHeading>Team settings</ScHeading>
          <Spacer size={2} orientation="vertical" />
          <ScSubHeading>Number of teams</ScSubHeading>
          <Spacer size={1} orientation="vertical" />
          <Slider
            min={1}
            max={6}
            defaultValue={2}
            step={1}
            value={sliderValue}
            setValue={handleSlider}
          />
          <Spacer size={3} orientation="vertical" />
          <ScSubHeading>Team names</ScSubHeading>
          <Spacer size={2} orientation="vertical" />
          <ScTeamsContainer>
            {GRID.slice(0, sliderValue).map((i) => {
              return <TeamNameColorPicker key={i} label={"Team " + i} />;
            })}
          </ScTeamsContainer>
        </ScTeamSettings>
      </ScContainer>
    </ScWrap>
  );
}
