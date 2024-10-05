// frontend/src/components/Dashboard/Dashboard.types.ts

interface DashboardProps {
  teams: { id: string; name: string; color: string; score: number }[];
  currentTurnId: string;
}

export default DashboardProps;
