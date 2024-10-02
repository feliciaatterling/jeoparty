import styled from "styled-components";

const ScH1 = styled.h1`
  font-weight: 500;
  font-size: 28px;
`;

const ScH2 = styled.h2`
  font-weight: 500;
  font-size: 22px;
`;

const ScH3 = styled.h3`
  font-weight: 500;
  font-size: 18px;
`;

const ScP = styled.p`
  color: white;
  font-size: 16px;
`;

const ScMeta = styled.span`
  font-size: 14px;
  font-weight: normal;
  color: ${(props) => props.color || "inherit"};
`;

export { ScH1, ScH2, ScH3, ScP, ScMeta };
