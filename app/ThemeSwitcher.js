"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes"
import { FaMoon, FaSun} from "react-icons/fa";

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    const handleThemeToggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div>
            <button onClick={handleThemeToggle}>
            <a className="hs-dark-mode-active:hidden hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500">
            {theme === "light" ? (<FaMoon className="w-4 h-4"/>) :(<FaSun className="w-4 h-4"/>)}
            </a>
            </button>
        </div>
    );
}

export default ThemeSwitcher;