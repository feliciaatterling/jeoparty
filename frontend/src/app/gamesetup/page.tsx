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

export default function GameSetup() {
  // Info-icon hover state
  const [onHover, setOnHover] = useState(0);

  // Datavalue states
  const [categories, setCategories] = useState<string[]>(Array(6).fill(""));
  const [context, setContext] = useState<string>("");
  const [sliderValue, setSliderValue] = useState<number>(2);
  const [teamNames, setTeamNames] = useState<string[]>(Array(6).fill(""));

  const handleSlider = (newValue: number) => {
    setSliderValue(newValue);
  };

  const handleInputChange = (
    newValue: string,
    setValue:
      | React.Dispatch<React.SetStateAction<string[]>>
      | ((newValue: string) => void),
    index?: number,
    inputArray?: string[] // Optional array argument
  ) => {
    if (inputArray && index !== undefined) {
      // Type narrowing: We know we're working with a string array
      const updatedArray = [...inputArray];
      updatedArray[index] = newValue;
      (setValue as React.Dispatch<React.SetStateAction<string[]>>)(
        updatedArray
      ); // Set the updated array
    } else {
      // Type narrowing: We're working with a string
      (setValue as (newValue: string) => void)(newValue); // Set the new string value
    }
  };

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
            {categories.map((category, index) => {
              return (
                <ScGridItem key={index}>
                  <Input
                    label={`Category ${index + 1}`}
                    value={categories[index]} // Pass the value from the categories array
                    setValue={(newValue) =>
                      handleInputChange(
                        newValue,
                        setCategories,
                        index,
                        categories
                      )
                    }
                  />
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
          <Input
            label="Describe the occasion!"
            multiline
            value={context}
            setValue={(newValue) => handleInputChange(newValue, setContext)}
          />
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
              Number of teams
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
            {teamNames.slice(0, sliderValue).map((teamName, index) => {
              return (
                <TeamNameColorPicker
                  key={index}
                  label={"Team " + (index + 1)}
                  value={teamName}
                  setValue={(newValue) =>
                    handleInputChange(newValue, setTeamNames, index, teamNames)
                  }
                />
              );
            })}
          </ScTeamsContainer>
        </ScTeamSettings>
      </ScContainer>
    </ScWrap>
  );
}
