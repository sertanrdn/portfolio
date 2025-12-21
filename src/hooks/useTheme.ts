import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window === "undefined") return "light";
        const storedTheme = localStorage.getItem("theme") as Theme | null;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        return storedTheme ?? (prefersDark ? "dark" : "light");
    });

    // Sync theme changes
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Toggle helper
    const toggle = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }

    return { theme, toggle };
}