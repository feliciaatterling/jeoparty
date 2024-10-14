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
import { useParams, useRouter } from "next/navigation"; // Added useRouter for redirection

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

  const router = useRouter(); // Use router for navigation

  // Fetch game data from the backend
  async function getGameData(): Promise<void> {
    const fetchedGameData: GameData | null = await fetchGameData(gameId);
    if (fetchedGameData) {
      setGameData(fetchedGameData);
    } else {
      console.log("Could not fetch GameData");
    }
  }

  // Push updated game data to the backend
  async function changeGameData(updatedGamedata: GameData): Promise<void> {
    if (!gameId || !updatedGamedata) {
      console.error("Missing gameId or gameData for updating");
      return;
    }
    await updateGameData(gameId, updatedGamedata);
  }

  useEffect(() => {
    getGameData();
  }, [gameId]);

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

  // Handle logic for moving back to the board and updating the score
  const handleBackToBoard = (isCorrect: boolean) => {
    if (gameData && question) {
      const points = isCorrect ? question.points : 0;

      const updatedTeams = gameData.teams.map((team) => {
        if (team.id === gameData.currentTurnTeamId) {
          return { ...team, score: team.score + points }; // Update score for the current team
        }
        return team; // Return unchanged team
      });

      const updatedQuestions = gameData.questions.map((category) => {
        const updatedQuestionCards = category.questionCards.map((qCard) => {
          if (qCard._id === question._id) {
            return {
              ...qCard,
              isAnswered: gameData.currentTurnTeamId.toString(),
            };
          }
          return qCard;
        });
        return { ...category, questionCards: updatedQuestionCards };
      });

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

  // Function to handle closing the question without answering it
  const handleCloseQuestion = () => {
    setQuestion(null); // Reset the question state, closing the GameCard
  };

  // Handler to adjust team scores from the dashboard
  const handleScoreChange = (teamId: number, amount: number) => {
    if (gameData) {
      const updatedTeams = gameData.teams.map((team) => {
        if (team.id === teamId) {
          return { ...team, score: team.score + amount };
        }
        return team;
      });

      const updatedGamedata = { ...gameData, teams: updatedTeams };
      setGameData(updatedGamedata);
      changeGameData(updatedGamedata); // Update the backend
    }
  };

  return (
    <HomeWrapper>
      <DashboardWrapper>
        {gameData ? (
          <Dashboard
            teams={gameData.teams}
            currentTurnId={gameData.currentTurnTeamId}
            gameId={gameId} // Pass gameId to the Dashboard
            onScoreChange={handleScoreChange} // Pass the score change handler
          />
        ) : (
          <h1 style={{ color: "white" }}>Loading...</h1>
        )}
      </DashboardWrapper>

      <GameCardWrapper>
        {gameData ? (
          <>
            <Typography variant="h1" align="center">
              {gameData.teams?.filter(
                (team) => team.id === gameData.currentTurnTeamId
              )[0]?.name + "'s turn!"}
            </Typography>
            <Spacer size={2} orientation="vertical" />
          </>
        ) : (
          <h1>Loading...</h1>
        )}
        {gameData ? (
          question ? (
            <GameCard
              question={question.question}
              answer={question.answer}
              category={question.category}
              value={question.points}
              onBack={handleBackToBoard}
              onClose={handleCloseQuestion} // Pass the handleCloseQuestion function
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
