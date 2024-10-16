import { render, screen, fireEvent } from "@testing-library/react";
import Dashboard from "@/components/Dashboard/Dashboard";
import { vi } from "vitest";

describe("Dashboard Component", () => {
  const mockOnScoreChange = vi.fn();
  const mockOnEndGame = vi.fn();

  const defaultProps = {
    teams: [
      { id: 1, name: "Team A", score: 200, color: "red" },
      { id: 2, name: "Team B", score: 150, color: "blue" },
    ],
    currentTurnId: 1,
    onScoreChange: mockOnScoreChange,
    onEndGame: mockOnEndGame,
  };

  it("should display team names and scores", () => {
    render(<Dashboard {...defaultProps} />);
    expect(screen.getByText("Team A")).toBeInTheDocument();
    expect(screen.getByText("$200")).toBeInTheDocument();
    expect(screen.getByText("Team B")).toBeInTheDocument();
    expect(screen.getByText("$150")).toBeInTheDocument();
  });

  it('should toggle edit mode when "EDIT GAME" button is clicked', () => {
    render(<Dashboard {...defaultProps} />);
    const editButton = screen.getByText("EDIT GAME");

    // Click to toggle edit mode
    fireEvent.click(editButton);
    expect(screen.getByText("DONE EDITING")).toBeInTheDocument();

    // Click again to toggle back to normal mode
    fireEvent.click(screen.getByText("DONE EDITING"));
    expect(screen.getByText("EDIT GAME")).toBeInTheDocument();
  });

  it("should call onScoreChange when score is increased in edit mode", () => {
    render(<Dashboard {...defaultProps} />);

    // Toggle edit mode
    fireEvent.click(screen.getByText("EDIT GAME"));

    // Find the "+" button (increase score)
    const teamAPlusButton = screen.getAllByRole("button", { name: /\+/i })[0];
    fireEvent.click(teamAPlusButton);

    // Ensure onScoreChange was called with the correct arguments (teamId, amount)
    expect(mockOnScoreChange).toHaveBeenCalledWith(1, 100);
  });

  it("should call onScoreChange when score is decreased in edit mode", () => {
    render(<Dashboard {...defaultProps} />);

    // Toggle edit mode
    fireEvent.click(screen.getByText("EDIT GAME"));

    // Find the "-" button (decrease score)
    const teamAMinusButton = screen.getAllByRole("button", { name: /\-/i })[0];
    fireEvent.click(teamAMinusButton);

    // Ensure onScoreChange was called with the correct arguments (teamId, amount)
    expect(mockOnScoreChange).toHaveBeenCalledWith(1, -100);
  });

  it("should call onEndGame when 'END GAME' button is clicked", () => {
    render(<Dashboard {...defaultProps} />);

    // Simulate clicking the end game button
    fireEvent.click(screen.getByText("END GAME"));

    // Ensure onEndGame is called
    expect(mockOnEndGame).toHaveBeenCalled();
  });
});
