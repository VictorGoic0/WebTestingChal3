import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "./Display";

describe("<Display />", () => {
  it("renders successfully", () => {
    render(<Display />);
  });
});
