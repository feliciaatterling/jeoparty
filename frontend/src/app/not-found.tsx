"use client";
import { Sc404Wrapper, ScButtonContainer, ScDescriptionContainer } from "./page.styled";
import Logo from "@/components/Logo/Logo";
import Spacer from "@/components/Spacer/Spacer";
import Button from "@/components/Button/Button";
import Typography from "@/components/Typography/Typography";
import Image from "next/image";

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
              404 - Page not found
            </Typography>
            <Spacer orientation="vertical" size={2} />
            <Typography
              variant="h3"
              align="center"
              style={{ lineHeight: "1.15em", fontSize: 18, fontWeight: 300 }}
            >
              The page you are looking for does not exist. Please return to the start page. 
            </Typography>
          </ScDescriptionContainer>

          <Spacer orientation="vertical" size={3} />

          <ScButtonContainer>
            <Button label="RETURN HOME" onClick={() => (window.location.href = "/")}/>
          </ScButtonContainer>
          <Spacer orientation="vertical" size={4} />
        </Sc404Wrapper>
    )
}