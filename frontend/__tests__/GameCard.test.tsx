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
    // Match "Paris" instead of "Who Is Paris?" for flexibility
    expect(
      screen.getByText((content) => content.includes("Paris"))
    ).toBeInTheDocument();
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

    // Find all the elements with the text "X"
    const closeButtons = screen.getAllByText("X");

    // The visible "X" button is the one with higher opacity
    const visibleCloseButton = closeButtons.find(
      (button) => getComputedStyle(button).opacity !== "0"
    );

    // Click the visible "X" button
    fireEvent.click(visibleCloseButton!);

    // Check if onClose is called
    expect(mockOnClose).toHaveBeenCalled();
  });
});
