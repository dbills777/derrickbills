import { MoonIcon } from "./Icons/MoonIcon";
import { SunIcon } from "./Icons/SunIcon";
import { useTheme } from "./theme-provider";
import { Switch } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const ThemeSwitch = (props) => {
    const { setTheme } = useTheme();

    return (
        <>
            <Button
                isIconOnly
                variant="outline"
                onClick={() => setTheme("light")}
            >
                <SunIcon />
            </Button>
            <Button
                isIconOnly
                variant="outline"
                onClick={() => setTheme("dark")}
            >
                <MoonIcon />
            </Button>
        </>
    );
};

export default function App() {
    return <ThemeSwitch />;
}
