import { render, screen, fireEvent } from "@testing-library/react";
import GameCard from "@/components/GameCard/GameCard";
import { vi } from "vitest";

describe("GameCard Component", () => {
  const mockOnBack = vi.fn();
  const mockOnClose = vi.fn(); // Mock onClose

  const defaultProps = {
    question: "What is the capital of France?",
    answer: "Paris",
    category: "Geography",
    value: 200,
    onBack: mockOnBack,
    onClose: mockOnClose, // Add onClose prop
  };

  it("should display the question by default", () => {
    render(<GameCard {...defaultProps} />);
    expect(
      screen.getByText("What is the capital of France?")
    ).toBeInTheDocument();
  });

  it('should switch to answer mode when "SHOW ANSWER" button is clicked', () => {
    render(<GameCard {...defaultProps} />);
    fireEvent.click(screen.getByText("SHOW ANSWER"));
    expect(screen.getByText("Who Is Paris?")).toBeInTheDocument();
  });

  it('should call onBack with true when "YES" is clicked', () => {
    render(<GameCard {...defaultProps} />);
    fireEvent.click(screen.getByText("SHOW ANSWER"));
    fireEvent.click(screen.getByText("YES"));
    expect(mockOnBack).toHaveBeenCalledWith(true);
  });

  it('should call onBack with false when "NO" is clicked', () => {
    render(<GameCard {...defaultProps} />);
    fireEvent.click(screen.getByText("SHOW ANSWER"));
    fireEvent.click(screen.getByText("NO"));
    expect(mockOnBack).toHaveBeenCalledWith(false);
  });

  it('should close the card when the "X" button is clicked', () => {
    render(<GameCard {...defaultProps} />);
    fireEvent.click(screen.getByText("X"));
    expect(mockOnClose).toHaveBeenCalled(); // Check if onClose is called
  });
});
