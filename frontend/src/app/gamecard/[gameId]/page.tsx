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

export default function Home() {
  // States for comunnication with backend and database
  const { gameId } = useParams() as { gameId: string }; // used to fetch the correct game model
  const [gameData, setGameData] = useState<GameData | null>(null); // Data fetched from database
  // TODO: Break up gameData for use in components below

  const [question, setQuestion] = useState<{
    _id: string;
    question: string;
    answer: string;
    points: number;
    category: string;
  } | null>(null);

  /* 
  const [disabledCards, setDisabledCards] = useState<boolean[][]>(
    Array(categories.length).fill(Array(points.length).fill(false))
  );
  */

  // 2D array to track which team picked each card
  /* 
  const [cardOwners, setCardOwners] = useState<(string | null)[][]>(
    Array(categories.length).fill(Array(points.length).fill(null))
  );
  */

  // Handle card click to set the question state, disable the clicked card, and assign card owner
  const handleQuestionClick = (questionObject: {
    _id: string;
    question: string;
    answer: string;
    points: number;
    category: string;
  }) => {
    setQuestion(questionObject);

    // Update the specific card to be disabled
    /* 
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
*/

    // setDisabledCards(updatedDisabledCards);
    // setCardOwners(updatedCardOwners);
  };

  const handleBackToBoard = (isCorrect: boolean) => {
    if (gameData && question) {
      const points = isCorrect ? question.points : 0; // Points to be added based on the answer
  
      const updatedTeams = gameData.teams.map((team) => {
        if (team.id === gameData.currentTurnTeamId) {
          return { ...team, score: team.score + points }; // Update score if the team answered correctly
        }
        return team;
      });
      
      // Find the category that contains the question
      const updatedQuestions = gameData.questions.map((category) => {
        // For each category, map through the question cards
        const updatedQuestionCards = category.questionCards.map((qCard) => {
          // If the question matches the selected question, update isAnswered
          if (qCard._id === question._id) {
            return { ...qCard, isAnswered: gameData.currentTurnTeamId };
          }
          return qCard;
        });

        // Return the updated category with the modified question card
        return { ...category, questionCards: updatedQuestionCards };
      });

      // Update the gameData state with the modified questions array
      setGameData({
        ...gameData,
        questions: updatedQuestions,
        teams: updatedTeams, // Update the teams with new scores
        currentTurnTeamId:
          (Number(gameData.currentTurnTeamId) + 1) % gameData.teams.length,
      });
    }

    setQuestion(null); // Close the question modal
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

  console.log(gameData?.teams);
  return (
    <HomeWrapper>
      {/* Left: Dashboard (Sidebar for teams) */}
      <DashboardWrapper>
        {gameData ? (
          <Dashboard
            teams={gameData.teams}
            currentTurnId={gameData.currentTurnTeamId}
          />
        ) : (
          <h1 style={{ color: "white" }}>Loading...</h1>
        )}
      </DashboardWrapper>

      {/* Right: GameCard (Question and answer section) */}
      <GameCardWrapper>
        {gameData ? (
          <Typography variant="h1" align="center">
            {
            gameData.teams.filter((team) => {
              return team.id === gameData.currentTurnTeamId;
            })[0]?.name + "'s turn!"
          }
          </Typography>
        ) : (
          <h1>Loading...</h1>
        )}
        <Spacer size={2} orientation="vertical" />
        {gameData ? (
          question ? (
            // We might want to move the GameCard component into the GameBoard component for easier handling?
            // That way we could send the prop QuestionColumn:
            // {category: string, questions: {points: number, question: string, answer: string, isAnswered: boolean }}[]
            // And clicking a card would trigger the rendering of the correct question
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
