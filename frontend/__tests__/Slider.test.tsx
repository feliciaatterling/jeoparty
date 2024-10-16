import { render, fireEvent, screen } from "@testing-library/react";
import Slider from "@/components/Slider/Slider";
import { vi } from "vitest";

const defaultProps = {
  min: 1,
  max: 6,
  defaultValue: 2,
  step: 1,
  value: 4, // Initial controlled value
  setValue: vi.fn(),
};

describe("Slider Component", () => {
  it("renders the slider with min and max values", () => {
    render(<Slider {...defaultProps} />);

    // Check if the min and max values are displayed
    expect(screen.getByText(defaultProps.min)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.max)).toBeInTheDocument();

    // Check if the slider is rendered
    const slider = screen.getByRole("slider");
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute(
      "aria-valuenow",
      defaultProps.value.toString()
    );
  });

  it("calls setValue when the slider value changes", () => {
    render(<Slider {...defaultProps} />);

    const slider = screen.getByRole("slider");

    // Change the slider value to 5 (valid value in range)
    fireEvent.change(slider, { target: { value: 5 } });

    expect(defaultProps.setValue).toHaveBeenCalledWith(5);
  });

  it("renders with the correct default value", () => {
    render(<Slider {...defaultProps} />);

    const slider = screen.getByRole("slider");
    expect(slider).toHaveAttribute("value", defaultProps.value.toString()); // Use controlled value
  });

  it("updates value when slider is moved", () => {
    render(<Slider {...defaultProps} />);

    const slider = screen.getByRole("slider");

    // Change the slider value to 3
    fireEvent.change(slider, { target: { value: 3 } });

    // Assert that setValue is called with the new value
    expect(defaultProps.setValue).toHaveBeenCalledWith(3);
  });
});
