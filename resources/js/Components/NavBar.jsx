import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    DropdownItem,
    DropdownTrigger,
    NavbarMenuToggle,
    Dropdown,
    DropdownMenu,
    Button,
    Avatar,
} from "@nextui-org/react";

import {
    ChevronDown,
    Lock,
    Activity,
    Flash,
    Server,
    TagUser,
    AvengersLogo,
    Pirates,
    Scale,
    LogIn,
    LogOut,
} from "./Icons.jsx";

export default function App() {
    const currentPage = usePage();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    const icons = {
        chevron: <ChevronDown fill="currentColor" size={16} />,
        scale: <Scale className="text-warning" fill="currentColor" size={30} />,
        lock: <Lock className="text-success" fill="currentColor" size={30} />,
        activity: (
            <Activity
                className="text-secondary"
                fill="currentColor"
                size={30}
            />
        ),
        flash: <Flash className="text-primary" fill="currentColor" size={30} />,
        server: (
            <Server className="text-success" fill="currentColor" size={30} />
        ),
        user: <TagUser className="text-danger" fill="currentColor" size={30} />,
    };

    return (
        <Navbar
            maxWidth="full"
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            classNames={{
                item: [
                    "data-[hover=true]:hover:text-primary-500",
                    "data-[hover=true]:hover:text-primary-50",
                    "data-[active=true]:text-primary-500",
                ],
            }}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                />
            </NavbarContent>
            <NavbarBrand className="max-w-['30px']">
                <Link href="/">
                    <AvengersLogo
                        className="text-primary"
                        fill="currentColor"
                        size={64}
                    />
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-16" justify="center">
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                endContent={icons.chevron}
                                radius="sm"
                                variant="light"
                            >
                                Features
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="ACME features"
                        className="w-[340px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem
                            key="autoscaling"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            startContent={icons.scale}
                        >
                            Autoscaling
                        </DropdownItem>
                        <DropdownItem
                            key="usage_metrics"
                            description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                            startContent={icons.activity}
                        >
                            Usage Metrics
                        </DropdownItem>
                        <DropdownItem
                            key="production_ready"
                            description="ACME runs on ACME, join us and others serving requests at web scale."
                            startContent={icons.flash}
                        >
                            Production Ready
                        </DropdownItem>
                        <DropdownItem
                            key="99_uptime"
                            description="Applications stay on the grid with high availability and high uptime guarantees."
                            startContent={icons.server}
                        >
                            +99% Uptime
                        </DropdownItem>
                        <DropdownItem
                            key="supreme_support"
                            description="Overcome any challenge with a supporting team ready to respond."
                            startContent={icons.user}
                        >
                            +Supreme Support
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem
                    {...(currentPage.component === "Welcome" && {
                        isActive: true,
                    })}
                    className="active:bg-primary-500 active:text-primary-50"
                >
                    <Link href="/" aria-current="Welcome">
                        Welcome
                    </Link>
                </NavbarItem>
                <NavbarItem
                    {...(currentPage.component === "About" && {
                        isActive: true,
                    })}
                >
                    <Link color="foreground" href="/about">
                        About
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                {/* <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem> */}
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="success"
                            name="Jason Hughes"
                            type="button"
                            size="sm"
                            src="https://i.pravatar.cc/150?u=a042581fdsfa9026704d"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">zoey@example.com</p>
                        </DropdownItem>
                        <DropdownItem key="settings">Portal</DropdownItem>
                        <DropdownItem key="team_settings">
                            Team Settings
                        </DropdownItem>
                        <DropdownItem key="analytics">Analytics</DropdownItem>
                        <DropdownItem key="system">System</DropdownItem>
                        <DropdownItem key="configurations">
                            Configurations
                        </DropdownItem>
                        <DropdownItem key="help_and_feedback">
                            Help & Feedback
                        </DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            <Button
                                text="xs"
                                className="w-full"
                                type="submit"
                                variant="bordered"
                                as={Link}
                                href={route("logout")}
                                method="post"
                                startContent={<LogOut />}
                            >
                                Log out
                            </Button>
                        </DropdownItem>
                        <DropdownItem key="login" color="success">
                            <Button
                                className="w-full"
                                text="xs"
                                type="submit"
                                variant="bordered"
                                as={Link}
                                href={route("login")}
                                startContent={<LogIn />}
                            >
                                Sign In{" "}
                            </Button>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2
                                    ? "warning"
                                    : index === menuItems.length - 1
                                    ? "danger"
                                    : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
