interface DashboardProps {
  teams: { id: number; name: string; color: string; score: number }[];
  currentTurnId: number;
  gameId: string; // Add gameId here
}

export default DashboardProps;
