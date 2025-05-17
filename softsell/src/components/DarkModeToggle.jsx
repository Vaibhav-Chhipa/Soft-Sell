import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-3 py-2 rounded shadow hover:scale-105 transition"
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default DarkModeToggle;
