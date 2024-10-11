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
import { useRouter } from "next/navigation";
import Button from "../Button/Button";
import DashboardProps from "./Dashboard.types";

const Dashboard: React.FC<
  DashboardProps & {
    gameId: string;
    onScoreChange: (teamId: number, amount: number) => void;
  }
> = ({ teams, currentTurnId, gameId, onScoreChange }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter(); // Use router for navigation to results page

  // Toggle edit mode for plus/minus buttons
  const handleEditToggle = () => {
    setIsEditMode((prevMode) => !prevMode); // Toggle edit mode
  };

  // Function to handle end game, redirects to results page
  const handleEndGame = () => {
    if (gameId) {
      router.push(`/results/${gameId}`); // Redirect to results page with gameId
    } else {
      console.error("Game ID is missing.");
    }
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
              {/* Render plus/minus buttons only if in edit mode */}
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
        {/* Toggle button for edit mode */}
        <Button
          label={isEditMode ? "FINISH EDITING" : "EDIT GAME"}
          onClick={handleEditToggle}
        />

        {/* End Game button with navigation to results page */}
        <Button variant="danger" label="END GAME" onClick={handleEndGame} />
      </ButtonGroup>
    </DashboardWrapper>
  );
};

export default Dashboard;
