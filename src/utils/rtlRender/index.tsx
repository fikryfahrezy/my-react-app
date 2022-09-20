import React, { FC, ReactElement } from "react";
import { render } from "@testing-library/react";

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const customRender = (ui: ReactElement) => {
  return { ...render(ui, { wrapper: AllTheProviders }) };
};

export * from "@testing-library/react";
export { customRender as render };
