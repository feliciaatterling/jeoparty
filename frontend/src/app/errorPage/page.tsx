"use client";
import Spacer from "@/components/Spacer/Spacer";
import Button from "@/components/Button/Button";
import Typography from "@/components/Typography/Typography";
import Image from "next/image";
import { Sc404Wrapper, ScButtonContainer, ScDescriptionContainer } from "../page.styled";

export default function NotFound() {
    return (
        <Sc404Wrapper>
          <Spacer orientation="vertical" size={4} />
          <Image src="/images/Jeoops.png" width={500} height={111} alt="Oops logo" />
        
          <Spacer orientation="vertical" size={4} />

          <ScDescriptionContainer>
            <Typography
              variant="h1"
              align="center"
            >
              Error Generating Game
            </Typography>
            <Spacer orientation="vertical" size={2} />
            <Typography
              variant="h3"
              align="center"
              style={{ lineHeight: "1.15em", fontSize: 18, fontWeight: 300 }}
            >
              It seems like there was a problem creating your game. Please return to the start page. 
            </Typography>
          </ScDescriptionContainer>

          <Spacer orientation="vertical" size={3} />

          <ScButtonContainer>
            <Button label="RETURN TO GAME SETUP" onClick={() => (window.location.href = "/gamesetup")}/>
          </ScButtonContainer>
          <Spacer orientation="vertical" size={4} />
        </Sc404Wrapper>
    )
}