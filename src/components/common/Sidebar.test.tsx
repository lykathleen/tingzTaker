import React from "react";
import Sidebar from "./Sidebar.tsx";
import { render } from "@testing-library/react";

describe("Sidebar", () => {
  it("should render the navbar", () => {
    render(<Sidebar />);
    expect(document.querySelector('Sidebar')).not.toBeNull();
  });
});
