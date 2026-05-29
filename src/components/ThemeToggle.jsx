"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = !dark;
    setDark(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="flex h-11 w-11 items-center justify-center rounded-full border text-lg font-black transition hover:-translate-y-0.5"
      style={{
        borderColor: "var(--border)",
        background: "var(--surface)",
        color: "var(--text)",
      }}
    >
      {dark ? "☀" : "☾"}
    </button>
  );
}