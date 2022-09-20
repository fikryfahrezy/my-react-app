import { test, expect } from "vitest";
import { render, screen } from "~/utils/rtlRender";

import Page from "./App";

test("a", async () => {
  render(<Page />);
  expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
});

