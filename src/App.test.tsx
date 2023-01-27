import React from "react";
import App from "./App.tsx";
import { render } from "@testing-library/react";

describe("Navbar", () => {
  it("should render the navbar", () => {
    render(<App />);
    expect(document.querySelector('.App')).not.toBeNull();
  });
});
