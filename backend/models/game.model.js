const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    categories: [String],
    context: String,
    teams: [{
        id: String,
        name: String,
        color: String,
        score: Number,
    }],
    questions: [{
        category: String,
        questionCards: [{
            points: Number,
            question: String,
            answer: String,
            isAnswered: Boolean,
        }]
        
    }],
    currentTurnTeamId: String,
    isGameOver: Boolean,

})

module.exports = mongoose.model('gamemodel', gameSchema)