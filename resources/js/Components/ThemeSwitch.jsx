import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { DarkTheme, LightTheme } from "./Icons.jsx";

export default function ThemeSwitch(props) {
    const [isLightTheme, setIsLightTheme] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setIsLightTheme(savedTheme === "light");
            document.documentElement.setAttribute("data-theme", savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        setIsLightTheme((prevIsLightTheme) => !prevIsLightTheme);
        document.documentElement.setAttribute(
            "data-theme",
            isLightTheme ? "dark" : "light"
        );
        document.documentElement.classList.add("transition");
        window.setTimeout(() => {
            document.documentElement.classList.remove("transition");
        }, 300);

        localStorage.setItem("theme", isLightTheme ? "dark" : "light");
    };

    return (
        <>
            <Button
                color="black"
                onClick={toggleTheme}
                className="flex swap swap-rotate items-center justify-center"
                whileHover="hover"
                whileTap="tap"
            >
                {isLightTheme ? (
                    <LightTheme className="swap-off" />
                ) : (
                    <DarkTheme className="swap-on" />
                )}
            </Button>
        </>
    );
}
