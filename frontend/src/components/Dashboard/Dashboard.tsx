import React from "react";
import {
  DashboardWrapper,
  TeamsContainer,
  TeamCard,
  TeamName,
  TeamMoney,
  ButtonGroup,
} from "./Dashboard.styled";
import Logo from "@/components/Logo/Logo";
import Spacer from "../Spacer/Spacer";
import Link from "next/link";
import Button from "../Button/Button";
import DashboardProps from "./Dashboard.types";

const Dashboard: React.FC<DashboardProps> = ({ teams }) => {
  /* 
  const teams = [
    { name: "Team 1", money: "$0", color: "#FF5733" }, // Red
    { name: "Team 2", money: "$0", color: "#33FF57" }, // Green
    { name: "Team 3", money: "$0", color: "#3357FF" }, // Blue
    { name: "Team 4", money: "$0", color: "#FF33A1" }, // Pink
    { name: "Team 5", money: "$0", color: "#33FFF0" }, // Cyan
    { name: "Team 6", money: "$0", color: "#F3FF33" }, // Yellow
  ];
  */

  return (
    <DashboardWrapper>
      <Logo size="medium" />
      <Spacer size={3} orientation="vertical" />
      {/* Render team cards */}
      <TeamsContainer>
        {teams.map((team, index) => (
          <TeamCard key={index} $isActive={index === 0} color={team.color}>
            <TeamName $isActive={index === 0} color={team.color}>
              {team.name}
            </TeamName>
            <TeamMoney $isActive={index === 0} color={team.color}>
              ${team.score}
            </TeamMoney>
          </TeamCard>
        ))}
      </TeamsContainer>

      {/* Button group for game controls */}
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
