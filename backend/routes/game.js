const router = require("express").Router();
const mongoose = require("mongoose");
const GameModel = require("../models/game.model.js");
const questions = require("../dummy_data.json");
const { OpenAI } = require("openai");
require("dotenv").config();

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

  try {
    // Call OpenAI to generate questions for each category
    const categoryPromises = categories.map(async (category) => {
      const prompt = `
        You are generating trivia questions for a game based on the context "${context}".
        Generate 5 trivia questions in the category "${category}" and return them in this JSON format:

        {
          "category": "${category}",
          "questionCards": [
            {
              "points": 200,
              "question": "<Question 1>",
              "answer": "<Answer 1>"
            },
            {
              "points": 400,
              "question": "<Question 2>",
              "answer": "<Answer 2>"
            },
            {
              "points": 600,
              "question": "<Question 3>",
              "answer": "<Answer 3>"
            },
            {
              "points": 800,
              "question": "<Question 4>",
              "answer": "<Answer 4>"
            },
            {
              "points": 1000,
              "question": "<Question 5>",
              "answer": "<Answer 5>"
            }
          ]
        }
      `;

      // Call OpenAI API
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        max_tokens: 500,
        n: 1,
      });

      return JSON.parse(response.choices[0].message.content); // Parse the OpenAI response
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

module.exports = router;
