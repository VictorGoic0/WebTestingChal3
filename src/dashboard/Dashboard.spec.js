import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("renders successfully", () => {
    render(<Dashboard />);
  });
  it("gate opens and closes successfully when unlocked", () => {
    const { getByText } = render(<Dashboard />);
    const gate = getByText(/Close/);
    fireEvent.click(gate);
    fireEvent.click(gate);
    fireEvent.click(gate);
    fireEvent.click(gate);
    getByText(/Open/);
  });
  it("gate locks successfully", () => {
    const { getByText } = render(<Dashboard />);
    const lock = getByText(/Lock/);
    const gate = getByText(/Close/);
    fireEvent.click(gate);
    fireEvent.click(lock);
    getByText(/Locked/);
    getByText(/Closed/);
  });
  it("gate locks and unlocks successfully", () => {
    const { getByText } = render(<Dashboard />);
    const lock = getByText(/Lock/);
    const gate = getByText(/Close/);
    fireEvent.click(gate);
    fireEvent.click(lock);
    fireEvent.click(lock);
    getByText(/Unlocked/);
    getByText(/Closed/);
  });
  it("locks only when gate is closed, opens only when unlocked", () => {
    const { getByText } = render(<Dashboard />);
    const lock = getByText(/Lock/);
    const gate = getByText(/Close/);
    fireEvent.click(lock);
    fireEvent.click(gate);
    fireEvent.click(lock);
    fireEvent.click(gate);
    getByText(/Locked/);
    getByText(/Closed/);
  });
});
