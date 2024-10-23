"use client";

import React, { useState } from "react";
import Dashboard from "@/components/Dashboard/Dashboard";
import GameCard from "@/components/GameCard/GameCard";
import GameOverModal from "@/components/GameOverModal/GameOverModal";
import {
  HomeWrapper,
  ScDashboardWrapper,
  ScGameCardWrapper,
  ScLoadingContainer,
  ScTurnAndSoundContainer,
} from "./page.styled";
import GameBoard from "@/components/GameBoard/GameBoard";
import Typography from "@/components/Typography/Typography";
import Spacer from "@/components/Spacer/Spacer";
import GameData from "./utils.types";
import { updateGameData } from "./utils";
import { useParams } from "next/navigation";
import LoadingBar from "@/components/LoadingBar/LoadingBar";
import { useRouter } from "next/navigation";
import { IoVolumeHighOutline } from "react-icons/io5";
import SoundButton from "@/components/SoundButton/SoundButton";
import useGetGameData from "@/hooks/useGetGameData";
import useMusic from "@/hooks/useMusic";

export default function Home() {
  const { gameId } = useParams() as { gameId: string };
  const { gameData, setGameData, isLoading } = useGetGameData(gameId); // Custom hook for initial fetching of game data with setGameData included
  const { mute, toggleMute } = useMusic(); // Custom hook for controlling game music

  const [question, setQuestion] = useState<{
    _id: string;
    question: string;
    answer: string;
    points: number;
    category: string;
  } | null>(null);

  const [isGameOver, setIsGameOver] = useState(false); // Track if game over modal is shown

  const router = useRouter();

  // Push updated game data to the backend
  async function changeGameData(updatedGamedata: GameData): Promise<void> {
    if (!gameId || !updatedGamedata) {
      console.error("Missing gameId or gameData for updating");
      return;
    }
    await updateGameData(gameId, updatedGamedata);
  }

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
          return { ...team, score: team.score + points };
        }
        return team;
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
          (gameData.currentTurnTeamId + 1) % gameData.teams.length,
      };

      setGameData(updatedGamedata);
      setQuestion(null);
      changeGameData(updatedGamedata);

      // Check if all questions have been answered
      const allAnswered = updatedQuestions.every((category) =>
        category.questionCards.every((qCard) => qCard.isAnswered)
      );

      // If all questions are answered, show the game over modal
      if (allAnswered) {
        setIsGameOver(true);
      }
    }
  };

  // Function to handle closing the question without answering it
  const handleCloseQuestion = () => {
    setQuestion(null);
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
    }
  };

  const handleEndGame = () => {
    if (gameId) {
      router.push(`/results/${gameId}`);
    } else {
      console.error("Game ID is missing.");
    }
  };

  return (
    <HomeWrapper
      style={
        isLoading ? { justifyContent: "center", alignItems: "center" } : {}
      }
    >
      {isLoading ? (
        <ScLoadingContainer>
          <LoadingBar message="Loading your game, please wait!" />
        </ScLoadingContainer>
      ) : (
        <>
          {gameData && (
            <ScDashboardWrapper>
              <Dashboard
                teams={gameData.teams}
                currentTurnId={gameData.currentTurnTeamId}
                onScoreChange={handleScoreChange}
                onEndGame={handleEndGame}
                onSaveChange={() => changeGameData(gameData)}
              />
            </ScDashboardWrapper>
          )}

          <ScGameCardWrapper>
            {gameData && (
              <>
                <ScTurnAndSoundContainer>
                  <IoVolumeHighOutline color="transparent" size={36} />
                  <Typography variant="h1" align="center">
                    {gameData.teams.filter(
                      (team) => team.id === gameData!.currentTurnTeamId
                    )[0]?.name + "'s turn!"}
                  </Typography>
                  <SoundButton mute={mute} onClick={toggleMute} />
                </ScTurnAndSoundContainer>
                <Spacer size={2} orientation="vertical" />
              </>
            )}

            {question ? (
              <GameCard
                question={question.question}
                answer={question.answer}
                category={question.category}
                value={question.points}
                onBack={handleBackToBoard}
                onClose={handleCloseQuestion}
              />
            ) : (
              gameData && (
                <GameBoard
                  onQuestionClick={handleQuestionClick}
                  questions={gameData.questions}
                  teams={gameData.teams}
                />
              )
            )}
          </ScGameCardWrapper>

          {/* Show Game Over modal if the game is over */}
          {isGameOver && <GameOverModal onConfirm={handleEndGame} />}
        </>
      )}
    </HomeWrapper>
  );
}
