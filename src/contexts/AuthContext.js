import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
