import styled from "styled-components";

// Base button styling shared by all buttons
const ScBaseButton = styled.button`
  padding: 12px;
  border: none;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
`;

// Primary button styling, with a custom background and hover effect
const ScPrimaryButton = styled(ScBaseButton)`
  background-color: #b45ad5;
  color: white;

  &:hover {
    background-color: #c06fdd;
  }
`;

// Secondary button styling, with a different color and hover effect
const ScSecondaryButton = styled(ScBaseButton)`
  background-color: #43b3f4;
  color: white;

  &:hover {
    background-color: #5cc0f6;
  }
`;

// Danger button styling, with a red background and hover effect
const ScDangerButton = styled(ScBaseButton)`
  background-color: #ef5350;
  color: white;

  &:hover {
    background-color: #ef6060;
  }
`;

// Exporting all button variants
export { ScPrimaryButton, ScSecondaryButton, ScDangerButton };
