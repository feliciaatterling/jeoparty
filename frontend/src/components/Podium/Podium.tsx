//npm install react-confetti

import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import {
  PodiumWrapper,
  PodiumContainer,
  FirstPlace,
  SecondPlace,
  ThirdPlace,
  PlayerName,
  PlayerScore,
  Title,
  PlayerInfo,
  ButtonContainer,
  ActionButton,
} from "./Podium.styled";

interface Player {
  name: string;
  score: number;
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
      <Title>RESULTS</Title>
      <PodiumContainer>
        {/* Second Place */}
        <SecondPlace delay={2}>
          <PlayerInfo>
            <PlayerName>{topPlayers[1]?.name || "No Player"}</PlayerName>
            <PlayerScore>${topPlayers[1]?.score || 0}</PlayerScore>
          </PlayerInfo>
        </SecondPlace>

        {/* First Place */}
        <FirstPlace delay={3}>
          <PlayerInfo>
            <PlayerName>{topPlayers[0]?.name || "No Player"}</PlayerName>
            <PlayerScore>${topPlayers[0]?.score || 0}</PlayerScore>
          </PlayerInfo>
        </FirstPlace>

        {/* Third Place */}
        <ThirdPlace delay={1}>
          <PlayerInfo>
            <PlayerName>{topPlayers[2]?.name || "No Player"}</PlayerName>
            <PlayerScore>${topPlayers[2]?.score || 0}</PlayerScore>
          </PlayerInfo>
        </ThirdPlace>
      </PodiumContainer>

      {/* Buttons */}
      <ButtonContainer>
        <ActionButton color="green" onClick={onPlayAgain}>Play Again</ActionButton>
        <ActionButton color="red" onClick={onExit}>Exit</ActionButton>
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
