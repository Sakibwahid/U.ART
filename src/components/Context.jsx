import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();


export const PageContext = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
      document.documentElement.classList.toggle("dark", theme === "dark");
      document.documentElement.classList.toggle("light", theme === "light");
      localStorage.setItem("theme", theme);
  }, [theme]);
  
    
    const ThemeToggle = () => {setTheme(theme === "light" ? "dark" : "light") };

    return (
        <Context.Provider value={{ theme , ThemeToggle }}>
            {children}
        </Context.Provider>
    );
};