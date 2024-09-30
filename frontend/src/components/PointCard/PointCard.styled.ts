import styled from "styled-components";

const ScPointCard = styled.button`
  padding: 26px 34px;
  background: ${(props) =>
    props.disabled
      ? "linear-gradient(180deg, rgba(200, 200, 200, 1) 10%, rgba(150, 150, 150, 1) 100%)"
      : "linear-gradient(180deg, rgba(60, 202, 231, 1) 10%, rgba(225, 27, 252, 1) 100%)"};
  margin: 10px;
  border-radius: 3px;
  color: ${(props) => (props.disabled ? "#999999" : "white")};
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? "0.6" : "1")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};

  &:hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }

  &:focus {
    background-color: ${(props) =>
      props.disabled ? "rgba(150, 150, 150, 1)" : "blue"};
  }
`;

export default ScPointCard;
