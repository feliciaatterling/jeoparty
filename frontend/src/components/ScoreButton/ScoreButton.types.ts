export interface ScoreButtonProps {
    onClick: () => void;
    action: "add" | "subtract";
    teamColor: string;
    isActive: boolean;
  }
  