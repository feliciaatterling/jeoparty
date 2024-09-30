import styled from "styled-components";

const ScBaseButton = styled.button`
  padding: 12px;
  border: none;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
`;

const ScPrimaryButton = styled(ScBaseButton)`
  background-color: #b45ad5;
  color: white;

  &:hover {
    background-color: #c06fdd;
  }
`;

const ScSecondaryButton = styled(ScBaseButton)`
  background-color: #43b3f4;
  color: white;

  &:hover {
    background-color: #5cc0f6;
  }
`;

const ScDangerButton = styled(ScBaseButton)`
  background-color: #ef5350;
  color: white;

  &:hover {
    background-color: #ef6060;
  }
`;

export { ScPrimaryButton, ScSecondaryButton, ScDangerButton };
