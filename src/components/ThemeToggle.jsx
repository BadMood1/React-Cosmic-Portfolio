import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";

export const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            className={cn(" z-50 rounded-full transition-colors duration-300", "focus:outline-hidden")}
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-700" />
            )}
        </button>
    );
};
