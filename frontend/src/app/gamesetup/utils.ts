import { gameSetup } from "./utils.types";

const URL = process.env.NEXT_PUBLIC_BACKEND_URL;

async function createGame(gameSetup: gameSetup) {
  console.log(URL);

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
    } else {
    }
  } catch (error) {
    console.error(error);
  }
}

export { createGame };
