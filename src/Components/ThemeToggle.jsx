import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("corporate");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "corporate" ? "night" : "corporate");
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-4xl md:p-2 bg-base-400"
    >
      {theme === "corporate" ? "🌙 Dark" : "🌞 Light"}
    </button>
  );
};

export default ThemeToggle;