"use client"
import styled from 'styled-components';
import Image from "next/image";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

export const LogoContainer = styled.div`
  margin-bottom: 20px;
  margin-top: -75px; /* Adjust this value as needed to move the logo higher */
`;

export const ExplanationText1 = styled.p`
  margin-top: 50px;
  font-size: 1em; 
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7); 
  font-weight: bold; 
`;
export const ExplanationText2 = styled.p`
  margin: 25px;
  font-size: 1em; 
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7); 
  font-weight: bold; 
`;