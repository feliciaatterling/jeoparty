import React from "react";
import { ModalWrapper, ModalCard, ModalContent } from "./GameOverModal.styled"; // Styled components with Sc prefix
import Button from "@/components/Button/Button";
import Image from "next/image";
import FlexDiv from "../FlexDiv/FlexDiv";
import Typography from "../Typography/Typography";
import Spacer from "../Spacer/Spacer";

interface GameOverModalProps {
  onConfirm: () => void;
}

const GameOverModal: React.FC<GameOverModalProps> = ({ onConfirm }) => {
  return (
    <ModalWrapper>
      <ModalCard>
        <ModalContent>
          <Image
            src="/images/GameOver.png"
            alt="Game Over"
            width={600}
            height={300}
            style={{ maxWidth: "100%", height: "auto" }}
            priority
          />
          <Spacer orientation="vertical" size={4} />
          <Typography variant="h1">Well played!</Typography>
          <Spacer orientation="vertical" size={1} />
          <Typography variant="p" color="#ffffff90" style={{ fontWeight: 300 }}>
            {`Let's see how everyone did!`}
          </Typography>
          <Spacer orientation="vertical" size={3} />

          <FlexDiv style={{ width: 200 }}>
            <Button
              label="GO TO RESULTS"
              variant="secondary"
              onClick={onConfirm}
            />
          </FlexDiv>
        </ModalContent>
      </ModalCard>
    </ModalWrapper>
  );
};

export default GameOverModal;
