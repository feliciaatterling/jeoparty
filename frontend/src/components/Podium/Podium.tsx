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
    return `rgba(0, 0, 0, ${alpha})`;
  }

  const [r, g, b] = hex.match(/\w\w/g)!.map((x) => parseInt(x, 16));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Function to generate a gradient for tied players
const generateGradient = (colors: string[]) => {
  if (colors.length === 1) {
    return colors[0]; // If there's only one player, return the single color
  }
  return `linear-gradient(45deg, ${colors.join(", ")})`;
};

// Utility to format tied player names with "&"
const formatTiedNames = (players: Player[]) => {
  const names = players.map((player) => player.name);
  return names.length > 1 ? names.join(" & ") : names[0];
};

const Podium: React.FC<PodiumProps> = ({ players, onPlayAgain, onExit }) => {
  // Sort players by score in descending order
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  // State for controlling confetti
  const [showConfetti, setShowConfetti] = useState(false);

  // Trigger confetti after the third-place podium is revealed
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 3000);
    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, []);

  // Helper function to group tied players by score
  const groupByScore = (players: Player[]) => {
    const groupedPlayers: { score: number; players: Player[] }[] = [];

    players.forEach((player) => {
      const existingGroup = groupedPlayers.find(
        (group) => group.score === player.score
      );

      if (existingGroup) {
        existingGroup.players.push(player);
      } else {
        groupedPlayers.push({ score: player.score, players: [player] });
      }
    });

    return groupedPlayers;
  };

  const groupedPlayers = groupByScore(sortedPlayers);

  return (
    <PodiumWrapper>
      {/* Title */}
      <Logo size="medium" />
      <Typography variant="h2" align="center" color="white">
        RESULTS
      </Typography>

      <PodiumContainer>
        {/* Second Place Podium */}
        {groupedPlayers.length >= 2 && (
          <SecondPlace
            color={generateGradient(groupedPlayers[1].players.map((player) => player.color))}
            $delay={2}
          >
            <PlayerInfo>
              <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                <Typography variant="p" color="white">
                  {formatTiedNames(groupedPlayers[1].players)} {/* Names with "&" */}
                </Typography>
              </div>
              <Typography variant="meta" color="white">
                ${groupedPlayers[1].score}
              </Typography>
            </PlayerInfo>
          </SecondPlace>
        )}

        {/* First Place Podium */}
        {groupedPlayers.length >= 1 && (
          <FirstPlace
            color={generateGradient(groupedPlayers[0].players.map((player) => player.color))}
            $delay={3}
          >
            <PlayerInfo>
              <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                <Typography variant="p" color="white">
                  {formatTiedNames(groupedPlayers[0].players)} {/* Names with "&" */}
                </Typography>
              </div>
              <Typography variant="meta" color="white">
                ${groupedPlayers[0].score}
              </Typography>
            </PlayerInfo>
          </FirstPlace>
        )}

        {/* Third Place Podium */}
        {groupedPlayers.length >= 3 && (
          <ThirdPlace
            color={generateGradient(groupedPlayers[2].players.map((player) => player.color))}
            $delay={1}
          >
            <PlayerInfo>
              <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                <Typography variant="p" color="white">
                  {formatTiedNames(groupedPlayers[2].players)} {/* Names with "&" */}
                </Typography>
              </div>
              <Typography variant="meta" color="white">
                ${groupedPlayers[2].score}
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
          colors={sortedPlayers.map((player) => player.color)}
        />
      )}
    </PodiumWrapper>
  );
};

export default Podium;
