import React from "react";
import { ModalWrapper, ModalCard, ModalContent, ModalButton } from "./GameOverModal.styled";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";
import Image from "next/image";

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
          <Typography variant="p" color="white" align="center">
            Well played!
          </Typography>
          <ModalButton>
            <Button label="See Results" variant="secondary" onClick={onConfirm} />
          </ModalButton>
        </ModalContent>
      </ModalCard>
    </ModalWrapper>
  );
};

export default GameOverModal;
