// import { useEffect, useState } from "react";
// import { Switch } from "@nextui-org/react";
// import { MoonIcon } from "./icons/MoonIcon";
// import { SunIcon } from "./icons/SunIcon";

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
//             targetElement.classList.add(theme);
//             targetElement.dataset.theme = theme;
//             localStorage.setItem("theme", theme);
//         } else {
//             targetElement.classList.add("light");
//             localStorage.setItem("theme", "light");
//         }
//     }, [theme]);

//     const handleThemeChange = (e) => {
//         console.log("e.target.value: ", e.target.value);
//         targetElement.classList.remove("theme");
//         targetElement.classList.remove("light");
//         targetElement.classList.remove("dark");
//         // targetElement.classList.remove("cyberpunk");
//         // targetElement.classList.remove("dim");
//         // targetElement.classList.remove("aqua");
//         targetElement.classList.add(e.target.value);
//         setTheme(e.target.value);
//     };

//     return (
//         <div className="dropdown mb-72">
//             <div tabIndex={0} role="button" className="btn m-1">
//                 Theme
//                 <svg
//                     width="12px"
//                     height="12px"
//                     className="h-2 w-2 fill-current opacity-60 inline-block"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 2048 2048"
//                 >
//                     <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
//                 </svg>
//             </div>
//             <ul
//                 tabIndex={0}
//                 className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
//             >
//                 <li>
//                     <input
//                         type="radio"
//                         name="theme-dropdown"
//                         className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
//                         aria-label="Light"
//                         value="light"
//                         onClick={(e) => {
//                             handleThemeChange(e);
//                         }}
//                     />
//                 </li>
//                 <li>
//                     <input
//                         type="radio"
//                         name="theme-dropdown"
//                         className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
//                         aria-label="Dark"
//                         value="dark"
//                         onClick={(e) => {
//                             handleThemeChange(e);
//                         }}
//                     />
//                 </li>
//                 <li>
//                     <input
//                         type="radio"
//                         name="theme-dropdown"
//                         className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
//                         aria-label="Cyberpunk"
//                         value="cyberpunk"
//                         onClick={(e) => {
//                             handleThemeChange(e);
//                         }}
//                     />
//                 </li>
//                 <li>
//                     <input
//                         type="radio"
//                         name="theme-dropdown"
//                         className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
//                         aria-label="Dim"
//                         value="Dim"
//                         onClick={(e) => {
//                             handleThemeChange(e);
//                         }}
//                     />
//                 </li>
//                 <li>
//                     <input
//                         type="radio"
//                         name="theme-dropdown"
//                         className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
//                         aria-label="Aqua"
//                         value="aqua"
//                         onClick={(e) => {
//                             handleThemeChange(e);
//                         }}
//                     />
//                 </li>
//             </ul>
//         </div>
//         // <Switch
//         //     onClick={() => {
//         //         setTheme(!theme);
//         //         if (theme) {
//         //             targetElement.classList.replace(
//         //                 "theme",
//         //                 "light"
//         //             );
//         //         } else {
//         //             targetElement.classList.replace(
//         //                 "theme",
//         //                 "light"
//         //             );
//         //         }
//         //     }}
//         //     checked={localStorage.getItem("theme") === "theme" ? false : true}
//         //     size="lg"
//         //     color="success"
//         //     startContent={<SunIcon />}
//         //     endContent={<MoonIcon />}
//         // >
//         //     Dark mode
//         // </Switch>
//     );
// }
