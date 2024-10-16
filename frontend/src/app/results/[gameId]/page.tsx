"use client";

import React, { useEffect, useState } from "react";
import Podium from "@/components/Podium/Podium"; // Podium component import
import {
  ScBackgroundWrapper,
  ScButtonContainer,
  ScPageWrapper,
} from "./page.styled"; // Import the styled components
import { deleteGameData, fetchGameData, GameData } from "./utils";
import { useParams, useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
import Logo from "@/components/Logo/Logo";
import Spacer from "@/components/Spacer/Spacer";
import { Team, Player } from "./page.types";
import Scoreboard from "@/components/Scoreboard/Scoreboard";
import Typography from "@/components/Typography/Typography";

// Utility function to convert HEX color to RGBA
function hexToRgba(hex: string, alpha: number) {
  const [r, g, b] = hex.match(/\w\w/g)!.map((x) => parseInt(x, 16));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Function to group players by their scores and convert to Player type
function groupPlayersByScore(
  teams: Team[]
): { score: number; players: Player[] }[] {
  const groupedTeams: { score: number; players: Player[] }[] = [];

  teams.forEach((team) => {
    const rgbaColor = hexToRgba(team.color, 0.5); // Convert color to rgba for podium
    const player: Player = { ...team, rgbaColor };

    const existingGroup = groupedTeams.find(
      (group) => group.score === team.score
    );

    if (existingGroup) {
      existingGroup.players.push(player);
    } else {
      groupedTeams.push({ score: team.score, players: [player] });
    }
  });

  return groupedTeams.sort((a, b) => b.score - a.score); // Sort by descending score
}

// Define the ResultsPage component
const ResultsPage: React.FC = () => {
  const { gameId } = useParams() as { gameId: string };
  const router = useRouter(); // Initialize router for navigation
  const [gameData, setGameData] = useState<GameData | null>(null);
  const [logoSize, setLogoSize] = useState<"small" | "medium" | "large">(
    "medium"
  );

  // Function to delete the game data
  async function deleteGame() {
    await deleteGameData(gameId);
  }

  const handlePlayAgain = async () => {
    await deleteGame();
    router.push(`/gamesetup`);
  };

  const handleExit = async () => {
    await deleteGame();
    router.push(`/`);
  };

  // Fetch the game data from the database
  useEffect(() => {
    async function fetchData() {
      const data = await fetchGameData(gameId);
      setGameData(data);
    }
    fetchData();
    deleteGame();
  }, [gameId]);

  // Update logo size based on window height
  useEffect(() => {
    const updateLogoSize = () => {
      const height = window.innerHeight;
      if (height < 600) {
        setLogoSize("small");
      } else if (height >= 600 && height < 800) {
        setLogoSize("medium");
      } else {
        setLogoSize("large");
      }
    };

    // Set initial size
    updateLogoSize();

    // Add event listener to track window resizing
    window.addEventListener("resize", updateLogoSize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", updateLogoSize);
  }, []);

  // If there's no game data, return early
  if (!gameData) return null;

  // Group the players by score
  const groupedTeams = groupPlayersByScore(gameData.teams);

  // Get the top 3 scores and their players
  const topThreeGroups = groupedTeams.slice(0, 3);

  // Remaining teams to display in the scoreboard
  const remainingGroups = groupedTeams.slice(3);

  return (
    <ScPageWrapper>
      <Spacer orientation="vertical" size={4} />
      {/* Render logo based on the current screen height */}
      <Logo size={logoSize} />
      <Spacer orientation="vertical" size={4} />

      <ScBackgroundWrapper>
        <Typography variant="h1">Results</Typography>
        <Spacer orientation="vertical" size={3} />

        {/* Pass the top 3 score groups to the Podium component */}
        <Podium podiumGroups={topThreeGroups} />

        <Spacer orientation="vertical" size={4} />

        <Scoreboard groups={remainingGroups} />

        <ScButtonContainer>
          <Button
            label="PLAY AGAIN"
            variant="primary"
            onClick={handlePlayAgain}
          />
          <Button label="EXIT" variant="danger" onClick={handleExit} />
        </ScButtonContainer>
      </ScBackgroundWrapper>
    </ScPageWrapper>
  );
};

export default ResultsPage;
