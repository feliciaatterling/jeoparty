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

export async function updateGameData(gameId: string, gameData: GameData): Promise<GameData | null> {
  try {
    const response = await fetch(`${URL}/game/update/${gameId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(gameData),
    });

    if (!response.ok) {
      throw new Error("Failed to update game data");
    }

    const updatedGameData: GameData = await response.json();
    return updatedGameData;  // Return the updated game data if needed
  } catch (error) {
    console.error("Error updating game data:", error);
    return null;  // Return null if there's an error
  }
}

