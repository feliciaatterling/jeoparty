interface GameData {
  categories: string[];
  context: string;
  teams: {
    id: string;
    name: string;
    color: string;
    score: number;
  }[];
  questions: {
    category: string;
    questionCards: {
      points: number;
      question: string;
      answer: string;
      isAnswered: boolean;
    }[];
  }[];
  currentTurnTeamId: string;
  isGameOver: boolean;
}

export default GameData;
