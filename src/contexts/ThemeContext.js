import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

ThemeContextProvider = props => {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" }
  });

  toggleTheme = () => {
    theme.isLightTheme = !theme.isLightTheme;
    setTheme({ ...theme });
  };

  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
