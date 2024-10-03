"use client";

import React, { useEffect, useState } from "react";
import Dashboard from "@/components/Dashboard/Dashboard";
import GameCard from "@/components/GameCard/GameCard";
import { HomeWrapper, DashboardWrapper, GameCardWrapper } from "./page.styled";
import GameBoard from "@/components/GameBoard/GameBoard";
import Typography from "@/components/Typography/Typography";
import Spacer from "@/components/Spacer/Spacer";
import GameData from "./utils.types";
import { fetchGameData } from "./utils";
import { useParams } from "next/navigation";

// Team colors mapped to team names
const teamColors = {
  "Team 1": "255, 87, 51", // Red
  "Team 2": "51, 255, 87", // Green
  "Team 3": "51, 87, 255", // Blue
  "Team 4": "255, 51, 161", // Pink
  "Team 5": "51, 255, 240", // Cyan
  "Team 6": "243, 255, 51", // Yellow
};

export default function Home() {
  // States for comunnication with backend and database
  const { gameId } = useParams() as { gameId: string }; // used to fetch the correct game model
  const [gameData, setGameData] = useState<GameData | null>(null); // Data fetched from database

  // TODO: Break up gameData for use in components below

  const [question, setQuestion] = useState(false);

  // 2D array to track whether each PointCard is disabled
  const points = [200, 400, 600, 800, 1000];
  const categories = ["History", "Movies", "Art", "Science", "Books", "Music"];

  const [disabledCards, setDisabledCards] = useState<boolean[][]>(
    Array(categories.length).fill(Array(points.length).fill(false))
  );

  // 2D array to track which team picked each card
  const [cardOwners, setCardOwners] = useState<(string | null)[][]>(
    Array(categories.length).fill(Array(points.length).fill(null))
  );

  // Handle card click to set the question state, disable the clicked card, and assign card owner
  const handleQuestionClick = (categoryIndex: number, pointIndex: number) => {
    setQuestion(true);

    // Update the specific card to be disabled
    const updatedDisabledCards = disabledCards.map((row, catIdx) =>
      catIdx === categoryIndex
        ? row.map((disabled, pointIdx) =>
            pointIdx === pointIndex ? true : disabled
          )
        : row
    );

    // Assign the current team to the clicked card (for example, "Team 1")
    const updatedCardOwners = cardOwners.map((row, catIdx) =>
      catIdx === categoryIndex
        ? row.map((owner, pointIdx) =>
            pointIdx === pointIndex ? "Team 1" : owner
          )
        : row
    );

    setDisabledCards(updatedDisabledCards);
    setCardOwners(updatedCardOwners);
  };

  const handleBackToBoard = () => {
    setQuestion(false);
  };

  async function getGameData(): Promise<void> {
    const fetchedGameData: GameData | null = await fetchGameData(gameId);
    if (fetchedGameData) {
      setGameData(fetchedGameData);
    } else {
      console.log("Could not fetch GameData");
    }
  }

  useEffect(() => {
    getGameData();
  }, [gameId]);

  return (
    <HomeWrapper>
      {/* Left: Dashboard (Sidebar for teams) */}
      <DashboardWrapper>
        <Dashboard />
      </DashboardWrapper>

      {/* Right: GameCard (Question and answer section) */}
      <GameCardWrapper>
        <Typography variant="h1" align="center">
          {"Team 1's turn!"}
        </Typography>
        <Spacer size={2} orientation="vertical" />
        {gameData ? (
          question ? (
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
              cardOwners={cardOwners} // Pass cardOwners state to GameBoard
              teamColors={teamColors} // Pass teamColors object to GameBoard
            />
          )
        ) : (
          // Add loading spinner or other animation here
          <h1 style={{ color: "white" }}>Loading...</h1>
        )}
      </GameCardWrapper>
    </HomeWrapper>
  );
}
