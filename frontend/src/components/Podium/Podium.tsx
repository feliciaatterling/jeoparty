import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import {
  PodiumWrapper,
  PodiumContainer,
  FirstPlace,
  SecondPlace,
  ThirdPlace,
  PlayerInfo,
  ButtonContainer,
} from "./Podium.styled";
import Button from "../Button/Button"; // Import the Button component
import Typography from "../Typography/Typography";

export const players = [
  { name: "Team 1", score: 1800, color: "#FF5733" },
  { name: "Team 2", score: 2500, color: "#33FF57" },
  { name: "Team 3", score: 1500, color: "#3357FF" },
];

interface Player {
  name: string;
  score: number;
  color: string; // Add a color property for each team
}

interface PodiumProps {
  players: Player[];
  onPlayAgain: () => void;
  onExit: () => void;
}

const Podium: React.FC<PodiumProps> = ({ players, onPlayAgain, onExit }) => {
  // Sort players by score in descending order
  const topPlayers = [...players].sort((a, b) => b.score - a.score).slice(0, 3);

  // State for controlling confetti
  const [showConfetti, setShowConfetti] = useState(false);

  // Trigger confetti after first-place podium is revealed
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 3000); // 3 seconds delay to sync with first-place reveal

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, []);

  return (
    <PodiumWrapper>
      {/* Title with Typography */}
      <Typography variant="h1" align="center" color="white">
        RESULTS
      </Typography>

      <PodiumContainer>
        <SecondPlace color={topPlayers[1]?.color} $delay={2}>
          <PlayerInfo>
            <Typography variant="p" color="white">
              {topPlayers[1]?.name || "No Player"}
            </Typography>
            <Typography variant="meta" color="white">
              ${topPlayers[1]?.score || 0}
            </Typography>
          </PlayerInfo>
        </SecondPlace>

        <FirstPlace color={topPlayers[0]?.color} $delay={3}>
          <PlayerInfo>
            <Typography variant="p" color="white">
              {topPlayers[0]?.name || "No Player"}
            </Typography>
            <Typography variant="meta" color="white">
              ${topPlayers[0]?.score || 0}
            </Typography>
          </PlayerInfo>
        </FirstPlace>

        <ThirdPlace color={topPlayers[2]?.color} $delay={1}>
          <PlayerInfo>
            <Typography variant="p" color="white">
              {topPlayers[2]?.name || "No Player"}
            </Typography>
            <Typography variant="meta" color="white">
              ${topPlayers[2]?.score || 0}
            </Typography>
          </PlayerInfo>
        </ThirdPlace>

      </PodiumContainer>

      {/* Buttons */}
      <ButtonContainer>
        <Button label="Play Again" variant="primary" onClick={onPlayAgain} />
        <Button label="Exit" variant="danger" onClick={onExit} />
      </ButtonContainer>

      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false} // Confetti will appear once and not loop
        />
      )}
    </PodiumWrapper>
  );
};

export default Podium;
