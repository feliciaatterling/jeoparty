"use client";

import React, { useState } from "react";
import Dashboard from "@/components/Dashboard/Dashboard";
import GameCard from "@/components/GameCard/GameCard";
import { HomeWrapper, DashboardWrapper, GameCardWrapper } from "./page.styled";
import GameBoard from "@/components/GameBoard/GameBoard";
import Image from "next/image";

export default function Home() {
  const [question, setQuestion] = useState(false);

  // 2D array to track whether each PointCard is disabled
  const points = [200, 400, 600, 800, 1000];
  const categories = ["History", "Movies", "Art", "Science", "Books", "Music"];
  const [disabledCards, setDisabledCards] = useState<boolean[][]>(
    Array(categories.length).fill(Array(points.length).fill(false))
  );

  // Handle card click to set the question state and disable the clicked card
  const handleQuestionClick = (categoryIndex: number, pointIndex: number) => {
    setQuestion(true);

    // Update the specific card to be disabled
    const updatedDisabledCards = disabledCards.map((row, catIdx) =>
      catIdx === categoryIndex
        ? row.map((disabled, pointIdx) => (pointIdx === pointIndex ? true : disabled))
        : row
    );

    setDisabledCards(updatedDisabledCards);
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
        <Image src="/images/JEOPARTY.png" alt="JeoParty Logo" width={700} height={100} />

        {question ? (
          <GameCard
            question="This person played The Fresh Prince of Bel Air."
            answer="Will Smith"
            category="Movies"
            value={200}
            onBack={handleBackToBoard}
          />
        ) : (
          <GameBoard
            onQuestionClick={handleQuestionClick}
            disabledCards={disabledCards} // Pass disabledCards state to GameBoard
          />
        )}
      </GameCardWrapper>
    </HomeWrapper>
  );
}
