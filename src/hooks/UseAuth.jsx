import React, { useContext, useState, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isNewUser, setIsNewUser] = useState(false); // New flag for tracking new users

  // Sign in (register) a new user
  const signin = (newUser) => {
    setUser(newUser);
    setIsNewUser(true); // Set flag when signing in a new user
  };

  // Log in an existing user
  const login = (existingUser) => {
    setUser(existingUser);
    setIsNewUser(false); // Set flag when logging in an existing user
  };

  // Log out the current user
  const logout = () => {
    setUser(null);
    setIsNewUser(false);
  };

  return (
    <AuthContext.Provider value={{ user, isNewUser, signin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
