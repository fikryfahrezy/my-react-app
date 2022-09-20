import "@testing-library/jest-dom";
import { jest } from "@jest/globals";

Object.defineProperty(window, "matchMedia", {
  value: () => {
    return {
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  },
});
