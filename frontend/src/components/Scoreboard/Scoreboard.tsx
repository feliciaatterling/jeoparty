"use client";

import {
  ScScoreboard,
  ScScoreboardItem,
  ScScoreboardTeamName,
  ScScoreboardTeamScore,
} from "./Scoreboard.styled";
import ScoreboardProps from "./Scoreboard.types";

export default function Scoreboard({ groups }: ScoreboardProps) {
  return (
    <ScScoreboard>
      {groups.map((group) =>
        group.players.map((team) => (
          <ScScoreboardItem key={team.id} color={team.color}>
            <ScScoreboardTeamName>{team.name}</ScScoreboardTeamName>
            <ScScoreboardTeamScore>${team.score}</ScScoreboardTeamScore>
          </ScScoreboardItem>
        ))
      )}
    </ScScoreboard>
  );
}
