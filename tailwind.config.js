// import forms from "@tailwindcss/forms";
// import typography from "@tailwindcss/typography";

import daisyui from "daisyui";
const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],

    plugins: [
        require("tailwindcss-animate"),
        require("daisyui"),
        // add daisyUI plugin
        nextui({
            addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
            defaultExtendTheme: "dark", // default theme to extend on custom themes
            layout: {},
            colors: {
                background: "hsl(var(--background))",
            },
            themes: {
                light: {
                    layout: {},

                    colors: {},
                },
                dark: {
                    layout: {},
                },
            },
        }),
    ],
    daisyui: {
        theme: {
            extend: {
                themes: [
                    "dark",
                    "corporate",
                    "light",
                    "cupcake",
                    "bumblebee",
                    "emerald",
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
                ],
            }, // ...
        },
        styled: true,
        themes: true, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: "synthwave", // name of one of the included themes for dark mode

        base: false, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        themeRoot: ":root", // The element that receives theme color CSS variables
    },
};
