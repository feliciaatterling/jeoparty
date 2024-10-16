import { render, fireEvent, screen } from "@testing-library/react";
import ColorPicker from "@/components/ColorPicker/ColorPicker";
import { vi } from "vitest";

const defaultProps = {
  color: "#ff0000",
  setColor: vi.fn(),
  defaultColors: ["#ff0000", "#00ff00", "#0000ff"],
};

describe("ColorPicker Component", () => {
  it("renders the color circle", () => {
    render(<ColorPicker {...defaultProps} />);
    const colorCircle = screen.getByRole("button");
    expect(colorCircle).toBeInTheDocument();
    expect(colorCircle).toHaveStyle(`background-color: ${defaultProps.color}`);
  });

  it("toggles the color picker when the circle is clicked", () => {
    render(<ColorPicker {...defaultProps} />);
    const colorCircle = screen.getByRole("button");

    expect(screen.queryByRole("color-picker")).not.toBeInTheDocument();

    fireEvent.click(colorCircle);
    expect(screen.getByRole("color-picker")).toBeInTheDocument();

    fireEvent.click(colorCircle);
    expect(screen.queryByRole("color-picker")).not.toBeInTheDocument();
  });

  it("calls setColor when a new color is selected", () => {
    render(<ColorPicker {...defaultProps} />);
    const colorCircle = screen.getByRole("button");

    fireEvent.click(colorCircle);
    const defaultColorOption = screen.getAllByRole("color-option")[1]; // Get the second color option

    fireEvent.click(defaultColorOption);
    expect(defaultProps.setColor).toHaveBeenCalledWith(
      defaultProps.defaultColors[1]
    );
  });

  it("closes the color picker when clicking outside", () => {
    render(<ColorPicker {...defaultProps} />);
    const colorCircle = screen.getByRole("button");

    fireEvent.click(colorCircle);
    expect(screen.getByRole("color-picker")).toBeInTheDocument();

    fireEvent.mouseDown(document);
    expect(screen.queryByRole("color-picker")).not.toBeInTheDocument();
  });

  it("renders default color options", () => {
    render(<ColorPicker {...defaultProps} />);
    fireEvent.click(screen.getByRole("button"));

    // Check if the default colors are rendered
    const colorCircles = screen.getAllByRole("color-option"); // Get all color options
    expect(colorCircles).toHaveLength(defaultProps.defaultColors.length);
  });
});
