"use client";
import React from "react";
import ScInfoText from "./InfoText.styled";

interface InfoTextProps {
  content: string;
}

const InfoText: React.FC<InfoTextProps> = ({ content }) => {
  // Radbryter content med \n
  const lines = content.split("\n");

  return (
    <ScInfoText>
      {lines.map((line, index) => (
        <p key={index} style={{ margin: "0" }}>
          {line}
        </p>
      ))}
    </ScInfoText>
  );
};

export default InfoText;
