import { gameSetup } from "./utils.types";

const URL = "http://localhost:8000";

async function createGame(gameSetup: gameSetup) {
  try {
    const response = await fetch(`${URL}/game/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameSetup),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(`Game Created with id ${data.gameId}! :)`);
      return data.gameId;
    }
  } catch (error) {
    console.error(error);
  }
}

export { createGame };
