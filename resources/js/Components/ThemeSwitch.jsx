import { useTheme } from "./theme-provider";
import { MoonIcon } from "./Icons/MoonIcon";
import { SunIcon } from "./Icons/SunIcon";
import { VisuallyHidden, useSwitch } from "@nextui-org/react";

const ThemeSwitch = (props) => {
    const { setTheme } = useTheme();

    const {
        Component,
        slots,
        isSelected,
        getBaseProps,
        getInputProps,
        getWrapperProps,
    } = useSwitch(props);

    return (
        <> 
            <Component {...getBaseProps()}>
                <VisuallyHidden>
                    <input {...getInputProps()} />
                </VisuallyHidden>
                <div
                    {...getWrapperProps()}
                    className={slots.wrapper({
                        class: [
                            "w-8 h-8",
                            "flex items-center justify-center",
                            "rounded-lg bg-default-100 hover:bg-default-200",
                        ],
                    })}
                >
                    {isSelected ? setTheme("light") : setTheme("dark")}
                    {isSelected ? <SunIcon /> : <MoonIcon />}
                </div>
            </Component>
            <p className="text-default-500 select-none">
            </p>
        </>
    );
};

export default function App() {
    return <ThemeSwitch />;
}
