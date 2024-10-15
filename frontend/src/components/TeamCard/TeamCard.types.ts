export interface TeamCardProps {
  teamName: string;
  score: number;
  isActive: boolean;
  isEditMode: boolean;
  teamColor: string;
  onScoreChange: (teamId: number, amount: number) => void;
  highestTeam?: { id: number; score: number; color: string; name: string }; // Optional property
  teamId: number; // Ensure team ID is passed for score change
}
