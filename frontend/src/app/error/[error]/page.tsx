"use client";
import Spacer from "@/components/Spacer/Spacer";
import Button from "@/components/Button/Button";
import Typography from "@/components/Typography/Typography";
import Image from "next/image";
import {
  Sc404Wrapper,
  ScButtonContainer,
  ScDescriptionContainer,
} from "./page.styled";
import { useParams } from "next/navigation";

export default function NotFound() {
  const { error } = useParams() as { error: string };

  return (
    <Sc404Wrapper>
      <Spacer orientation="vertical" size={4} />
      <Image
        src="/images/Jeoops.png"
        width={500}
        height={111}
        alt="Oops logo"
      />

      <Spacer orientation="vertical" size={4} />

      <ScDescriptionContainer>
        <Typography variant="h1" align="center">
          {decodeURI(error)}
        </Typography>
        <Spacer orientation="vertical" size={2} />
        <Typography
          variant="h3"
          align="center"
          style={{ lineHeight: "1.15em", fontSize: 18, fontWeight: 300 }}
        >
          It seems like something went wrong! Please return to the start page.
        </Typography>
      </ScDescriptionContainer>

      <Spacer orientation="vertical" size={3} />

      <ScButtonContainer>
        <Button
          label="RETURN TO GAME SETUP"
          onClick={() => (window.location.href = "/gamesetup")}
        />
      </ScButtonContainer>
      <Spacer orientation="vertical" size={4} />
    </Sc404Wrapper>
  );
}
