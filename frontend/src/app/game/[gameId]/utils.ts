import GameData from "./utils.types";

const URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function updateGameData(
  gameId: string,
  gameData: GameData
): Promise<GameData | null> {
  try {
    const response = await fetch(`${URL}/game/update/${gameId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(gameData),
    });

    if (!response.ok) {
      throw new Error("Failed to update game data");
    }

    const updatedGameData: GameData = await response.json();
    return updatedGameData; // Return the updated game data if needed
  } catch (error) {
    console.error("Error updating game data:", error);
    return null; // Return null if there's an error
  }
}
