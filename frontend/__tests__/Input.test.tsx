import { render, fireEvent, screen } from "@testing-library/react";
import { vi } from "vitest";
import Input from "@/components/Input/Input";

const setValueMock = vi.fn();

describe("Input Component", () => {
  it("should render the input with the correct label", () => {
    render(
      <Input
        label="Category 1"
        value=""
        setValue={setValueMock}
        multiline={false}
        error={false}
      />
    );

    // Check if the input label is displayed
    const inputElement = screen.getByLabelText("Category 1");
    expect(inputElement).toBeInTheDocument();
  });

  it("should call setValue when user types in the input", () => {
    render(
      <Input
        label="Category 1"
        value=""
        setValue={setValueMock}
        multiline={false}
        error={false}
      />
    );

    const inputElement = screen.getByLabelText("Category 1");

    // Simulate typing into the input
    fireEvent.change(inputElement, { target: { value: "Science" } });

    // Ensure the mocked setValue function is called with the correct value
    expect(setValueMock).toHaveBeenCalledWith("Science");
  });

  it("should render a multiline input when multiline is true", () => {
    render(
      <Input
        label="Category 1"
        value="Science"
        setValue={setValueMock}
        multiline={true} // Set multiline to true
        error={false}
      />
    );

    const inputElement = screen.getByLabelText("Category 1");

    // Ensure the input is rendered as a textarea when multiline is true
    expect(inputElement.tagName).toBe("TEXTAREA");
  });
});
