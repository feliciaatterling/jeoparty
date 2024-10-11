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
import Button from "../Button/Button";
import Typography from "../Typography/Typography";
import Logo from "@/components/Logo/Logo";

interface Player {
  name: string;
  score: number;
  color: string;
  rgbaColor: string;
}

interface PodiumProps {
  players: Player[];
  onPlayAgain: () => void;
  onExit: () => void;
}

// Utility function to convert HEX to RGBA for transparency
const hexToRgba = (hex: string | undefined, alpha: number) => {
  if (!hex) {
    // Return a default color (e.g., transparent) if hex is undefined or null
    return `rgba(0, 0, 0, ${alpha})`;
  }

  const [r, g, b] = hex.match(/\w\w/g)!.map((x) => parseInt(x, 16));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const Podium: React.FC<PodiumProps> = ({ players, onPlayAgain, onExit }) => {
  // Sort players by score in descending order and select the top 3
  const topPlayers = [...players].sort((a, b) => b.score - a.score).slice(0, 3);

  // State for controlling confetti
  const [showConfetti, setShowConfetti] = useState(false);

  // Trigger confetti after the third-place podium is revealed
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 3000);

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, []);

  return (
    <PodiumWrapper>
      {/* Title */}
      <Logo size="medium" />
      <Typography variant="h2" align="center" color="white">
        RESULTS
      </Typography>

      <PodiumContainer>
        {/* Second Place Podium - Only show if there is a second-place player */}
        {topPlayers[1] && (
          <SecondPlace color={hexToRgba(topPlayers[1]?.color, 0.5)} $delay={2}>
            <PlayerInfo>
              <Typography variant="p" color="white">
                {topPlayers[1]?.name || "No Player"}
              </Typography>
              <Typography variant="meta" color="white">
                ${topPlayers[1]?.score || 0}
              </Typography>
            </PlayerInfo>
          </SecondPlace>
        )}

        {/* First Place Podium - Only show if there is a first-place player */}
        {topPlayers[0] && (
          <FirstPlace color={hexToRgba(topPlayers[0]?.color, 0.5)} $delay={3}>
            <PlayerInfo>
              <Typography variant="p" color="white">
                {topPlayers[0]?.name || "No Player"}
              </Typography>
              <Typography variant="meta" color="white">
                ${topPlayers[0]?.score || 0}
              </Typography>
            </PlayerInfo>
          </FirstPlace>
        )}

        {/* Third Place Podium - Only show if there is a third-place player */}
        {topPlayers[2] && (
          <ThirdPlace color={hexToRgba(topPlayers[2]?.color, 0.5)} $delay={1}>
            <PlayerInfo>
              <Typography variant="p" color="white">
                {topPlayers[2]?.name || "No Player"}
              </Typography>
              <Typography variant="meta" color="white">
                ${topPlayers[2]?.score || 0}
              </Typography>
            </PlayerInfo>
          </ThirdPlace>
        )}
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
          recycle={false}
          colors={topPlayers.map((player) => player.color)}
        />
      )}
    </PodiumWrapper>
  );
};

export default Podium;

