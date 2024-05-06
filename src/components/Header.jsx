import { Bars3Icon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Header({ toggleSidebar }) {
  const isDark = document.documentElement.classList.contains("dark");
  const [darkMode, setDarkMode] = useState(isDark);

  const handleDarkMode = (mode) => {
    const classList = document.documentElement.classList;
    classList.remove(classList.contains("dark") ? "dark" : "light");
    classList.add(mode);
    setDarkMode(mode === "dark");
  };

  return (
    <header className="h-14 border-b border-gray-300 dark:border-gray-700 flex items-center justify-between px-4">
      <button
        className="rounded p-1 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200 text-gray-900"
        onClick={toggleSidebar}
      >
        <Bars3Icon className="h-6 w-6" />
      </button>
      <div className="flex items-center gap-8">
        <button
          className="dark:hover:text-gray-200 dark:text-gray-400"
          onClick={() => handleDarkMode(darkMode ? "light" : "dark")}
        >
          {darkMode ? (
            <MoonIcon className="h-6 w-6" />
          ) : (
            <SunIcon className="h-6 w-6" />
          )}
        </button>
        <img
          src="https://avatar.iran.liara.run/public"
          alt="user name"
          className="rounded-full h-8 w-8 "
        />
      </div>
    </header>
  );
}
