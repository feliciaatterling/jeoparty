import GameData from "./utils.types";

const URL = "http://localhost:8000";

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
    return null;
  }
}
