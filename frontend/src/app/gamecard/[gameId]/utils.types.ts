interface GameData {
  categories: string[];
  context: string;
  teams: {
    id: number;
    name: string;
    color: string;
    score: number;
  }[];
  questions: {
    category: string;
    questionCards: {
      _id: string;
      points: number;
      question: string;
      answer: string;
      isAnswered: string | null;
    }[];
  }[];
  currentTurnTeamId: number;
  isGameOver: boolean;
}

export default GameData;
