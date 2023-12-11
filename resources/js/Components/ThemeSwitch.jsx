import { MoonIcon } from "./Icons/MoonIcon";
import { SunIcon } from "./Icons/SunIcon";
import { useTheme } from "./theme-provider";
import { Switch } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const ThemeSwitch = (props) => {
    const { setTheme } = useTheme();

    return (
        <>
            <Button variant="outline" onClick={() => setTheme("light")}>
                Light
            </Button>
            <Button variant="outline" onClick={() => setTheme("dark")}>
                Dark
            </Button>
        </>
    );
};

export default function App() {
    return <ThemeSwitch />;
}
