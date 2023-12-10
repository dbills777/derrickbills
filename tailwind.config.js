import forms from "@tailwindcss/forms";
import defaultTheme from "tailwindcss/defaultTheme";
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

    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        colors: {
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: {
                DEFAULT: "hsl(var(--primary))",
                foreground: "hsl(var(--primary-foreground))",
            },
            secondary: {
                DEFAULT: "hsl(var(--secondary))",
                foreground: "hsl(var(--secondary-foreground))",
            },
            destructive: {
                DEFAULT: "hsl(var(--destructive))",
                foreground: "hsl(var(--destructive-foreground))",
            },
            muted: {
                DEFAULT: "hsl(var(--muted))",
                foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
                DEFAULT: "hsl(var(--accent))",
                foreground: "hsl(var(--accent-foreground))",
            },
            popover: {
                DEFAULT: "hsl(var(--popover))",
                foreground: "hsl(var(--popover-foreground))",
            },
            card: {
                DEFAULT: "hsl(var(--card))",
                foreground: "hsl(var(--card-foreground))",
            },
            borderRadius: {
                lg: `var(--radius)`,
                md: `calc(var(--radius) - 2px)`,
                sm: "calc(var(--radius) - 4px)",
            },
        },
        extend: {
            colors: {
                background: "hsl(var(--background))",
            },
            fontFamily: {
                sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },

    plugins: [
        forms,
        require("tailwindcss-animate"),
        nextui({
            addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
            defaultTheme: "light", // default theme from the themes object
            defaultExtendTheme: "light", // default theme to extend on custom themes
            layout: {
                spacingUnit: 4, // in px
                disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
                dividerWeight: "1px", // h-divider the default height applied to the divider component
                fontSize: {
                    tiny: "0.75rem", // text-tiny
                    small: "0.875rem", // text-small
                    medium: "1rem", // text-medium
                    large: "1.125rem", // text-large
                },
                lineHeight: {
                    tiny: "1rem", // text-tiny
                    small: "1.25rem", // text-small
                    medium: "1.5rem", // text-medium
                    large: "1.75rem", // text-large
                },
                radius: {
                    small: "25px", // rounded-small
                    medium: "12px", // rounded-medium
                    large: "14px", // rounded-large
                },
                borderWidth: {
                    small: "1px", // border-small
                    medium: "2px", // border-medium (default)
                    large: "3px", // border-large
                },
                colors: {
                            background: "hsl(var(--background))",
                    },
            },
            themes: {
                light: {
                    layout: {
                        hoverOpacity: 0.8, //  this value is applied as opacity-[value] when the component is hovered
                        boxShadow: {
                            // shadow-small
                            small: "0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
                            // shadow-medium
                            medium: "0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
                            // shadow-large
                            large: "0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
                        },
                    },

                    colors: {},
                },
                dark: {
                    layout: {
                        hoverOpacity: 0.9, //  this value is applied as opacity-[value] when the component is hovered
                        boxShadow: {
                            // shadow-small
                            small: "0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
                            // shadow-medium
                            medium: "0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
                            // shadow-large
                            large: "0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
                        },
                    },
                    
                },

                // ... custom themes
            },
        }),
    ],
};
