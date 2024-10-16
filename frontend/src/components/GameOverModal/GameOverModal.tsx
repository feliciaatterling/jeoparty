import React from "react";
import { ModalWrapper, ModalCard, ModalContent } from "./GameOverModal.styled"; // Styled components with Sc prefix
import Button from "@/components/Button/Button";
import Image from 'next/image';

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
            width={600}  // Adjusted width
            height={300} // Adjusted height maintaining aspect ratio
            style={{ maxWidth: "100%", height: "auto" }} // Ensures responsiveness
            priority
          />
          <Button label="See Results" variant="secondary" onClick={onConfirm} />
        </ModalContent>
      </ModalCard>
    </ModalWrapper>
  );
};

export default GameOverModal;
