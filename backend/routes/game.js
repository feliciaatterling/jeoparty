const router = require("express").Router();
const mongoose = require("mongoose");
const GameModel = require("../models/game.model.js");
const questions = require("../dummy_data.json");
const { OpenAI } = require("openai");
require("dotenv").config();
const { generateCreativePrompt } = require("../utils/promptGenerator");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: "org-iwb6332LtDeXzETWJ2VaCxUr",
  project: "proj_oT6YCJaH6GeYngHAEXgiiYnA",
});

// Create new game session
router.post("/create", async (req, res) => {
  const teams = req.body.teams; // {name: "name", color: "color"}[] received from frontend UI
  const context = req.body.context; // Context of the game
  const categories = req.body.categories; // Array of 6 categories

  // Format the team data for the database
  const formattedTeams = teams.map((team, i) => {
    return { id: i, name: team.name, color: team.color, score: 0 };
  });

  let previousCategories = []; // To track previous categories and questions

  try {
    // Generate OpenAI question sets for each category
    const categoryPromises = categories.map(async (category) => {
      // Generate the prompt with previous context
      const prompt = generateCreativePrompt(
        context,
        category,
        previousCategories
      );

      try {
        // Call OpenAI API inside the try/catch block
        const response = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
          max_tokens: 500,
          n: 1,
        });

        let content = response.choices[0].message.content;

        // Sanitize the response by removing markdown-like code fences
        content = content.replace(/```json|```/g, "").trim();

        // Parse the JSON response
        const parsedResponse = JSON.parse(content);

        // Add this category to the previousCategories list
        previousCategories.push(parsedResponse);

        return parsedResponse;
      } catch (error) {
        console.error(
          `Error parsing OpenAI response for category "${category}":`,
          error.message
        );
        throw new Error(
          `Failed to parse OpenAI response for category "${category}"`
        );
      }
    });

    // Wait for all categories to finish generating questions
    const openAIQuestions = await Promise.all(categoryPromises);

    // Format the OpenAI-generated questions for the database
    const formattedQuestions = openAIQuestions.map((categoryObj) => {
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

    // Create a new instance of a game in the database
    const newGame = new GameModel({
      categories: req.body.categories,
      context: req.body.context,
      teams: formattedTeams,
      questions: formattedQuestions,
      currentTurnTeamId: formattedTeams[0].id,
      isGameOver: false,
    });

    // Save the game to the database
    const savedGame = await newGame.save();
    res.status(201).json({
      message: "Game created successfully",
      gameId: savedGame._id, // Return the game ID here
      savedGame,
    });
  } catch (error) {
    console.error("Error creating game:", error);
    res
      .status(500)
      .json({ error: "Failed to create game", details: error.message });
  }
});

// get game session by ID
router.get("/:id", async (req, res) => {
  const gameId = req.params.id; // Id from frontend UI

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

  try {
    // Find the game by its ID and update it with new data
    const updatedGame = await GameModel.findByIdAndUpdate(
      gameId,
      {
        $set: updatedData, // Update the fields with the data from req.body
      },
      { new: true } // Return the updated document after modification
    );

    // If the game was not found, send a 404 response
    if (!updatedGame) {
      return res.status(404).json({ error: "Game not found" });
    }

    // Send the updated game data back as the response
    res.status(200).json(updatedGame);
  } catch (error) {
    res.status(500).json({ error: "Failed to update game" });
  }
});

router.put("/delete/:gameId", async (req, res) => {
  const { gameId } = req.params; // Extract game ID from the request parameters

  try {
    const gameToDelete = await GameModel.findByIdAndUpdate(
      gameId,
      { gameFinishedAt: new Date() },
      { new: true }
    );

    // If no game is found, send a 404 error
    if (!gameToDelete) {
      return res.status(404).json({ error: "Game not found" });
    }
    
    res.status(200).json({ 
      message: "Game marked as finished and will be deleted in 1 hour.", 
      gameToDelete 
    });
  } catch (error) {
    // If there's an error, send a 500 status code
    res.status(500).json({ error: "Failed to mark game as finished" });
  }
});


module.exports = router;
