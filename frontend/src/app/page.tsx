import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/Button";
import {
  HomeContainer,
  LogoContainer,
  ExplanationText1,
  ExplanationText2,
} from "@/components/HomeStyles/HomeStyles";
import Spacer from "@/components/Spacer/Spacer";

export default function Home() {
  return (
    <HomeContainer>
      <LogoContainer>
        <Image
          src="/images/JEOPARTY.png"
          alt="JeoParty Logo"
          width={700}
          height={100}
        />
      </LogoContainer>

      <ExplanationText1>
        Jeoparty Classic Mode is an online version of the classic game Jeopardy,
        where the <br />
        categories and questions are all generated with the help of OpenAI.
      </ExplanationText1>

      <ExplanationText2>
        Jeoparty Party Mode is our spin on Jeopardy, including things like dares
        and <br />
        challenges - perfect for a party with your friends!
      </ExplanationText2>

      {/* Buttons with Link for navigation */}
      <div style={{ display: "flex" }}>
        <Link href="/gamesetup" passHref>
          <Button label="PLAY GAME" as="button" />
        </Link>

        <Spacer size={3} orientation="horizontal" />

        <Link href="/how-to-play" passHref>
          <Button label="HOW TO PLAY" as="button" variant="secondary" />
        </Link>
      </div>
    </HomeContainer>
  );
}
