"use client";
import Spacer from "@/components/Spacer/Spacer";
import {
  ScCategoryGrid,
  ScContainer,
  ScGameSettings,
  ScGridItem,
  ScTeamsContainer,
  ScTeamSettings,
  ScWrap,
} from "./page.styled";
import Input from "@/components/Input/Input";
import Slider from "@/components/Slider/Slider";
import TeamNameColorPicker from "@/components/TeamNameColorPicker/TeamNameColorPicker";
import { useState } from "react";
import Button from "@/components/Button/Button";
import Typography from "@/components/Typography/Typography";
import Link from "next/link";
import { BiInfoCircle } from "react-icons/bi";
import InfoText from "@/components/InfoText/InfoText";

const GRID: number[] = [1, 2, 3, 4, 5, 6];

export default function GameSetup() {
  const [sliderValue, setSliderValue] = useState<number>(2);

  const handleSlider = (newValue: number) => {
    setSliderValue(newValue);
  };

  const [onHover, setOnHover] = useState(0);

  return (
    <ScWrap>
      <ScContainer>
        <ScGameSettings>
          <Typography variant="h1">Jeopardy settings</Typography>
          <Spacer size={3} orientation="vertical" />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="h2">
              Categories
              <BiInfoCircle
                style={{
                  color: "white",
                  marginLeft: "5px",
                }}
                onMouseEnter={() => setOnHover(1)}
                onMouseLeave={() => setOnHover(0)}
              />
            </Typography>
            <div>{onHover === 1 && <InfoText content="Info text" />}</div>
          </div>

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
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="h2">
              Context{" "}
              <BiInfoCircle
                style={{
                  color: "white",
                  marginLeft: "5px",
                }}
                onMouseEnter={() => setOnHover(2)}
                onMouseLeave={() => setOnHover(0)}
              />
            </Typography>
            <div>{onHover === 2 && <InfoText content="Info text" />}</div>
          </div>
          <Spacer size={2} orientation="vertical" />
          <Input label="Describe the occasion!" multiline />
          <Spacer size={2} orientation="vertical" />
          <div style={{ display: "flex" }}>
            <Link href="/gamecard" legacyBehavior>
              <Button label="START GAME" />
            </Link>
            <Spacer size={3} orientation="horizontal" />
            <Link href="/" legacyBehavior>
              <Button label="EXIT" variant="danger" />
            </Link>
          </div>
        </ScGameSettings>
        <ScTeamSettings>
          <Typography variant="h1">Team settings</Typography>
          <Spacer size={2} orientation="vertical" />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="h2">
              Number of teams{" "}
              <BiInfoCircle
                style={{
                  color: "white",
                  marginLeft: "5px",
                }}
                onMouseEnter={() => setOnHover(3)}
                onMouseLeave={() => setOnHover(0)}
              />
            </Typography>
            <div>{onHover === 3 && <InfoText content="Info text" />}</div>
          </div>
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
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="h2">
              Team names{" "}
              <BiInfoCircle
                style={{
                  color: "white",
                  marginLeft: "5px",
                }}
                onMouseEnter={() => setOnHover(4)}
                onMouseLeave={() => setOnHover(0)}
              />
            </Typography>
            <div>{onHover === 4 && <InfoText content="Info text" />}</div>
          </div>
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
