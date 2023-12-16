import React, { useState, useEffect } from "react";
import { Select, SelectItem, Button } from "@nextui-org/react";

export default function ThemeToggle() {
    const targetElement = document.documentElement;
    const { dataset, classList, className } = document.documentElement;

    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    const defaultTheme = localStorage.getItem("theme");
    // console.log("****dataset", dataset, classList, className, defaultTheme);

    const [isOpen, setIsOpen] = useState(false); // Use useState instead of React.useState

    useEffect(() => {
        if (theme) {
            targetElement.classList.add(theme);
            targetElement.dataset.theme = theme;
            console.log("data-theme: ", targetElement.dataset.theme);
            localStorage.setItem("theme", theme);
        } else {
            targetElement.classList.add("light");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    const handleClick = (theme) => {
        targetElement.classList.remove("theme");
        targetElement.classList.remove("light");
        targetElement.classList.remove("dark");
        targetElement.classList.add(theme);
        setTheme(theme);
    };

    const themes = [
        "light",
        "dark",
        // "cupcake",
        // "bumblebee",
        // "emerald",
        // "corporate",
        // "synthwave",
        // "retro",
        // "cyberpunk",
        // "valentine",
        // "halloween",
        // "garden",
        // "forest",
        "aqua",
        // "lofi",
        // "pastel",
        // "fantasy",
        // "wireframe",
        // "black",
        // "luxury",
        "dracula",
        // "cmyk",
        // "autumn",
        // "business",
        // "acid",
        // "lemonade",
        // "night",
        // "coffee",
        // "winter",
        // "dim",
        // "nord",
        // "sunset",
    ];

    return (
        <div className="w-32">
            <Select
                classNames={{
                    label: ["text-foreground", "font-bold", "text-sm"],
                    placeholder: ["text-foreground", "font-bold", "text-sm"],
                }}
                variant="underlined"
                key={theme}
                isOpen={isOpen}
                label="Theme"
                placeholder={theme}
                value={theme}
                onOpenChange={(open) => setIsOpen(open)}
                className="w-full"
                onChange={(e) => {
                    handleClick(e.target.value);
                    setIsOpen(false); // Close the dropdown after selecting a theme
                }}
            >
                {themes.map((theme) => (
                    <SelectItem color="primary" key={theme}>
                        {theme}
                    </SelectItem>
                ))}
            </Select>
        </div>
    );
}
