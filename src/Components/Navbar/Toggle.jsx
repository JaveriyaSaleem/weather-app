import React, { useState, useEffect } from "react";

const Toggle = () => {
    const [theme, setTheme] = useState("dark"); // Default theme

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    // Update the body class whenever the theme changes
    useEffect(() => {
        document.body.className = ""; // Clear all body classes
        document.body.classList.add(`theme-${theme}`);
    }, [theme]);

    return (
        <div className="text-center w-48">
            <button
                onClick={toggleTheme}
                className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-full"
            >
                 {theme === "light" ? "Light" : "Dark"} Mode
            </button>
        </div>
    );
};

export default Toggle;
