import React from "react";
import { Link, usePage } from "@inertiajs/react";
import {
    Navbar,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    DropdownMenu,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    Link as NextLink,
    Button,
} from "@nextui-org/react";
import {
    ChevronDown,
    Activity,
    Flash,
    Server,
    TagUser,
    Scale,
} from "./Icons.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Navigation(auth, user) {
    const currentPage = usePage();
    console.log("currentPage url ", currentPage.url);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Welcome",
        "About",
        "Dashboard",
        "Profile",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <>
            <Navbar
                isBlurred
                motionProps
                position="sticky"
                onMenuOpenChange={setIsMenuOpen}
                classNames={{
                    base: ["bg-base-100/0", "text-foreground ", ""],
                    item: [
                        "flex",
                        "relative",
                        "h-full",
                        "items-center",
                        "data-[active=true]:after:content-['']",
                        "data-[active=true]:after:absolute",
                        "data-[active=true]:after:bottom-0",
                        "data-[active=true]:after:left-0",
                        "data-[active=true]:after:right-0",
                        "data-[active=true]:after:h-[2px]",
                        "data-[active=true]:after:rounded-[2px]",
                        "data-[active=true]:after:bg-primary",
                    ],
                    content: ["flex", "items-center", "gap-4"],
                }}
                className=""
            >
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarItem>
                        <ThemeToggle />
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent
                    className="bg-transparent hidden sm:flex gap-4"
                    justify="center"
                >
                    <NavbarItem
                        {...(currentPage.component === "Welcome" && {
                            isActive: true,
                        })}
                    >
                        <Link href="/" aria-current="page">
                            Welcome
                        </Link>
                    </NavbarItem>
                    <NavbarItem
                        {...(currentPage.component === "About" && {
                            isActive: true,
                        })}
                    >
                        <Link href="/about" aria-current>
                            About
                        </Link>
                    </NavbarItem>

                    {!auth.user ? (
                        <NavbarItem>
                            <Link
                                href={route("login")}
                                // method="post"
                                as="button"
                            >
                                Dashboard{" "}
                            </Link>
                        </NavbarItem>
                    ) : (
                        <NavbarItem
                            {...(currentPage.component === "Dashboard" && {
                                isActive: true,
                            })}
                        >
                            <Link href="/dashboard" aria-current>
                                Dashboard
                            </Link>
                        </NavbarItem>
                    )}
                </NavbarContent>

                <NavbarContent
                    className="hidden sm:flex gap-4"
                    justify="center"
                ></NavbarContent>
                <NavbarContent justify="end">
                    {!auth.user && (
                        <NavbarItem>
                            <Link
                                href={route("login")}
                                // method="post"
                                as="button"
                            >
                                login
                            </Link>
                        </NavbarItem>
                    )}
                    {auth.user && (
                        <NavbarItem>
                            <Link href="/logout" method="post">
                                Logout
                            </Link>
                        </NavbarItem>
                    )}
                </NavbarContent>
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2
                                        ? "primary"
                                        : index === menuItems.length - 1
                                        ? "danger"
                                        : "foreground"
                                }
                                className="w-full"
                                href={`/${item.toLowerCase()}`}
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </>
    );
}
