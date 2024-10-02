"use client"

import React from "react";
import Podium from "@/components/Podium/Podium"; // Podium component import
import { PageWrapper } from "./page.styled"; // Import the styled PageWrapper component

// Define the players with their original colors
const players = [
  { name: "Team 6", score: 1800, color: "#F3FF33" }, // Yellow
  { name: "Team 3", score: 2500, color: "#3357FF" }, // Blue
  { name: "Team 2", score: 1500, color: "#33FF57" }, // Green
];

const ResultsPage: React.FC = () => {
  const handlePlayAgain = () => {
    console.log("Play again clicked");
    // Logic to restart the game
  };

  const handleExit = () => {
    console.log("Exit clicked");
    // Logic to exit or redirect to home
  };

  return (
    <PageWrapper>
      <Podium players={players} onPlayAgain={handlePlayAgain} onExit={handleExit} />
    </PageWrapper>
  );
};

export default ResultsPage;
