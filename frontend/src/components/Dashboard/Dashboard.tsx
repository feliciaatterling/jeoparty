import React from "react";
import {
  DashboardWrapper,
  TeamsContainer,
  TeamCard,
  TeamName,
  TeamMoney,
  ButtonGroup,
} from "./Dashboard.styled";

import Image from "next/image";
import Spacer from "../Spacer/Spacer";
import Link from "next/link";
import Button from "../Button/Button";

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
      <Image
        src="/images/JEOPARTY.png"
        alt="JeoParty Logo"
        width={225}
        height={32}
      />
      <Spacer size={3} orientation="vertical" />
      <TeamsContainer>
        {teams.map((team, index) => (
          <TeamCard key={index} isActive={index === 0}>
            <TeamName>{team.name}</TeamName>
            <TeamMoney>{team.money}</TeamMoney>
          </TeamCard>
        ))}
      </TeamsContainer>

      <ButtonGroup>
        <Button label="EDIT GAME" />
        <Link href="/" legacyBehavior>
          <Button variant="danger" label="END GAME" />
        </Link>
      </ButtonGroup>
    </DashboardWrapper>
  );
};

export default Dashboard;
