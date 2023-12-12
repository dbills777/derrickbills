import forms from "@tailwindcss/forms";
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
        forms,
        require("tailwindcss-animate"),
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
        require("daisyui", {
            themes: true,
            styled: true,
            themes: ["dark", "light", "nord", "dim"],
        }),
    ],
};
