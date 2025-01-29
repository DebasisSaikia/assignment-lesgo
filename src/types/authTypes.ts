import { ReactNode } from "react";

export interface User {
  id?: string;
  email: string;
  name: string;
}

// src/types/Auth.ts
export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  updateProfile: (updatedProfile: Partial<User>) => void;
}

export interface LoginFormInputs {
  email: string;
  password: string;
}

export interface EditDetailsInput {
  email: string;
  name: string;
}

export interface ProfileFormInputs {
  name: string;
  email: string;
}

export interface AuthProviderProps {
  children: ReactNode;
}
