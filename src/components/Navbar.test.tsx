import React from "react";
import Navbar from "./Navbar.tsx";
import { render } from "@testing-library/react";

describe("Navbar", () => {
  it("should render the navbar", () => {
    render(<Navbar />);
    expect(document.querySelector('.Navbar')).not.toBeNull();
  });
});
