import { useContext } from "react";
import AuthContext from "../auth/context/AuthContext";

// Custom hook to use the AuthContext across the aplication
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
