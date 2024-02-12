import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { Button, Navbar, NavbarItem } from "@nextui-org/react";
const staggerMenuItems = stagger(0.2, { startDelay: 0.15 });
function useMenuAnimation(isOpen) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

        animate(
            "ul",
            {
                clipPath: isOpen
                    ? "inset(0% 0% 0% 0% round 10px)"
                    : "inset(10% 50% 90% 50% round 10px)",
            },
            {
                type: "spring",
                stiffness: 400,
                damping: 40,
                //
                // type: "tween",
                bounce: 4,
                duration: 0.5,
            },
        );
        animate(
            "details",
            {
                clipPath: isOpen
                    ? "inset(0% 0% 0% 0% round 10px)"
                    : "inset(10% 50% 90% 50% round 10px)",
            },
            {
                type: "spring",
                stiffness: 400,
                damping: 40,
                //
                // type: "tween",
                bounce: 5,
                duration: 2,
            },
        );

        animate(
            "li",
            isOpen
                ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
            {
                duration: 0.2,
                delay: isOpen ? staggerMenuItems : 0,
            },
        );
    }, [isOpen]);

    return scope;
}

export default function App() {
    const [isOpen, setIsOpen] = useState(false);
    const scope = useMenuAnimation(isOpen);

    return (
        <div className="menu" ref={scope}>
            <Button
                className="secondary motion-btn  px-4 py-2  glass"
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
            >
                Menu
                <div
                    className="arrow  px-4 py-2 rounded-full"
                    style={{ transformOrigin: "50% 55%" }}
                >
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 20 20"
                        fill="primary"
                    >
                        <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                </div>
            </Button>
            <li>
                <details open>
                    <summary>Pages**</summary>
                    <ul
                        className={`menu-list ${isOpen ? "open" : ""}`}
                        style={{
                            pointerEvents: isOpen ? "auto" : "none",
                        }}
                    >
                        <li className="menu-item">Item 1</li>
                        <li className="menu-item">Item 2</li>
                        <li className="menu-item">Item 3</li>
                        <li className="menu-item">Item 4</li>
                        <li className="menu-item">Item 5</li>
                    </ul>
                </details>
            </li>
            <li>
                <details open>
                    <summary>About</summary>
                    <ul
                        className={`menu-list ${isOpen ? "open" : ""}`}
                        style={{
                            pointerEvents: isOpen ? "auto" : "none",
                        }}
                    >
                        <li className="menu-item">Item 1</li>
                        <li className="menu-item">Item 2</li>
                        <li className="menu-item">Item 3</li>
                        <li className="menu-item">Item 4</li>
                        <li className="menu-item">Item 5</li>
                    </ul>
                </details>
            </li>
            <li>
                <details>
                    <summary>welcome</summary>
                    <ul
                        className={`menu-list ${isOpen ? "open" : ""}`}
                        style={{
                            pointerEvents: isOpen ? "auto" : "none",
                        }}
                    >
                        <li className="menu-item">Item 1</li>
                        <li className="menu-item">Item 2</li>
                        <li className="menu-item">Item 3</li>
                        <li className="menu-item">Item 4</li>
                        <li className="menu-item">Item 5</li>
                    </ul>
                </details>
            </li>
            <li>
                <details>
                    <summary>welcome</summary>
                    <ul
                        className={`menu-list ${isOpen ? "open" : ""}`}
                        style={{
                            pointerEvents: isOpen ? "auto" : "none",
                        }}
                    >
                        <li className="menu-item">Item 1</li>
                        <li className="menu-item">Item 2</li>
                        <li className="menu-item">Item 3</li>
                        <li className="menu-item">Item 4</li>
                        <li className="menu-item">Item 5</li>
                    </ul>
                </details>
            </li>
        </div>
    );
}
