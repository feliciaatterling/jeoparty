"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/Button/Button";
import Typography from "@/components/Typography/Typography";

import HowToPlayText from "@/components/HowToPlayText/HowToPlayText";
import {
  HomeContainer,
  LogoContainer,
} from "@/components/HomeStyles/HomeStyles";

import Logo from "@/components/Logo/Logo";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  // Toggle the visibility of the popup
  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <HomeContainer>
      <LogoContainer>
        <Logo size="large" />
      </LogoContainer>

      {/* Game description */}
      <div style={{ marginBottom: "30px", marginTop: "40px" }}>
        <Typography variant="p">
          Jeoparty Classic Mode is an online version of the classic game Jeopardy, where the <br />
          categories and questions are all generated with the help of OpenAI.
        </Typography>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <Typography variant="p">
          Jeoparty Party Mode is our spin on Jeopardy, including things like dares and <br />
          challenges - perfect for a party with your friends!
        </Typography>
      </div>

      {/* Play button navigating to game setup */}
      <div style={{ marginBottom: "10px", marginTop: "20px" }}>
        <Link href="/gamesetup" passHref>
          <Button label="Play" as="button" />
        </Link>
      </div>

      {/* How to Play button with popup */}
      <div style={{ display: "inline-block", marginBottom: "10px" }}>
        <Button label="How to Play" as="button" onClick={handlePopup} />
        {showPopup && (

          <div
            style={{
              position: "absolute",
              bottom: "calc(100% + -75px)",
              transform: "translateX(-50%)",
              zIndex: 1000,
              width: "600px",
            }}
          >
            <HowToPlayText
              content={`How to Play Jeoparty:
              
              Jeoparty is a trivia game based on the classic Jeopardy format.
              There are six categories with five questions each. 
              The more money the questions are worth, the more difficult they are!

              In Jeopardy, you must respond in the form of a question. 
              (The first US president - Your answer: "Who is George Washington" )
              

              
              What's special about Jeoparty?

              Jeoparty uses OpenAI to create unique questions and categories on the spot. 
              This means every game is different, with fresh challenges every time you play! You can give the AI instructions to better tailor your experience, such as give it categories to create questions for, or give it the context for the quiz.
              
              
              Ready to test your knowledge? Press "Play" and start creating games!`}
            />

          </div>
        )}
      </div>
    </HomeContainer>
  );
}
