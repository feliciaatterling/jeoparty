import styled from "styled-components";

const ScHowToPlayText = styled.div`
  padding: 2% 3%; /* Use percentages for padding */
  font-size: 1rem; /* Use rem for font size */
  background: #fff5ee;
  margin: 1%; /* Adjust margin to be relative */
  border-radius: 30px;
  color: black;
  border: 2px solid transparent; /* Adjust border as needed */
  box-sizing: border-box; /* Include padding and border in width/height */
  position: absolute;
  z-index: 100;
  width: 100%;
  max-width: 800px; /* Set a max width */
  height: auto; /* Set height to auto to adjust based on content */
  max-height: 80vh; /* Limit max height to a percentage of viewport height */
  overflow-y: auto; /* Add scroll if content exceeds max height */
`;

export default ScHowToPlayText;
