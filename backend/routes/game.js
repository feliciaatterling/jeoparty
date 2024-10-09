const router = require("express").Router();
const mongoose = require("mongoose");
const GameModel = require("../models/game.model.js");
const questions = require("../dummy_data.json");
console.log("Questions data: ", questions);

// Create new game session
router.post("/create", async (req, res) => {
  const teams = req.body.teams; // {name: "name", color: "color"}[] recieved from frontend UI

  // Formats the team data for database
  const formattedTeams = teams.map((team, i) => {
    return { id: i, name: team.name, color: team.color, score: 0 };
  });

  // Formats the question data for database
  const formattedQuestions = questions.Questions?.map((categoryObj) => {
    return {
      category: categoryObj.category,
      questionCards: categoryObj.questionCards?.map((question, i) => {
        return {
          id: i,
          points: question.points,
          question: question.question,
          answer: question.answer,
          isAnswered: null,
        };
      }),
    };
  });

  // Creates new instance of a game in db
  const newGame = new GameModel({
    categories: req.body.categories,
    context: req.body.context,
    teams: formattedTeams,
    questions: formattedQuestions,
    currentTurnTeamId: formattedTeams[0].id,
    isGameOver: false,
  });

  try {
    // Saves the data to the database
    const savedGame = await newGame.save();
    res.status(201).json({
      message: "Game created successfully",
      gameId: savedGame._id, // Return the game ID here
      savedGame,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create game" });
  }
});

// get game session by ID
router.get("/:id", async (req, res) => {
  const gameId = req.params.id; // Id from frontend UI
  console.log(gameId)

  try {
    // Fetch the game by its MongoDB-generated ID
    const game = await GameModel.findById(gameId);

    // If the game doesn't exist, return a 404 response
    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }

    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch game" });
  }
});

// update game data by ID
router.put("/update/:gameId", async (req, res) => {
  const { gameId } = req.params; // Extract game ID from the request parameters
  const updatedData = req.body; // Data sent from the frontend to update the game

  console.log(updatedData);

  try {
    // Find the game by its ID and update it with new data
    const updatedGame = await GameModel.findByIdAndUpdate(
      gameId,
      { 
        $set: updatedData // Update the fields with the data from req.body
      },
      { new: true } // Return the updated document after modification
    );

    // If the game was not found, send a 404 response
    if (!updatedGame) {
      return res.status(404).json({ error: "Game not found" });
    }

    // Send the updated game data back as the response
    res.status(200).json({
      message: "Game updated successfully",
      updatedGame
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to update game" });
  }
});

module.exports = router;
