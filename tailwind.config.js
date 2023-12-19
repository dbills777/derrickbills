// import forms from "@tailwindcss/forms";
// import typography from "@tailwindcss/typography";

import daisyui from "daisyui";
const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: "1rem",
        },
        extend: {
            colors: {
                primary: {
                    50: "#e4ebff",
                    100: "#b5c3ff",
                    200: "#869cf9",
                    300: "#5674f5",
                    400: "#274cf1",
                    500: "#0e32d8",
                    600: "#0727a9",
                    700: "#031c7a",
                    800: "#00114c",
                    900: "#00061f",

                    DEFAULT: "#3758F2",
                    foreground: "#ffffff",
                },
                focus: "#F182F6",

                secondary: {
                    50: "#fce6ff",
                    100: "#eeb9f9",
                    200: "#e38df3",
                    300: "#dc5fed",
                    400: "#c532e6",
                    500: "#a11acd",
                    600: "#7412a0",
                    700: "#4c0b73",
                    800: "#290547",
                    900: "#0e001b",
                    DEFAULT: "#a11acd",
                },
                greenie: {
                    DEFAULT: "#2Efa3c",
                },
            },
            fontFamily: {
                sans: [
                    "Inter",
                    "ui-sans-serif",
                    "system-ui",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "Helvetica Neue",
                    "Arial",
                    "Noto Sans",
                    "sans-serif",
                    "Apple Color Emoji",
                    "Segoe UI Emoji",
                    "Segoe UI Symbol",
                    "Noto Color Emoji",
                ],
                serif: [
                    "ui-serif",
                    "Georgia",
                    "Cambria",
                    "Times New Roman",
                    "Times",
                    "serif",
                ],
                mono: [
                    "ui-monospace",
                    "SFMono-Regular",
                    "Menlo",
                    "Monaco",
                    "Consolas",
                    "Liberation Mono",
                    "Courier New",
                    "monospace",
                ],
            },
            typography: (theme) => ({
                fontFamily: {
                    sans: [
                        "Inter",
                        "ui-sans-serif",
                        "system-ui",
                        "-apple-system",
                        "BlinkMacSystemFont",
                        "Segoe UI",
                        "Roboto",
                        "Helvetica Neue",
                        "Arial",
                        "Noto Sans",
                        "sans-serif",
                        "Apple Color Emoji",
                        "Segoe UI Emoji",
                        "Segoe UI Symbol",
                        "Noto Color Emoji",
                    ],
                    serif: [
                        "ui-serif",
                        "Georgia",
                        "Cambria",
                        "Times New Roman",
                        "Times",
                        "serif",
                    ],
                    mono: [
                        "ui-monospace",
                        "SFMono-Regular",
                        "Menlo",
                        "Monaco",
                        "Consolas",
                        "Liberation Mono",
                        "Courier New",
                        "monospace",
                    ],
                },

                DEFAULT: {
                    css: {
                        color: theme("colors.gray.700"),
                        a: {
                            color: theme("colors.primary.500"),
                            "&:hover": {
                                color: theme("colors.primary.600"),
                            },
                        },
                    },
                },
                dark: {
                    css: {
                        color: theme("colors.gray.300"),
                        a: {
                            color: theme("colors.primary.500"),
                            "&:hover": {
                                color: theme("colors.primary.600"),
                            },
                        },
                        strong: {
                            color: theme("colors.gray.100"),
                        },
                        h1: {
                            color: theme("colors.gray.100"),
                        },
                        h2: {
                            color: theme("colors.gray.100"),
                        },
                        h3: {
                            color: theme("colors.gray.100"),
                        },
                        h4: {
                            color: theme("colors.gray.100"),
                        },
                        h5: {
                            color: theme("colors.gray.100"),
                        },
                        h6: {
                            color: theme("colors.gray.100"),
                        },
                        code: {
                            color: theme("colors.gray.100"),
                        },
                        figcaption: {
                            color: theme("colors.gray.500"),
                        },
                        blockquote: {
                            color: theme("colors.gray.100"),
                        },
                        thead: {
                            color: theme("colors.gray.100"),
                        },
                        tbody: {
                            color: theme("colors.gray.100"),
                        },
                        pre: {
                            color: theme("colors.gray.100"),
                        },
                        kbd: {
                            color: theme("colors.gray.100"),
                        },
                        samp: {
                            color: theme("colors.gray.100"),
                        },
                        code: {
                            color: theme("colors.gray.100"),
                        },
                        "a code": {
                            color: theme("colors.gray.100"),
                        },
                        hr: {
                            borderColor: theme("colors.gray.800"),
                        },
                        "ol > li::before": {
                            color: theme("colors.gray.500"),
                        },
                        "ul > li::before": {
                            backgroundColor: theme("colors.gray.500"),
                        },
                        strong: {
                            color: theme("colors.gray.100"),
                        },
                        thead: {
                            borderBottomColor: theme("colors.gray.700"),
                        },
                        "tbody tr": {
                            borderBottomColor: theme("colors.gray.800"),
                        },
                    },
                },
            }),
        },
    },
    variants: {
        extend: {
            typography: ["dark"],
            backgroundColor: ["active"],
            textColor: ["active"],
            borderColor: ["active"],
            ringColor: ["active"],
            ringWidth: ["active"],
            ringOffsetColor: ["active"],
            ringOffsetWidth: ["active"],
            ringOpacity: ["active"],
            ringOffsetOpacity: ["active"],
            ringOpacity: ["active"],
            ringOffsetOpacity: ["active"],
            ringOffsetWidth: ["active"],
            ringWidth: ["active"],
            ringColor: ["active"],
            ringOffsetColor: ["active"],
            ringOffsetWidth: ["active"],
            ringOpacity: ["active"],
            ringOffsetOpacity: ["active"],
            ringOpacity: ["active"],
            ringOffsetOpacity: ["active"],
            ringOffsetWidth: ["active"],
            ringWidth: ["active"],
            ringColor: ["active"],
            ringOffsetColor: ["active"],
            ringOffsetWidth: ["active"],
            ringOpacity: ["active"],
            ringOffsetOpacity: ["active"],
            ringOpacity: ["active"],
            ringOffsetOpacity: ["active"],
            ringOffsetWidth: ["active"],
            ringWidth: ["active"],
            ringColor: ["active"],
            ringOffsetColor: ["active"],
            ringOffsetWidth: ["active"],
            ringOpacity: ["active"],
            ringOffsetOpacity: ["active"],
            ringOpacity: ["active"],
            ringOffsetOpacity: ["active"],
            ringOffsetWidth: ["active"],
            ringWidth: ["active"],
            ringColor: ["active"],
            ringOffsetColor: ["active"],
            ringOffsetWidth: ["active"],
            ringOpacity: ["active"],
            ringOffsetOpacity: ["active"],
            ringOpacity: ["active"],
            ringOffsetOpacity: ["active"],
            ringOffsetWidth: ["active"],
            ringWidth: ["active"],
            ringColor: ["active"],
            ringOffsetColor: ["active"],
            ringOffsetWidth: ["active"],
            ringOpacity: ["active"],
            ringOffsetOpacity: ["active"],
            ringOpacity: ["active"],
            ringOffsetOpacity: ["active"],
            ringOffsetWidth: ["active"],
            ringWidth: ["active"],
            ringColor: ["active"],
            ringOffsetColor: ["active"],
            ringOffsetWidth: ["active"],
            ringOpacity: ["active"],
            ringOffsetOpacity: ["active"],
            ringOpacity: ["active"],
            ringOffsetOpacity: ["active"],
            ringOffsetWidth: ["active"],
            ringWidth: ["active"],
        },
    },
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
        nextui({
            prefix: "", // prefix for generated classes
            addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
            defaultExtendTheme: "dark", // default theme to extend on custom themes
            layout: {},
            colors: {
                // background: "hsl(var(--background))",
            },
            themes: {
                light: {
                    layout: {},

                    colors: {},
                },
                dark: {
                    layout: {},
                },
                zerodark: {
                    extend: "dark", // <- inherit default values from dark theme
                    colors: {
                        background: "#1E1E1F",
                        foreground: "#ffffff",
                        primary: {
                            50: "#e4ebff",
                            100: "#b5c3ff",
                            200: "#869cf9",
                            300: "#5674f5",
                            400: "#274cf1",
                            500: "#0e32d8",
                            600: "#0727a9",
                            700: "#031c7a",
                            800: "#00114c",
                            900: "#00061f",

                            DEFAULT: "#3758F2",
                            foreground: "#ffffff",
                        },
                        focus: "#F182F6",

                        secondary: {
                            50: "#fce6ff",
                            100: "#eeb9f9",
                            200: "#e38df3",
                            300: "#dc5fed",
                            400: "#c532e6",
                            500: "#a11acd",
                            600: "#7412a0",
                            700: "#4c0b73",
                            800: "#290547",
                            900: "#0e001b",
                            DEFAULT: "#a11acd",
                        },
                        greenie: {
                            DEFAULT: "#2Efa3c",
                        },
                    },
                    layout: {
                        disabledOpacity: "0.3",
                        radius: {
                            small: "4px",
                            medium: "6px",
                            large: "8px",
                        },
                        borderWidth: {
                            small: "1px",
                            medium: "2px",
                            large: "3px",
                        },
                    },
                },
            },
        }),
    ],

    daisyui: {
        theme: {
            // extend: {
            themes: ["light", "dark", "zerodark"],
            // }, // ...
        },
        // styled: true,
        themes: true, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: "dark", // name of one of the included themes for dark mode
        defaultTheme: "dark", // options: 'dark' | 'light' | 'cupcake'
        // base: true, // applies background color and foreground color for root element by default
        // styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        // themeRoot: ":root", // The element that receives theme color CSS variables
    },
    nextui: {
        prefix: "nextui-",
        styled: true,
        themes: ["light", "dark", "zero-dark"],
        darkTheme: "dark",
        defaultTheme: "light",
        base: true,
        utils: true,
        prefix: "",
        logs: true,
        themeRoot: ":root",
    },
};

// DaisyUI color utilitiy classes
// bg-primary
// to-primary
// via-primary
// from-primary
// text-primary
// ring-primary
// fill-primary
// caret-primary
// stroke-primary
// border-primary
// divide-primary
// accent-primary
// shadow-primary
// outline-primary
// decoration-primary
// placeholder-primary
// ring-offset-primary

// // You can also change the opacity
// bg-primary/50
