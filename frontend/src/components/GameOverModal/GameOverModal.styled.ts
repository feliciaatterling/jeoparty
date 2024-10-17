import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const ModalCard = styled.div`
  background: linear-gradient(45deg, #0a0524, #0d156b);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  text-align: center;
  padding: 64px;
  border: 2px solid #ffffff20;
  box-shadow: 0px 0px 50px rgba(225, 27, 252, 0.4);
  max-width: 800px;
  max-height: 800px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
