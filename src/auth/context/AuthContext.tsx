import React, { createContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router";
import { AuthContextType, AuthProviderProps, User } from "../../types";
import { MOCK_EMAIL, MOCK_PASSWORD } from "../../constant/authConstant";

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => false,
  logout: () => {},
  updateProfile: () => {},
});

// AuthProvider Component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const navigate = useNavigate();

  // Check for existing auth state in localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  // Login method
  const login = (email: string, password: string): boolean => {
    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      const userData: User = {
        email,
        name: "John Doe",
        id: "1",
      };
      setUser(userData);
      setIsAuthenticated(true);

      // saving in local storage for persistance
      localStorage.setItem("user", JSON.stringify(userData));

      // Navigate to dashboard
      // navigate("/dashboard");
      return true;
    }
    return false;
  };

  // Logout method
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
    // navigate("/login");
  };

  // Update user profile
  const updateProfile = (updatedProfile: Partial<User>) => {
    setUser((prevUser) => {
      if (!prevUser) return null;
      const updatedUser = { ...prevUser, ...updatedProfile };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const contextValue: AuthContextType = {
    user,
    isAuthenticated,
    login,
    logout,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
