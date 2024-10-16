interface GameBoardProps {
  onQuestionClick: (questionObject: {
    _id: string;
    question: string;
    answer: string;
    points: number;
    category: string;
  }) => void;
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
  teams: { id: number; name: string; color: string; score: number }[];
}

export default GameBoardProps;
