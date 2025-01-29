import { beforeEach, describe, expect, it, vi } from "vitest";
import { MOCK_EMAIL, MOCK_PASSWORD } from "../constant/authConstant";
import { waitFor, screen } from "@testing-library/react";
import LoginForm from "../components/login";
import { render } from "./test-utils";

describe("LoginForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders login form correctly", () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /sign in/i })
    ).toBeInTheDocument();
  });

  it("shows validation errors for empty fields", async () => {
    const { user } = render(<LoginForm />);

    const submitButton = screen.getByRole("button", { name: /sign in/i });
    await user.click(submitButton);

    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/password is required/i)
    ).toBeInTheDocument();
  });

  it("handles successful login", async () => {
    const { user } = render(<LoginForm />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    await user?.type(emailInput, MOCK_EMAIL);
    await user?.type(passwordInput, MOCK_PASSWORD);
    await user?.click(screen.getByRole("button", { name: /sign in/i }));

    // Check if login was successful
    await waitFor(() => {
      expect(window.localStorage.getItem("user")).toBeTruthy();
    });
  });
});
