import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext.jsx";

function ThemePanel() {
  const { theme, toggleTheme } = useContext(GlobalContext);

  const styles = {
    padding: "16px",
    margin: "8px 0",
    borderRadius: "8px",
    backgroundColor: theme === "light" ? "#f5f5f5" : "#333",
    color: theme === "light" ? "#000" : "#fff",
  };

  return (
    <div style={styles}>
      <h2>Theme Panel</h2>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemePanel;