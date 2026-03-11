import { createContext, useState } from "react";

// 1. Create the Context object
// eslint-disable-next-line react-refresh/only-export-components
export const GlobalContext = createContext();

// 2. Create Provider component
export function GlobalProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  const value = {
    theme,
    count,
    toggleTheme,
    increment,
    decrement,
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
}
