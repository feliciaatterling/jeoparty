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
}

// Utility function to convert HEX color to RGBA
function hexToRgba(hex: string, alpha: number) {
  const [r, g, b] = hex.match(/\w\w/g)!.map((x) => parseInt(x, 16));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Function to calculate rankings with ties
function calculateRankings(teams: Team[]) {
  const sortedTeams = teams.slice().sort((a, b) => b.score - a.score);
  const rankings: { team: Team; rank: number }[] = [];
  let currentRank = 1;

  for (let i = 0; i < sortedTeams.length; i++) {
    if (i > 0 && sortedTeams[i].score === sortedTeams[i - 1].score) {
      // Same rank as previous team for a tie
      rankings.push({ team: sortedTeams[i], rank: currentRank });
    } else {
      // New rank for non-tied team
      rankings.push({ team: sortedTeams[i], rank: currentRank });
      currentRank = i + 1 + 1; // Skip rank for ties
    }
  }

  return rankings;
}

// Define the ResultsPage component
const ResultsPage: React.FC = () => {
  const { gameId } = useParams() as { gameId: string };
  const router = useRouter(); // Initialize router for navigation
  const [gameData, setGameData] = useState<GameData | null>(null);

  // Function to delete the game data
  async function deleteGame() {
    console.log('called delete function')
    await deleteGameData(gameId)
  }

  const handlePlayAgain = async () => {
    //await deleteGame();
    router.push(`/gamesetup`); // Redirect to game setup page
  };

  const handleExit = async () => {
    //await deleteGame();
    router.push(`/`); // Redirect to the homepage
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

  // If there's no game data, return early
  if (!gameData) return null;

  // Sort the teams and handle ties using the `calculateRankings` function
  const rankedTeams = calculateRankings(gameData.teams);

  // Extract the top 3 teams for the podium
  const topTeams = rankedTeams
    .slice(0, 3)
    .map((rankedTeam) => ({
      name: rankedTeam.team.name,
      score: rankedTeam.team.score,
      color: rankedTeam.team.color,
      rgbaColor: hexToRgba(rankedTeam.team.color, 0.5), // Generate transparent version of team color
    }));

  return (
    <PageWrapper>
      <Podium
        players={topTeams}
        onPlayAgain={handlePlayAgain}
        onExit={handleExit}
      />
    </PageWrapper>
  );
};

export default ResultsPage;
