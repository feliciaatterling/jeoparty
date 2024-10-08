"use client";
import Spacer from "@/components/Spacer/Spacer";
import {
  ScCategoryGrid,
  ScContainer,
  ScGameSettings,
  ScGridItem,
  ScInfoContainer,
  ScLoadingContainer,
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
import InfoText from "@/components/InfoText/InfoText";
import { gameSetup } from "./utils.types";
import { createGame } from "./utils";
import { useRouter } from "next/navigation";
import InfoIcon from "@/components/InfoIcon/InfoIcon";
import LoadingBar from "@/components/LoadingBar/LoadingBar";

// Default team settings for the color picker
const defaultTeamObject = [
  { name: "", color: "#FF5C5C" },
  { name: "", color: "#43D17D" },
  { name: "", color: "#4A90E2" },
  { name: "", color: "#F7D154" },
  { name: "", color: "#B45AD5" },
  { name: "", color: "#2DCED6" },
];

export default function GameSetup() {
  const router = useRouter();

  // State for handling hover effect over info icons and loading state
  const [onHover, setOnHover] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // State for category input, context description, slider value, and team details
  const [categories, setCategories] = useState<string[]>(Array(6).fill(""));
  const [context, setContext] = useState<string>("");
  const [sliderValue, setSliderValue] = useState<number>(2);
  const [teams, setTeams] =
    useState<{ name: string; color: string }[]>(defaultTeamObject);
  const [teamNameErrors, setTeamNameErrors] = useState(Array(6).fill(false));

  // Handles slider value changes for number of teams
  const handleSlider = (newValue: number) => {
    setSliderValue(newValue);
  };

  // Handles input changes for both categories and context
  const handleInputChange = (
    newValue: string,
    setValue:
      | React.Dispatch<React.SetStateAction<string[]>>
      | ((newValue: string) => void),
    index?: number,
    inputArray?: string[] // Optional array for handling category inputs
  ) => {
    if (inputArray && index !== undefined) {
      const updatedArray = [...inputArray];
      updatedArray[index] = newValue;
      (setValue as React.Dispatch<React.SetStateAction<string[]>>)(
        updatedArray
      );
    } else {
      (setValue as (newValue: string) => void)(newValue);
    }
  };

  // Handles team name and color changes
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

  // Validation and submission logic
  const validateTeamNames = () => {
    const errors = teams
      .slice(0, sliderValue)
      .map((team) => team.name.trim() === "");
    setTeamNameErrors(errors);
    return errors.every((error) => !error);
  };

  async function handleStartGame() {
    // Validate the team names before starting the game
    if (!validateTeamNames()) {
      return;
    }

    setIsLoading(true);

    try {
      const gameObject: gameSetup = {
        categories: categories,
        context: context,
        teams: teams.filter((team) => team.name !== ""),
      };

      const gameId: string = await createGame(gameObject);
      router.push(`/gamecard/${gameId}`);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  return (
    <ScWrap>
      {isLoading ? (
        <ScLoadingContainer>
          <LoadingBar message="Generating your game, please wait!" />
        </ScLoadingContainer>
      ) : (
        <ScContainer>
          {/* Game settings section */}
          <ScGameSettings>
            <Typography variant="h1">Jeopardy settings</Typography>
            <Spacer size={3} orientation="vertical" />
            <ScInfoContainer>
              <Typography variant="h2">Categories</Typography>
              {/* Info icon with hover effect for categories */}
              <InfoIcon onHoverId={1} onHover={setOnHover} />
              {/* Tooltip with category information */}
              <div>
                {onHover === 1 && (
                  <InfoText content="Choose up to 6 categories. Leave any empty, and our AI will generate them in line with the context." />
                )}
              </div>
            </ScInfoContainer>
            <Spacer size={2} orientation="vertical" />
            {/* Grid for category inputs */}
            <ScCategoryGrid>
              {categories.map((category, index) => {
                return (
                  <ScGridItem key={index}>
                    <Input
                      label={`Category ${index + 1}`}
                      value={categories[index]} // Value from categories array
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
              <Typography variant="h2">Context</Typography>
              {/* Info icon with hover effect for context */}
              <InfoIcon onHoverId={2} onHover={setOnHover} />
              {/* Tooltip with context information */}
              <div>
                {onHover === 2 && (
                  <InfoText content="Provide context for AI-generated questions. For example, describe the occasion." />
                )}
              </div>
            </ScInfoContainer>
            <Spacer size={2} orientation="vertical" />
            {/* Input for context description */}
            <Input
              label="Describe the occasion!"
              multiline
              value={context}
              setValue={(newValue) => handleInputChange(newValue, setContext)}
            />
            <Spacer size={2} orientation="vertical" />
            {/* Start game and exit buttons */}
            <div style={{ display: "flex" }}>
              <Button label="START GAME" onClick={handleStartGame} />
              <Spacer size={3} orientation="horizontal" />
              <Link href="/" legacyBehavior>
                <Button label="EXIT" variant="danger" />
              </Link>
            </div>
          </ScGameSettings>

          {/* Team settings section */}
          <ScTeamSettings>
            <Typography variant="h1">Team settings</Typography>
            <Spacer size={3} orientation="vertical" />
            <ScInfoContainer>
              <Typography variant="h2">Number of teams</Typography>
              {/* Info icon with hover effect for team number */}
              <InfoIcon onHoverId={3} onHover={setOnHover} />
              {/* Tooltip with team number information */}
              <div>
                {onHover === 3 && (
                  <InfoText content="Select the number of teams, up to 6." />
                )}
              </div>
            </ScInfoContainer>
            <Spacer size={1} orientation="vertical" />
            {/* Slider for selecting the number of teams */}
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
              <Typography variant="h2">Team names</Typography>
              {/* Info icon with hover effect for team names */}
              <InfoIcon onHoverId={4} onHover={setOnHover} />
              {/* Tooltip with team name information */}
              <div>
                {onHover === 4 && (
                  <InfoText content="Assign a name and color for each team." />
                )}
              </div>
            </ScInfoContainer>
            <Spacer size={2} orientation="vertical" />
            {/* Inputs for team names and colors */}
            <ScTeamsContainer>
              {teams.slice(0, sliderValue).map((team, index) => {
                return (
                  <TeamNameColorPicker
                    key={index}
                    label={"Team " + (index + 1)}
                    name={team.name}
                    setName={(newName) =>
                      handleTeamChange(index, { name: newName })
                    }
                    color={team.color}
                    setColor={(newColor) =>
                      handleTeamChange(index, { color: newColor })
                    }
                    defaultColors={teams.map((team) => team.color)}
                    error={teamNameErrors[index]}
                  />
                );
              })}
              {teamNameErrors.includes(true) && (
                <Typography variant="meta" color="#ef5350">
                  Please assign all teams a name!
                </Typography>
              )}
            </ScTeamsContainer>
          </ScTeamSettings>
        </ScContainer>
      )}
    </ScWrap>
  );
}
