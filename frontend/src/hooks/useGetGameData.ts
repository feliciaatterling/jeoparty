import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
  gameFinishedAt: Date | null;
}

const URL = process.env.NEXT_PUBLIC_BACKEND_URL;

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

function useGetGameData(gameId: string) {
  const [gameData, setGameData] = useState<GameData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedGameData: GameData | null = await fetchGameData(gameId);

      if (fetchedGameData) {
        setGameData(fetchedGameData);
        setIsLoading(false);
      } else {
        console.log("Could not fetch GameData");
        router.push(`/error/${"Game not found"}`);
      }
    };

    fetchData();
  }, [gameId]);

  return { gameData, setGameData, isLoading, setIsLoading };
}

export default useGetGameData;
