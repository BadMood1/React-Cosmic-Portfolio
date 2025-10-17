import { useState, useEffect } from "react";

export const useTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");

        console.log("useEffect отработал ");
        // Если тема сохранена - используем её, иначе ставим темную
        if (storedTheme === "light") {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        } else {
            // По умолчанию темная тема
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    }, []); // React специально сохраняет одни и те же функции setState между рендерами. Необязательно вносить setState ф-цию в dependencies array

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return [isDarkMode, toggleTheme];
};
