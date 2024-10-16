const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  categories: [String],
  context: String,
  teams: [
    {
      id: Number,
      name: String,
      color: String,
      score: Number,
    },
  ],
  questions: [
    {
      category: String,
      questionCards: [
        {
          points: Number,
          question: String,
          answer: String,
          isAnswered: { type: String, default: null },
        },
      ],
    },
  ],
  currentTurnTeamId: Number,
  isGameOver: Boolean,
  gameFinishedAt: { type: Date, default: null }
});

// Create a TTL index to delete the document 1 hour (3600 seconds) after gameFinishedAt
gameSchema.index({ gameFinishedAt: 1 }, { expireAfterSeconds: 30 });

module.exports = mongoose.model("gamemodel", gameSchema);
