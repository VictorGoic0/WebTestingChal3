import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("renders successfully", () => {
    render(<Dashboard />);
  });
});
