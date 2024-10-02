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
import Typography from "../Typography/Typography";

const Dashboard = () => {
  const teams = [
    { name: "Team 1", money: "$0", color: "#FF5733" }, // Red
    { name: "Team 2", money: "$0", color: "#33FF57" }, // Green
    { name: "Team 3", money: "$0", color: "#3357FF" }, // Blue
    { name: "Team 4", money: "$0", color: "#FF33A1" }, // Pink
    { name: "Team 5", money: "$0", color: "#33FFF0" }, // Cyan
    { name: "Team 6", money: "$0", color: "#F3FF33" }, // Yellow
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
          <TeamCard key={index} $isActive={index === 0} $color={team.color}>
            <Typography
              variant="p"
              color={index === 0 ? "white" : "black"}
              align="center"
            >
              {team.name}
            </Typography>
            <Typography
              variant="meta"
              color={index === 0 ? "white" : "#333"}
              align="center"
            >
              {team.money}
            </Typography>
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
