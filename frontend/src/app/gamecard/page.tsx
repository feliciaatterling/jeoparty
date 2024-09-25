"use client";

import React, { useState } from "react";
import Dashboard from "@/components/Dashboard/Dashboard";
import GameCard from "@/components/GameCard/GameCard";
import { HomeWrapper, DashboardWrapper, GameCardWrapper } from "./page.styled";
import GameBoard from "@/components/GameBoard/GameBoard";

export default function Home() {
  const [question, setQuestion] = useState(false);

  const handleQuestionClick = () => {
    setQuestion(true);
    console.log("klickat");
  };

  const handleBackToBoard = () => {
    setQuestion(false);
  };

  return (
    <HomeWrapper>
      {/* Left: Dashboard (Sidebar for teams) */}
      <DashboardWrapper>
        <Dashboard />
      </DashboardWrapper>

      {/* Right: GameCard (Question and answer section) */}
      <GameCardWrapper>
        {question ? (
          <GameCard
            question="This person played The Fresh Prince of Bel Air."
            answer="Will Smith"
            category="Movies"
            value={200}
            onBack={handleBackToBoard}
          />
        ) : (
          <GameBoard onQuestionClick={handleQuestionClick}></GameBoard>
        )}
      </GameCardWrapper>
    </HomeWrapper>
  );
}
