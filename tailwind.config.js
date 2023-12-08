import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        defaultTheme: "light" | "dark", // default theme from the themes object
        defaultExtendTheme: "light" | "dark", // default theme to extend on custom themes
        // layout: LayoutTheme,
        themes: {
            light: {
                layout: {}, // light theme layout tokens
                colors: {}, // light theme colors
            },
            dark: {
                layout: {}, // dark theme layout tokens
                colors: {}, // dark theme colors
            },
            // ... custom themes
        },
        extend: {
            defaultTheme: {},
            themes: {},
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
    },

    darkMode: "class",
    plugins: [
        nextui({
            prefix: "ui", // prefix for themes variables
            addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
            defaultTheme: "light" | "dark", // default theme from the themes object
            defaultExtendTheme: "light", // default theme to extend on custom themes
            layout: {},
            themes: {
                light: {
                    colors: {
                        background: "#E3E3E3",
                        primary: {
                            DEFAULT: "#3758F2",
                            foreground: "#000000",
                        },
                        focus: "#3758F2",
                    },
                },
                dark: {
                    layout: {},
                    colors: {
                        background: "#000000",
                        foreground: "#ffffff",
                    },
                },
                "green-dark": {
                    extend: "dark", // <- inherit default values from dark theme
                    colors: {
                        background: "#000000",
                        foreground: "#ffffff",
                        primary: {
                            DEFAULT: "#64DA6C",
                            foreground: "#000000",
                        },
                        focus: "#64DA6C",
                    },
                    layout: {},
                },
            },
        }),
        forms,
    ],
};
