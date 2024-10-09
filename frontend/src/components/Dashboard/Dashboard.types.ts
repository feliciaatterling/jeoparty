// frontend/src/components/Dashboard/Dashboard.types.ts

interface DashboardProps {
  teams: { id: number; name: string; color: string; score: number }[];
  currentTurnId: number;
}

export default DashboardProps;
