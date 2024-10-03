import { gameSetup } from "./utils.types";

const URL = "http://130.237.5.99:8000";

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
      console.log("Game Created! :)");
      return response.json();
    }
  } catch (error) {
    console.error(error);
  }
}

export { createGame };
