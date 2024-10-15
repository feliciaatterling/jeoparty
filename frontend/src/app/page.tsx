"use client";
import React from "react";
import Button from "@/components/Button/Button";
import Typography from "@/components/Typography/Typography";
import {
  HomeContainer,
  ScButtonContainer,
  ScDemoContainer,
  ScDescriptionContainer,
  ScFooterContainer,
  ScHowToCard,
  ScHowToPlayContainer,
} from "./page.styled";
import { IoGameControllerOutline, IoHelpOutline } from "react-icons/io5";
import { FaRegSurprise } from "react-icons/fa";
import Logo from "@/components/Logo/Logo";
import Spacer from "@/components/Spacer/Spacer";
import Image from "next/image";

export default function Home() {
  const scrollToSection = () => {
    const section = document.getElementById("how-to-play");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  return (
    <HomeContainer>
      <Spacer orientation="vertical" size={4} />
      <Logo size="large" />
      <Spacer orientation="vertical" size={4} />

      {/* Game description */}
      <ScDescriptionContainer>
        <Typography
          variant="h1"
          align="center"
          style={{ fontSize: 64, fontWeight: 600 }}
        >
          Who is smartest at the party?
        </Typography>
        <Spacer orientation="vertical" size={2} />
        <Typography
          variant="p"
          align="center"
          style={{ lineHeight: "1.15em", fontSize: 18, fontWeight: 300 }}
        >
          Jeoparty is an online version of the classic game Jeopardy, where all
          questions are generated with AI!
        </Typography>
      </ScDescriptionContainer>

      <Spacer orientation="vertical" size={3} />

      <ScButtonContainer>
        <Button
          label="LET'S PLAY"
          as="button"
          onClick={() => (window.location.href = "/gamesetup")}
        />
        <Button
          label="HOW TO PLAY"
          variant="secondary"
          as="button"
          onClick={scrollToSection}
        />
      </ScButtonContainer>

      <Spacer orientation="vertical" size={4} />
      <Spacer orientation="vertical" size={3} />

      <ScHowToPlayContainer id="how-to-play">
        <ScDemoContainer>
          <Image
            src="/images/mockup_jeoparty.png"
            alt="Demo video"
            width={1100}
            height={1100 / 2.084}
            style={{ border: "2px solid #484b72", borderRadius: 8 }}
          />
        </ScDemoContainer>
        <Spacer orientation="vertical" size={4} />
        <Typography variant="h1" align="left" style={{ width: "100%" }}>
          How to play
        </Typography>
        <Spacer orientation="vertical" size={2} />
        <div style={{ display: "flex", gap: 24 }}>
          <ScHowToCard>
            <IoGameControllerOutline color="white" size={64} />
            <Spacer orientation="vertical" size={2} />
            <Typography variant="h2" align="center">
              The Game
            </Typography>
            <Spacer orientation="vertical" size={1} />

            <Typography
              variant="p"
              align="center"
              style={{
                lineHeight: "1.2em",
                fontSize: 16,
                fontWeight: 300,
                color: "#ffffff90",
              }}
            >
              Jeoparty is a trivia game based on the classic Jeopardy format.
              There are six categories with five questions each. The more money
              the questions are worth, the more difficult they are!
            </Typography>
          </ScHowToCard>
          <ScHowToCard>
            <IoHelpOutline color="white" size={64} />
            <Spacer orientation="vertical" size={2} />
            <Typography variant="h2" align="center">
              The Questions
            </Typography>
            <Spacer orientation="vertical" size={1} />

            <Typography
              variant="p"
              align="center"
              style={{
                lineHeight: "1.2em",
                fontSize: 16,
                fontWeight: 300,
                color: "#ffffff90",
              }}
            >
              {`
              In Jeopardy, you must respond in the form of a question. If the
              question is "the first US president", your answer should be "Who
              is George Washington!"`}
            </Typography>
          </ScHowToCard>
          <ScHowToCard>
            <FaRegSurprise color="white" size={64} />
            <Spacer orientation="vertical" size={2} />
            <Typography variant="h2" align="center">
              The Twist
            </Typography>
            <Spacer orientation="vertical" size={1} />

            <Typography
              variant="p"
              align="center"
              style={{
                lineHeight: "1.2em",
                fontSize: 16,
                fontWeight: 300,
                color: "#ffffff90",
              }}
            >
              JeoParty uses AI to create unique questions and categories on the
              spot. This means every game is different, with fresh challenges
              every time you play! Try giving the AI instructions to better
              tailor your experience!
            </Typography>
          </ScHowToCard>
        </div>
        <Spacer orientation="vertical" size={4} />

        <Typography
          variant="meta"
          align="center"
          style={{
            fontWeight: 300,
            color: "#ffffff90",
          }}
        >
          Ready to test your knowledge?
        </Typography>
        <Spacer orientation="vertical" size={1} />

        <div style={{ width: 275 }}>
          <Button
            label="LET'S PLAY"
            as="button"
            onClick={() => (window.location.href = "/gamesetup")}
            style={{ padding: 16, fontSize: 18 }}
          />
        </div>
      </ScHowToPlayContainer>
      <Spacer orientation="vertical" size={4} />
      <ScFooterContainer>
        <Typography variant="h3">KTH Royal Institute of Technology</Typography>
        <Spacer orientation="vertical" size={0} />

        <Typography variant="p" style={{ fontWeight: 300 }}>
          Project in DH2643 Advanced Interaction Programming
        </Typography>
        <Spacer orientation="vertical" size={2} />
        <Typography variant="meta" style={{ color: "#484b72" }}>
          Developed by Felicia Atterling, Emily Nilsson, Olle Sköld, and Patrik
          Larsson 2024
        </Typography>
      </ScFooterContainer>
    </HomeContainer>
  );
}
