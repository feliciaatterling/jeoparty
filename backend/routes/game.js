const router = require("express").Router();
const mongoose = require ('mongoose')
const GameModel = require("../models/game.model.js");
const questions = require("../dummy_data.json")
console.log("Questions data: ", questions);

// Create new game session
router.post('/create', async ( req, res) => {
    const teams = req.body.teams // {name: "name", color: "color"}[]
    const formattedTeams = teams.map((team, i)=> {
        return {id:i, name: team.name, color: team.color, score:0}
    })
    /*const formattedQuestions = questions.Jeopardy.map((categories) => {
        return {category: categories.category, questions: categories.questions.map((question, i)=> {
                return {id: i, points: question.points, question: question.question, answer: question.answer, isAnswered: false}
        })}
    })*/

    const formattedQuestions = questions.Questions?.map((categoryObj) => {
        return {
            category: categoryObj.category, 
            questionCards: categoryObj.questionCards?.map((question, i) => {
                return {
                    id: i,
                    points: question.points,
                    question: question.question,
                    answer: question.answer,
                    isAnswered: false
                };
            })
        };
    });
        


    /*
    questions: [{
        category: String,
        questionCard: [{
            points: Number,
            question: String,
            answer: String,
            isAnswered: Boolean,
        }]
    }], */


    const newGame = new GameModel({
        categories: req.body.categories,
        context: req.body.context,
        teams: formattedTeams,
        questions: formattedQuestions,
        currentTurnTeamId: formattedTeams[0].id,
        isGameOver: false,
      });

    try {
        const savedGame = await newGame.save();
        res.status(201).json(savedGame);
    } catch (error) {
        res.status(500).json({ error: "Failed to create game" });
    }
    });

    module.exports = router;