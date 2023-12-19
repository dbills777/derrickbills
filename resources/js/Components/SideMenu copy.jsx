import { useState } from "react";
export default function SideMenu() {
    const [isOpen, setIsOpen] = useState(false);
    // const scope1 = useMenuAnimation(isOpen);
    return (
        <ul className="menu bg-secondary-200 w-56 rounded-box">
            <li>
                <details>
                    <summary>Parent</summary>
                    <ul>
                        <li>
                            <a>Submenu 1</a>
                        </li>
                        <li>
                            <a>Submenu 2</a>
                        </li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul>
                                    <li>
                                        <a>Submenu 1</a>
                                    </li>
                                    <li>
                                        <a>Submenu 2</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </details>
            </li>
        </ul>
    );
}
