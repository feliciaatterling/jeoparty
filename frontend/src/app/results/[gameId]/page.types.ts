interface Team {
  id: number;
  name: string;
  color: string;
  score: number;
}

interface Player extends Team {
  rgbaColor: string; // Add rgbaColor for podium display
}

interface GameData {
  teams: Team[];
}

export type { Team, Player, GameData };
