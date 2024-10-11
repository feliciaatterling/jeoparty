"use client";

import React, { useEffect, useState } from "react";
import Podium from "@/components/Podium/Podium"; // Podium component import
import { PageWrapper } from "./page.styled"; // Import the styled PageWrapper component
import { deleteGameData, fetchGameData } from "./utils";
import { useParams, useRouter } from "next/navigation";

// Define the GameData type based on your game structure
interface Team {
  id: number;
  name: string;
  color: string;
  score: number;
}

interface GameData {
  teams: Team[];
  // Other properties related to the game
}

// Utility function to convert HEX color to RGBA
function hexToRgba(hex: string, alpha: number) {
  const [r, g, b] = hex.match(/\w\w/g)!.map((x) => parseInt(x, 16));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Define the ResultsPage component
const ResultsPage: React.FC = () => {
  const { gameId } = useParams() as { gameId: string };
  const router = useRouter(); // Initialize router for navigation
  const [gameData, setGameData] = useState<GameData | null>(null);

  // Function to delete the game data
  async function deleteGame() {
    await deleteGameData(gameId);
  }

  const handlePlayAgain = async () => {
    await deleteGame();
    router.push(`/gamesetup`); // Redirect to game setup page
  };

  const handleExit = async () => {
    await deleteGame();
    router.push(`/`); // Redirect to the homepage
  };

  // Fetch the game data from the database
  useEffect(() => {
    async function fetchData() {
      const data = await fetchGameData(gameId);
      setGameData(data);
    }
    fetchData();
  }, [gameId]);

  // Sort the teams based on their score in descending order
  const sortedTeams = gameData?.teams.slice().sort((a: Team, b: Team) => b.score - a.score);

  // Extract the top 3 teams for the podium
  const players = sortedTeams
    ? sortedTeams.slice(0, 3).map((team: Team) => ({
        name: team.name,
        score: team.score,
        color: team.color,
        rgbaColor: hexToRgba(team.color, 0.5), // Generate transparent version of team color
      }))
    : [];

  return (
    <PageWrapper>
      <Podium
        players={players}
        onPlayAgain={handlePlayAgain}
        onExit={handleExit}
      />
    </PageWrapper>
  );
};

export default ResultsPage;
