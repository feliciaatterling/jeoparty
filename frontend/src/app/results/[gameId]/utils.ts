const URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export interface GameData {
  _id: string;
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
  gameFinishedAt: Date | null;
}

export async function deleteGameData(gameId: string) {
  try {
    const response = await fetch(`${URL}/game/delete/${gameId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Failed to Delete game data");
    } else {
      console.log("Deleted successfully!");
    }
  } catch (error) {
    console.error("Error deleting game data:", error);
  }
}

export async function fetchGameData(gameId: string): Promise<GameData | null> {
  try {
    const response = await fetch(`${URL}/game/${gameId}`);
    if (response.ok) {
      const data: GameData = await response.json();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
