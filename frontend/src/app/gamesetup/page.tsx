"use client";
import Spacer from "@/components/Spacer/Spacer";
import {
  ScCategoryGrid,
  ScContainer,
  ScGameSettings,
  ScGridItem,
  ScInfoContainer,
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

const defaultTeamObject = [
  { name: "", color: "#FF5C5C" },  
  { name: "", color: "#43D17D" },  
  { name: "", color: "#4A90E2" }, 
  { name: "", color: "#F7D154" },  
  { name: "", color: "#B45AD5" },  
  { name: "", color: "#2DCED6" },
];

export default function GameSetup() {
  // Info-icon hover state
  const [onHover, setOnHover] = useState(0);

  // Datavalue states
  const [categories, setCategories] = useState<string[]>(Array(6).fill(""));
  const [context, setContext] = useState<string>("");
  const [sliderValue, setSliderValue] = useState<number>(2);
  const [teams, setTeams] = useState<{ name: string; color: string }[]>(defaultTeamObject);

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

  const handleTeamChange = (
    index: number,
    newValue: { name?: string; color?: string }
  ) => {
    setTeams((prevTeams) =>
      prevTeams.map((team, i) =>
        i === index ? { ...team, ...newValue } : team
      )
    );
  };

  return (
    <ScWrap>
      <ScContainer>
        <ScGameSettings>
          <Typography variant="h1">Jeopardy settings</Typography>
          <Spacer size={3} orientation="vertical" />
          <ScInfoContainer>
            <Typography variant="h2">
              Categories
            </Typography>
            <BiInfoCircle
            size={20}
                onMouseEnter={() => setOnHover(1)}
                onMouseLeave={() => setOnHover(0)}
              />
            <div>{onHover === 1 && <InfoText content="You can choose up to 6 categories. You can leave all or some categories empty and our AI will come up with fun categories for you." />}</div>
            </ScInfoContainer>

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
          <ScInfoContainer>
            <Typography variant="h2">
              Context
            </Typography>
            <BiInfoCircle
                size={20}
                onMouseEnter={() => setOnHover(2)}
                onMouseLeave={() => setOnHover(0)}
              />
            <div>{onHover === 2 && <InfoText content="If you give our AI the context of the game occasion it can come up with more fun and relevant questions. For example “Birthday party for my little brother who is turning 8 and loves dinosaurs” or “On a skiing trip with my college friends” or “Family get together, loves movies and music”." />}</div>
            </ScInfoContainer>
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
          <ScInfoContainer>
            <Typography variant="h2">
              Number of teams       
            </Typography>
            <BiInfoCircle
                size={20}
                onMouseEnter={() => setOnHover(3)}
                onMouseLeave={() => setOnHover(0)}
              />
            <div>{onHover === 3 && <InfoText content="Decide how many teams you want to have. You can have at most 6 teams." />}</div>
          </ScInfoContainer>
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
          <ScInfoContainer>
            <Typography variant="h2">
              Team names
            </Typography>
            <BiInfoCircle
                size={20}
                onMouseEnter={() => setOnHover(4)}
                onMouseLeave={() => setOnHover(0)}
              />
            <div>{onHover === 4 && <InfoText content="Come up with a name for each team. You can also pick a color for the team." />}</div>
            </ScInfoContainer>
          <Spacer size={2} orientation="vertical" />
          <ScTeamsContainer>
            {teams.slice(0, sliderValue).map((team, index) => {
              return (
                <TeamNameColorPicker
                  key={index}
                  label={"Team " + (index + 1)}
                  name={team.name}
                  setName={(newName) =>
                    handleTeamChange(index, {name: newName})
                  }
                  color={team.color}
                  setColor={(newColor)=> handleTeamChange(index, {color: newColor})}
                  defaultColors={teams.map((team)=> team.color)}
                />
              );
            })}
          </ScTeamsContainer>
        </ScTeamSettings>
      </ScContainer>
    </ScWrap>
  );
}
