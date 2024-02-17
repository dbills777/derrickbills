import React, { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";

export default function ThemeToggle() {
    const targetElement = document.documentElement;
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (theme) {
            targetElement.classList = "";
            targetElement.classList.add(
                theme,
                "bg-background",
                "text-foreground"
            );
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
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",
        "dim",
        "nord",
        "sunset",
    ];

    return (
        <div className="w-32">
            <Select
                classNames={{
                    label: ["text-foreground", "font-bold", "text-sm"],
                }}
                variant="underlined"
                key={theme}
                isOpen={isOpen}
                label="Theme"
                value={theme}
                onOpenChange={(open) => setIsOpen(open)}
                className="w-full"
                onChange={(e) => {
                    handleClick(e.target.value);
                    setIsOpen(false);
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
