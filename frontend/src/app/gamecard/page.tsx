"use client"

import React from "react";
import Dashboard from "@/components/Dashboard/Dashboard";
import GameCard from "@/components/GameCard/GameCard";
import { HomeWrapper, DashboardWrapper, GameCardWrapper } from "./page.styled";

export default function Home() {
  return (
    <HomeWrapper>
      {/* Left: Dashboard (Sidebar for teams) */}
      <DashboardWrapper>
        <Dashboard />
      </DashboardWrapper>

      {/* Right: GameCard (Question and answer section) */}
      <GameCardWrapper>
        <GameCard 
          question="This person played The Fresh Prince of Bel Air." 
          answer="Will Smith" 
          category="Movies" 
          value={200} 
        />
      </GameCardWrapper>
    </HomeWrapper>
  );
}
