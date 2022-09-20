import React from "react";
import { test, expect } from "@jest/globals";
import { render, screen } from "~/utils/rtlRender";

import Page from "./App";

test("a", async () => {
  render(<Page />);
  expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
});
