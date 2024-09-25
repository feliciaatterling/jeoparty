"use client"

import React from "react";
import Podium from "@/components/Podium/Podium";
import { PageWrapper } from "./page.styled";

const players = [
  { name: "Team 6", score: 1800 },
  { name: "Team 3", score: 2500 },
  { name: "Team 2", score: 1500 },
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
