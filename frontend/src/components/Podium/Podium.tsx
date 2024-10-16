"use client";

import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import {
  PodiumContainer,
  FirstPlace,
  SecondPlace,
  ThirdPlace,
  PlayerInfo,
  PlaceLabel,
  PodiumWrapper,
  PodiumObject,
} from "./Podium.styled";
import Typography from "../Typography/Typography";
import Spacer from "../Spacer/Spacer";

interface Player {
  name: string;
  score: number;
  color: string;
  rgbaColor: string;
}

interface PodiumProps {
  podiumGroups: { score: number; players: Player[] }[];
}

// Function to generate a gradient for tied players
const generateGradient = (colors: string[]) => {
  if (colors.length === 1) {
    return colors[0]; // If there's only one player, return the single color
  }
  return `linear-gradient(90deg, ${colors.join(", ")})`;
};

// Utility to format tied player names with "&"
const formatTiedNames = (players: Player[]) => {
  const names = players.map((player) => player.name);
  return names.length > 1 ? names.join(" & ") : names[0];
};

const Podium: React.FC<PodiumProps> = ({ podiumGroups }) => {
  // State for controlling confetti
  const [showConfetti, setShowConfetti] = useState(false);

  // Trigger confetti after the podium is revealed
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 3000);
    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, []);

  return (
    <PodiumWrapper>
      <PodiumContainer>
        {/* Second Place Podium */}
        {podiumGroups.length >= 2 && (
          <PodiumObject>
            <SecondPlace
              color={generateGradient(
                podiumGroups[1].players.map((player) => player.color)
              )}
              $delay={2}
            >
              <PlayerInfo>
                <Typography variant="h1" color="white">
                  {formatTiedNames(podiumGroups[1].players)}{" "}
                  {/* Names with "&" */}
                </Typography>
                <Spacer size={0} orientation="vertical" />

                <Typography variant="meta" color="white">
                  ${podiumGroups[1].score}
                </Typography>
              </PlayerInfo>
            </SecondPlace>
            <PlaceLabel>🥈 2nd Place</PlaceLabel>
          </PodiumObject>
        )}

        {/* First Place Podium */}
        {podiumGroups.length >= 1 && (
          <PodiumObject>
            <FirstPlace
              color={generateGradient(
                podiumGroups[0].players.map((player) => player.color)
              )}
              $delay={3}
            >
              <PlayerInfo>
                <Typography variant="h1" color="white">
                  {formatTiedNames(podiumGroups[0].players)}{" "}
                  {/* Names with "&" */}
                </Typography>
                <Spacer size={0} orientation="vertical" />
                <Typography variant="meta" color="white">
                  ${podiumGroups[0].score}
                </Typography>
              </PlayerInfo>
            </FirstPlace>
            <PlaceLabel>🥇 1st Place</PlaceLabel>
          </PodiumObject>
        )}

        {/* Third Place Podium */}
        {podiumGroups.length >= 3 && (
          <PodiumObject>
            <ThirdPlace
              color={generateGradient(
                podiumGroups[2].players.map((player) => player.color)
              )}
              $delay={1}
            >
              <PlayerInfo>
                <Typography variant="h1" color="white">
                  {formatTiedNames(podiumGroups[2].players)}{" "}
                  {/* Names with "&" */}
                </Typography>
                <Spacer size={0} orientation="vertical" />
                <Typography variant="meta" color="white">
                  ${podiumGroups[2].score}
                </Typography>
              </PlayerInfo>
            </ThirdPlace>
            <PlaceLabel>🥉 3rd Place</PlaceLabel>
          </PodiumObject>
        )}
      </PodiumContainer>

      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          colors={podiumGroups.flatMap((group) =>
            group.players.map((player) => player.color)
          )}
        />
      )}
    </PodiumWrapper>
  );
};

export default Podium;
