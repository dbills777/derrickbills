import { useState, useEffect } from "react";

const App = () => {
    // const targetElement = document.documentElement;
    const { dataset, classList, className } = document.documentElement;
    const targetElement = document.documentElement;
    console.table("dataset: ", dataset);
    console.table("classList: ", classList);
    console.table("className: ", className);

    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    useEffect(() => {
        if (theme) {
            targetElement.classList.add(theme);
            targetElement.dataset.theme = theme;
            localStorage.setItem("theme", theme);
        } else {
            targetElement.classList.add("light");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    const handleClick = (value) => {
        targetElement.classList.remove("theme");
        targetElement.classList.remove("light");
        targetElement.classList.remove("dark");

        targetElement.classList.add(value);
        setTheme(value);
    };

    return (
        <label className="swap swap-flip text-4xl">
            <input className="opacity-0" type="checkbox" />
            <div onClick={() => handleClick("light")} className="swap-on">
                😈
            </div>
            <div onClick={() => handleClick("dark")} className="swap-off">
                😇
            </div>
        </label>
    );
};

export default App;
