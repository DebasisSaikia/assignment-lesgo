// src/test/test-utils.tsx
import React from "react";
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../auth/context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import userEvent from "@testing-library/user-event";

interface WrapperProps {
  children: React.ReactNode;
}

interface CustomRenderResult extends RenderResult {
  user: ReturnType<typeof userEvent.setup>;
}

interface ExtendedRenderOptions extends Omit<RenderOptions, "wrapper"> {
  route?: string;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export function render(
  ui: React.ReactElement,
  { route = "/", ...renderOptions }: ExtendedRenderOptions = {}
): CustomRenderResult {
  window.history.pushState({}, "Test page", route);

  function Wrapper({ children }: WrapperProps) {
    return (
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>{children}</AuthProvider>
        </QueryClientProvider>
      </BrowserRouter>
    );
  }

  const user = userEvent.setup();
  return {
    user,
    ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

// Re-export everything
export * from "@testing-library/react";
