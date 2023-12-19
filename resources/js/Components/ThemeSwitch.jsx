// import { useEffect, useState } from "react";
// import { Switch } from "@nextui-org/react";
// import { MoonIcon, SunIcon } from "./Icons.jsx";

// export default function ThemeSwitch() {
//     // const targetElement = document.documentElement;
//     const { dataset, classList, className } = document.documentElement;
//     const targetElement = document.documentElement;
//     console.table("dataset: ", dataset);
//     console.table("classList: ", classList);
//     console.table("className: ", className);

//     const [theme, setTheme] = useState(localStorage.getItem("theme"));

//     useEffect(() => {
//         if (theme) {
//             targetElement.classList = "";
//             targetElement.classList.add(theme);
//             targetElement.dataset.theme = theme;
//             console.log("data-theme: ", targetElement.dataset.theme);
//             localStorage.setItem("theme", theme);
//         } else {
//             targetElement.classList.add("light");
//             localStorage.setItem("theme", "light");
//         }
//     }, [theme]);

//     const handleThemeChange = (e) => {
//         targetElement.classList = '';
//         targetElement.classList.remove("light");
//         targetElement.classList.remove("dark");
//         targetElement.classList.add(theme);
//         setTheme(theme);
//     };

//     return (
//         <Switch
//             onClick={(e) => {
//                 handleThemeChange(e);
//                 // setIsOpen(false); // Close the dropdown after selecting a theme
//             }}
//             checked={localStorage.getItem("theme") === "theme" ? false : true}
//             size="lg"
//             color="success"
//             endcontent={<MoonIcon />}
//             startcontent={<SunIcon />}
//         >
//             Dark mode
//         </Switch>
//     );
// }
