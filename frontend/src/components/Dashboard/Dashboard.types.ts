interface DashboardProps {
  teams: { id: number; name: string; color: string; score: number }[];
  currentTurnId: number;
  onScoreChange: (teamId: number, amount: number) => void;
  onEndGame: () => void;
  onSaveChange: () => void;
}

export default DashboardProps;
