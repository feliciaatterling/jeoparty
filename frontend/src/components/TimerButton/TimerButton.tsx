import React, { useState, useEffect } from "react";
import { ScTimerButton } from "./TimerButton.styled";

interface TimerButtonProps {
  duration: number; // Duration in milliseconds
  label: string;
  onClick?: () => void; // Optional onClick handler
}

const TimerButton: React.FC<TimerButtonProps> = ({ duration, label, onClick }) => {
  const [fillPercentage, setFillPercentage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const updateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp; // Set the initial timestamp
      const elapsedTime = timestamp - startTime;
      const progress = Math.min((elapsedTime / duration) * 100, 100); // Calculate percentage

      setFillPercentage(progress);

      if (progress >= 100) {
        setIsComplete(true); // Timer complete
      } else {
        animationFrameId = requestAnimationFrame(updateProgress); // Continue animation
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress); // Start animation

    // Cleanup the animation on unmount
    return () => cancelAnimationFrame(animationFrameId);
  }, [duration]);

  return (
    <ScTimerButton
      $fillPercentage={fillPercentage}
      $isComplete={isComplete}
      onClick={onClick} // Use the onClick prop
    >
      {label}
    </ScTimerButton>
  );
};

export default TimerButton;
