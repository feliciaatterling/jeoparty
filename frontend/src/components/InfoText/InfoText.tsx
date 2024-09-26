"use client";
import React from "react";
import ScInfoText from "./InfoText.styled";

interface InfoTextProps {
  content: string;
}

const InfoText: React.FC<InfoTextProps> = ({ content }) => {
  return <ScInfoText>{content}</ScInfoText>;
};

export default InfoText;
