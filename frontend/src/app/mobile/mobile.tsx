"use client";
import React from "react";

import Typography from "@/components/Typography/Typography";
import {
  HomeContainer,
  ScDemoContainer,
  ScDescriptionContainer,
  ScFooterContainer,
  ScHowToPlayContainer,
} from "./mobile.styled";
import { IoGameControllerOutline, IoHelpOutline } from "react-icons/io5";
import { FaRegSurprise } from "react-icons/fa";
import Logo from "@/components/Logo/Logo";
import Spacer from "@/components/Spacer/Spacer";
import Image from "next/image";
import HowToCard from "@/components/HowToCard/HowToCard";

export default function HomeMobile() {
  return (
    <HomeContainer>
      <Spacer orientation="vertical" size={4} />
      <Logo size="medium" />
      <Spacer orientation="vertical" size={4} />

      <ScDescriptionContainer>
        <Typography
          variant="h1"
          align="center"
          style={{ fontSize: 42, fontWeight: 600 }}
        >
          Who is smartest at the party?
        </Typography>
        <Spacer orientation="vertical" size={2} />
        <Typography
          variant="p"
          align="center"
          color="#ffffff95"
          style={{ lineHeight: "1.15em", fontSize: 13, fontWeight: 300 }}
        >
          Jeoparty is an online version of the classic game Jeopardy, where all
          questions are generated with AI!
        </Typography>
      </ScDescriptionContainer>
      <Spacer orientation="vertical" size={3} />

      <ScHowToPlayContainer>
        <ScDemoContainer>
          <Image
            src="/images/mockup_jeoparty.png"
            alt="Demo video"
            width={350}
            height={350 / 2.084}
            style={{ border: "2px solid #484b72", borderRadius: 8 }}
          />
        </ScDemoContainer>

        <Spacer orientation="vertical" size={3} />
        <Typography
          variant="p"
          align="center"
          style={{ fontSize: 13, fontWeight: 300, padding: "0 12px" }}
        >
          We're sorry! We currently do not support mobile games, please come
          back again on desktop or tablet!
        </Typography>
        <Spacer orientation="vertical" size={3} />

        <Typography variant="h1" align="center" style={{ fontSize: 28 }}>
          How to play
        </Typography>
        <Spacer orientation="vertical" size={2} />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <HowToCard label="The Game" Icon={IoGameControllerOutline} mobile>
            Jeoparty is a trivia game based on the classic Jeopardy format.
            There are six categories with five questions each. The more money
            the questions are worth, the more difficult they are!
          </HowToCard>
          <HowToCard label="The Questions" Icon={IoHelpOutline} mobile>
            {`
      In Jeopardy, you must respond in the form of a question. If the
      question is "the first US president", your answer should be "Who
      is George Washington!"`}
          </HowToCard>
          <HowToCard label="The Twist" Icon={FaRegSurprise} mobile>
            JeoParty uses AI to create unique questions and categories on the
            spot. This means every game is different, with fresh challenges
            every time you play! Try giving the AI instructions to better tailor
            your experience!
          </HowToCard>
        </div>

        <Spacer orientation="vertical" size={1} />
      </ScHowToPlayContainer>
      <Spacer orientation="vertical" size={3} />

      <ScFooterContainer>
        <Typography variant="h3">KTH Royal Institute of Technology</Typography>
        <Spacer orientation="vertical" size={0} />

        <Typography variant="p" style={{ fontWeight: 300, fontSize: 14 }}>
          Project in DH2643 Advanced Interaction Programming
        </Typography>
        <Spacer orientation="vertical" size={2} />
        <Typography variant="meta" style={{ color: "#484b72", fontSize: 12 }}>
          Developed by Felicia Atterling, Emily Nilsson, Olle Sköld, and Patrik
          Larsson 2024
        </Typography>
      </ScFooterContainer>
    </HomeContainer>
  );
}
