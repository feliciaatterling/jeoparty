"use client";
import React from "react";
import ScInfoText from "./InfoText.styled";

interface InfoTextProps {
  content: string; // The text content to be displayed
}

const InfoText: React.FC<InfoTextProps> = ({ content }) => {
  // Split the content into lines based on newline characters
  const lines = content.split("\n");

  return (
    <ScInfoText>
      {/* Map through each line and render it as a paragraph */}
      {lines.map((line, index) => (
        <p key={index} style={{ margin: "0" }}>
          {/* Set margin to 0 for consistent spacing */}
          {line}
        </p>
      ))}
    </ScInfoText>
  );
};

export default InfoText;
