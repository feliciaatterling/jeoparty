const URL = "http://localhost:8000";

export async function deleteGameData(gameId: string) {
  try {
    const response = await fetch(`${URL}/game/delete/${gameId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to Delete game data");
    } else {
      console.log("Deleted succesfully!");
    }
  } catch (error) {
    console.error("Error deleting game data:", error);
  }
}
