import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { HelloWorld } from "./HelloWorld";

it("Text displays", () => {
    render(<HelloWorld />);

    expect(screen.getByText("Hello World")).toHaveTextContent("Hello World");
});
