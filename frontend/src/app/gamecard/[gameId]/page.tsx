"use client";

import React, { useEffect, useState } from "react";
import Dashboard from "@/components/Dashboard/Dashboard";
import GameCard from "@/components/GameCard/GameCard";
import { HomeWrapper, DashboardWrapper, GameCardWrapper } from "./page.styled";
import GameBoard from "@/components/GameBoard/GameBoard";
import Typography from "@/components/Typography/Typography";
import Spacer from "@/components/Spacer/Spacer";
import GameData from "./utils.types";
import { fetchGameData, updateGameData } from "./utils";
import { useParams } from "next/navigation";

export default function Home() {
  const { gameId } = useParams() as { gameId: string };
  const [gameData, setGameData] = useState<GameData | null>(null);

  const [question, setQuestion] = useState<{
    _id: string;
    question: string;
    answer: string;
    points: number;
    category: string;
  } | null>(null);

  // Handle card click to set the question state
  const handleQuestionClick = (questionObject: {
    _id: string;
    question: string;
    answer: string;
    points: number;
    category: string;
  }) => {
    setQuestion(questionObject);
  };

  const handleBackToBoard = (isCorrect: boolean) => {
    if (gameData && question) {
      const points = isCorrect ? question.points : 0;

      const updatedTeams = gameData.teams.map((team) => {
        if (team.id === gameData.currentTurnTeamId) {
          return { ...team, score: team.score + points }; // Update score for the current team
        }
        return team; // Return the unchanged team
      });

      // Updating the questions to mark the question as answered
      const updatedQuestions = gameData.questions.map((category) => {
        const updatedQuestionCards = category.questionCards.map((qCard) => {
          // Mark the question as answered
          if (qCard._id === question._id) {
            return {
              ...qCard,
              isAnswered: gameData.currentTurnTeamId.toString(),
            }; // Set the current team ID
          }
          return qCard; // Return unchanged question card
        });
        return { ...category, questionCards: updatedQuestionCards }; // Return updated category
      });

      // Update the gameData with new scores and current turn ID
      const updatedGamedata: GameData = {
        ...gameData,
        questions: updatedQuestions,
        teams: updatedTeams,
        currentTurnTeamId:
          (gameData.currentTurnTeamId + 1) % gameData.teams.length, // Rotate to the next team
      };
      setGameData(updatedGamedata);
      setQuestion(null); // Close the question modal
      changeGameData(updatedGamedata);
    }
  };

  async function getGameData(): Promise<void> {
    const fetchedGameData: GameData | null = await fetchGameData(gameId);
    if (fetchedGameData) {
      setGameData(fetchedGameData);
    } else {
      console.log("Could not fetch GameData");
    }
  }

  async function changeGameData(updatedGamedata: GameData): Promise<void> {
    if (!gameId || !updatedGamedata) {
      console.error("Missing gameId or gameData for updating");
      return;
    }

    updateGameData(gameId, updatedGamedata);
  }

  useEffect(() => {
    getGameData();
  }, [gameId]);

  return (
    <HomeWrapper>
      <DashboardWrapper>
        {gameData ? (
          <Dashboard
            teams={gameData.teams}
            currentTurnId={gameData.currentTurnTeamId}
            gameId={gameId} // Pass gameId to the Dashboard
          />
        ) : (
          <h1 style={{ color: "white" }}>Loading...</h1>
        )}
      </DashboardWrapper>

      <GameCardWrapper>
        {gameData ? (
          <Typography variant="h1" align="center">
            {gameData.teams?.filter(
              (team) => team.id === gameData.currentTurnTeamId
            )[0].name + "'s turn!"}
          </Typography>
        ) : (
          <h1>Loading...</h1>
        )}
        <Spacer size={2} orientation="vertical" />
        {gameData ? (
          question ? (
            <GameCard
              question={question.question}
              answer={question.answer}
              category={question.category}
              value={question.points}
              onBack={handleBackToBoard}
            />
          ) : (
            <GameBoard
              onQuestionClick={handleQuestionClick}
              questions={gameData.questions}
              teams={gameData.teams} // Pass teams for lookup
            />
          )
        ) : (
          <h1 style={{ color: "white" }}>Loading...</h1>
        )}
      </GameCardWrapper>
    </HomeWrapper>
  );
}
