import React, { useState } from "react";
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

const Dashboard: React.FC<
  DashboardProps & {
    gameId: string;
    onScoreChange: (teamId: number, amount: number) => void;
  }
> = ({ teams, currentTurnId, gameId, onScoreChange }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditToggle = () => {
    setIsEditMode((prevMode) => !prevMode); // Toggle edit mode
  };

  return (
    <DashboardWrapper>
      <Logo size="medium" />
      <Spacer size={3} orientation="vertical" />
      {/* Render team cards */}
      <TeamsContainer>
        {teams?.map((team, index) => (
          <TeamCard
            key={index}
            $isActive={team.id === currentTurnId}
            color={team.color}
          >
            <TeamName $isActive={team.id === currentTurnId} color={team.color}>
              {team.name}
            </TeamName>
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* Render plus/minus buttons*/}
              {isEditMode && (
                <>
                  {/* Minus button to lower score by 100$ */}
                  <button
                    onClick={() => onScoreChange(team.id, -100)}
                    style={{ marginRight: "10px" }}
                  >
                    -
                  </button>
                </>
              )}

              {/* Team score */}
              <TeamMoney
                $isActive={team.id === currentTurnId}
                color={team.color}
              >
                ${team.score}
              </TeamMoney>

              {isEditMode && (
                <>
                  {/* Plus button to increase score by 100$ */}
                  <button
                    onClick={() => onScoreChange(team.id, 100)}
                    style={{ marginLeft: "10px" }}
                  >
                    +
                  </button>
                </>
              )}
            </div>
          </TeamCard>
        ))}
      </TeamsContainer>

      {/* Button group for game controls */}
      <ButtonGroup>
        <Button
          label={isEditMode ? "FINISH EDITING" : "EDIT GAME"}
          onClick={handleEditToggle}
        />

        {/* Link to results with gameId */}
        <Link href={`/results/${gameId}`} legacyBehavior>
          <Button variant="danger" label="END GAME" />
        </Link>
      </ButtonGroup>
    </DashboardWrapper>
  );
};

export default Dashboard;
