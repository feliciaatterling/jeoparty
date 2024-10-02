"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Button from "@/components/Button/Button";
import Typography from "@/components/Typography/Typography";
import InfoText from "@/components/InfoText/InfoText";
import {
  HomeContainer,
  LogoContainer,
} from "@/components/HomeStyles/HomeStyles";
import Spacer from "@/components/Spacer/Spacer";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

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

      <div style={{ marginBottom: "30px", marginTop: "40px" }}>
        <Typography variant="p">
          Jeoparty Classic Mode is an online version of the classic game
          Jeopardy, where the <br />
          categories and questions are all generated with the help of OpenAI.
        </Typography>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Typography variant="p">
          Jeoparty Party Mode is our spin on Jeopardy, including things like
          dares and <br />
          challenges - perfect for a party with your friends!
        </Typography>
      </div>

      {/* Play button with Link for navigation */}
      <div style={{ marginBottom: "10px", marginTop: "20px" }}>
        <Link href="/gamesetup" passHref>
          <Button label="Play" as="button" />
        </Link>
      </div>

      {/* How to Play button with toggled popup */}
      <div style={{ display: "inline-block", marginBottom: "10px" }}>
        <Button label="How to Play" as="button" onClick={handlePopup} />
        {showPopup && (
          <div
            style={{
              marginTop: "8px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <InfoText
              content={
                "Example text explaining the rules of Jeopardy as well as JeoPARTY \n which i will write more thoroughly at a later time (ᵔᴥᵔ)"
              }
            />
          </div>
        )}
      </div>
    </HomeContainer>
  );
}
