/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe("<Counter/>", () => {
  it("should satrt on 0", () => {
    render(<Counter />);
    expect(screen.getByTestId("counter-number")).toHaveTextContent("0");
  });

  it("should increment on click", () => {
    render(<Counter />);
    expect(screen.getByTestId("counter-number")).toHaveTextContent("0");
    userEvent.click(screen.getByTestId("counter-button"));
    expect(screen.getByTestId("counter-number")).toHaveTextContent("1");
  });

  it("should change the document title on click", () => {
    render(<Counter />);
    expect(screen.getByTestId("counter-number")).toHaveTextContent("0");
    userEvent.click(screen.getByTestId("counter-button"));
    expect(screen.getByTestId("counter-number")).toHaveTextContent("1");
  });

  it("should skip 5", () => {
    render(<Counter />);
    userEvent.click(screen.getByTestId("counter-button"));
    userEvent.click(screen.getByTestId("counter-button"));
    userEvent.click(screen.getByTestId("counter-button"));
    userEvent.click(screen.getByTestId("counter-button"));
    expect(screen.getByTestId("counter-number")).toHaveTextContent("4");
    userEvent.click(screen.getByTestId("counter-button"));
    expect(screen.getByTestId("counter-number")).toHaveTextContent("6");
  });
});
