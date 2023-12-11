import { MoonIcon } from "./Icons/MoonIcon";
import { SunIcon } from "./Icons/SunIcon";
// import { useTheme } from "./theme-provider";
import { Button } from "@nextui-org/react";
import { useState, useEffect } from "react";

const ThemeSwitch = (props) => {
    const [isLightTheme, setIsLightTheme] = useState(true);

    useEffect(() => {
        // Get the theme preference from local storage
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setIsLightTheme(savedTheme === "light");
            document.documentElement.setAttribute("data-theme", savedTheme); // Set theme on the root element
        }
    }, []);

    const toggleTheme = () => {
        setIsLightTheme((prevIsLightTheme) => !prevIsLightTheme);
        const newTheme = isLightTheme ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme); // Set theme on the root element

        // Save the theme preference to local storage
        localStorage.setItem("theme", newTheme);
    };

    return (
        <Button isIconOnly variant="outline" onClick={toggleTheme}>
            {isLightTheme ? <SunIcon /> : <MoonIcon />}
        </Button>
    );
};


export default function App() {
    return <ThemeSwitch />;
}
