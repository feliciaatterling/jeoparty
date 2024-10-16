"use client";
import styled from "styled-components";

export const ScScoreboard = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 768px) {
    width: 100%; /* Full width on smaller screens */
  }
`;

export const ScScoreboardItem = styled.div<{ color: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ color }) => color};
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  color: white;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ScScoreboardTeamName = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ScScoreboardTeamScore = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
