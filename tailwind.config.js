// import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

const {nextui} = require("@nextui-org/react");
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
        mono: [ "'Monaspace Neon', monospace" ],
        humanistsans: [ "'Monaspace Argon', monospace" ],
        mechanicalsans: [ "'Monaspace Krypton', monospace" ],
        slabserrif: [ "'Monaspace Xenon', monospace" ],
        handwriting: [ "'Monaspace Radon', monospace" ],

        // options are Neon, Argon, Radon, Krypton, Xenon
      },
      typography: (theme) => ({
        fontFamily : {
          mono : [ "'Monaspace Neon', monospace" ],
          humanistsans : [ "'Monaspace Argon', monospace" ],
          mechanicalsans : [ "'Monaspace Krypton', monospace" ],
          slabserrif : [ "'Mechanical Xenon', monospace" ],
          handwriting : [ "'Mechanical Radon', monospace" ],
        },
      }),
    },
  },
  variants: {},
  content:
      [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
      ],

  plugins:
      [
        require("tailwindcss-animate"),
        require("@tailwindcss/typography"),
        require("daisyui"),
        nextui({
          prefix : "", // prefix for generated classes
          addCommonColors :
              true, // override common colors (e.g. "blue", "green", "pink").
          defaultExtendTheme :
              "dark", // default theme to extend on custom themes
          layout : {},
          colors : {
              // background: "hsl(var(--background))",
          },

          themes : {
            light : {
              layout : {},

              colors : {},
            },
            dark : {
              layout : {},
            },
            zerodark : {
              extend : "dark", // <- inherit default values from dark theme
              colors : {
                background : "#1E1E1F",
                foreground : "#ffffff",
                primary : {
                  50 : "#e4ebff",
                  100 : "#b5c3ff",
                  200 : "#869cf9",
                  300 : "#5674f5",
                  400 : "#274cf1",
                  500 : "#0e32d8",
                  600 : "#0727a9",
                  700 : "#031c7a",
                  800 : "#00114c",
                  900 : "#00061f",

                  DEFAULT : "#3758F2",
                  foreground : "#ffffff",
                },
                focus : "#F182F6",

                secondary : {
                  50 : "#fce6ff",
                  100 : "#eeb9f9",
                  200 : "#e38df3",
                  300 : "#dc5fed",
                  400 : "#c532e6",
                  500 : "#a11acd",
                  600 : "#7412a0",
                  700 : "#4c0b73",
                  800 : "#290547",
                  900 : "#0e001b",
                  DEFAULT : "#a11acd",
                },
                greenie : {
                  DEFAULT : "#2Efa3c",
                },
              },
              layout : {
                disabledOpacity : "0.3",
                radius : {
                  small : "4px",
                  medium : "6px",
                  large : "8px",
                },
                borderWidth : {
                  small : "1px",
                  medium : "2px",
                  large : "3px",
                },
              },
            },
          },
        }),
      ],

  daisyui: {
    theme: {
      // extend: {
      themes: [ "light", "dark", "zerodark" ],
      // }, // ...
    },
    styled: true,
    themes: true,      // false: only light + dark | true: all themes | array:
                       // specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    defaultTheme: "dark", // options: 'dark' | 'light' | 'cupcake'
    base: true, // applies background color and foreground color for root
                // element by default
    styled:
        true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "",  // prefix for daisyUI classnames (components, modifiers and
                 // responsive class names. Not colors)
    logs: true,  // Shows info about daisyUI version and used config in the
                 // console when building your CSS
    // themeRoot: ":root", // The element that receives theme color CSS
    // variables
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
