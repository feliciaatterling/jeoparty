import React from "react";
import {
  DashboardWrapper,
  EditButton,
  EndButton,
  TeamsContainer,
  TeamCard,
  TeamName,
  TeamMoney,
  ButtonGroup,
} from "./Dashboard.styled";
import Link from "next/link";

const Dashboard = () => {
  const teams = [
    { name: "Team 1", money: "$0" },
    { name: "Team 2", money: "$0" },
    { name: "Team 3", money: "$0" },
    { name: "Team 4", money: "$0" },
    { name: "Team 5", money: "$0" },
    { name: "Team 6", money: "$0" },
  ];

  return (
    <DashboardWrapper>
      <TeamsContainer>
        {teams.map((team, index) => (
          <TeamCard key={index} isActive={index === 0}>
            <TeamName>{team.name}</TeamName>
            <TeamMoney>{team.money}</TeamMoney>
          </TeamCard>
        ))}
      </TeamsContainer>

      <ButtonGroup>
        <EditButton>Edit Game</EditButton>
        <Link href="/" legacyBehavior>
          <EndButton>End Game</EndButton>
        </Link>
      </ButtonGroup>
    </DashboardWrapper>
  );
};

export default Dashboard;
