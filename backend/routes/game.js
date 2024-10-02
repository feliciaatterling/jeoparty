const router = require("express").Router();
const mongoose = require ('mongoose')
const GameModel = require("../models/game.model.js");

// Create new game session
router.post('/create', async ( req, res) => {
    const newGame = new GameModel({
        categories: req.body.categories,
        context: req.body.context,
        teams: req.body.teams,
        question: req.body.question,
        currentTurnTeamId: req.body.currentTurnTeamId,
        isGameOver: req.body.isGameOver,
      });

    try {
        const savedGame = await newGame.save();
        res.status(201).json(savedGame);
    } catch (error) {
        res.status(500).json({ error: "Failed to create game" });
    }
    });

    module.exports = router;