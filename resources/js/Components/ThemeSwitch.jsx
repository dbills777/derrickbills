import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "./Icons.jsx";

const ThemeSwitch = (props) => {
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
        const newTheme = isLightTheme ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);

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
