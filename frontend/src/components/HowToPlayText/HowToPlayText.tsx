"use client";
import React from "react";
import ScHowToPlayText from "./HowToPlayText.styled";

interface HowToPlayTextProps {
  content: string;
}

const HowToPlayText: React.FC<HowToPlayTextProps> = ({ content }) => {
  // Split by double newline to create paragraphs
  const paragraphs = content.split(/\n\n+/).map((paragraph, index) => {
    return (
      <p key={index}>
        {paragraph.split("\n").map((line, lineIndex) => (
          <>
            {line}
            {lineIndex < paragraph.split("\n").length - 1 && <br />}
          </>
        ))}
      </p>
    );
  });

  return <ScHowToPlayText>{paragraphs}</ScHowToPlayText>;
};

export default HowToPlayText;
