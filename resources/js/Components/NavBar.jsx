import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import {
    Avatar,
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownSection,
    DropdownTrigger,
    Navbar,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/react";
import ThemeSwitch from "./DarkModeToggle.jsx";
import {
    Activity,
    ChevronDown,
    EditDocumentIcon,
    Flash,
    Lock,
    LogIn,
    LogOut,
    Scale,
    Server,
    TagUser,
} from "./Icons.jsx";

export default function App() {
    const currentPage = usePage();
    const user = currentPage.props.auth.user;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = [
        "Welcome",
        "About",
        "Users",
        "Products",
        "Login",
        "Profile",
        "Dashboard",
        "Logout",
    ];

    const icons = {
        activity: (
            <Activity className="text-primary" fill="currentColor" size={30} />
        ),
        chevron: <ChevronDown fill="currentColor" size={16} />,
        edit: (
            <EditDocumentIcon
                className="text-green-500"
                fill="currentColor"
                size={30}
            />
        ),
        flash: <Flash className="text-primary" fill="currentColor" size={30} />,
        lock: <Lock className="text-success" fill="currentColor" size={30} />,
        login: <LogIn fill="currentColor" size={30} />,
        logout: <LogOut fill="currentColor" size={30} />,
        scale: <Scale className="text-warning" fill="currentColor" size={30} />,
        server: (
            <Server className="text-success" fill="currentColor" size={30} />
        ),
        user: (
            <TagUser
                className="text-orange-500"
                fill="currentColor"
                size={30}
            />
        ),
    };

    return (
        <Navbar
            className="text-4xl font-extralight lg:text-8xl"
            maxWidth="full"
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            classNames={{
                item: [
                    "data-[hover=true]:hover:text-primary-500",
                    "data-[hover=true]:hover:text-primary-50",
                    "data-[active=true]:'text-primary-500'",
                ],
            }}
        >
            <NavbarContent className="md:hidden" justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                />
            </NavbarContent>
            <NavbarContent className="hidden md:flex gap-8" justify="center">
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparenttext-4xl font-thin "
                                endContent={icons.chevron}
                                radius="sm"
                                variant="light"
                                font-size="xl"
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
                            key="register"
                            href={"/register"}
                            description="Register for an account to view more features."
                            startContent={icons.user}
                        >
                            Register for an Account
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                {user && (
                    <>
                        <NavbarItem
                            {...(currentPage.component === "Dashboard" && {
                                isActive: true,
                            })}
                        >
                            <Link href="/dashboard">Dashboard</Link>
                        </NavbarItem>
                        <NavbarItem
                            {...(currentPage.component === "Profile" && {
                                isActive: true,
                            })}
                        >
                            <Link href="/profile">Profile</Link>
                        </NavbarItem>
                    </>
                )}
                <NavbarItem
                    {...(currentPage.component === "Welcome" && {
                        isActive: true,
                    })}
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
                <NavbarItem
                    {...(currentPage.component === "Users" && {
                        isActive: true,
                    })}
                >
                    <Link color="foreground" href="/users">
                        Users
                    </Link>
                </NavbarItem>
                <NavbarItem
                    {...(currentPage.component === "Products" && {
                        isActive: true,
                    })}
                >
                    <Link color="foreground" href="/products">
                        Products
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <ThemeSwitch className="leading-8" />
                {/* <ThemeToggle /> */}
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            type="button"
                            size="sm"
                        />
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="User Display Actions"
                        variant="flat"
                    >
                        <DropdownSection showDivider>
                            <DropdownItem
                                key="supreme_support"
                                description="Overcome any challenge with a supporting team ready to respond."
                                startContent={icons.user}
                            >
                                {user && user.name && (
                                    <>
                                        <p className="font-semibold">
                                            Welcome {user.name}
                                        </p>
                                        <p className="font-semibold">
                                            {user.email}
                                        </p>
                                    </>
                                )}
                            </DropdownItem>
                        </DropdownSection>
                        {(user && (
                            <DropdownSection
                                // title="update your profile?"
                                showDivider
                            >
                                <DropdownItem
                                    key="supreme_support"
                                    href={"/profile"}
                                    description="Update Your Username and Email"
                                    startContent={icons.edit}
                                >
                                    Update Profile
                                </DropdownItem>
                            </DropdownSection>
                        )) ||
                            ""}

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

                        {(!user && (
                            <DropdownItem
                                key="login"
                                as={Link}
                                href={"/login"}
                                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                                startContent={icons.login}
                            >
                                Login or Sign up for an account{" "}
                            </DropdownItem>
                        )) || (
                            <DropdownItem
                                key="logout"
                                as={Link}
                                href={"/logout"}
                                method="post"
                                description="Logout of your account."
                                startContent={icons.logout}
                            >
                                Logout{" "}
                            </DropdownItem>
                        )}
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        {item === "Logout" && !user && (
                            <Link
                                className="w-full"
                                color="foreground"
                                href="/login"
                                size="lg"
                            >
                                Login
                            </Link>
                        )}
                        {item === "Login" && user && (
                            <Link
                                className="w-full"
                                color="foreground"
                                href="/logout"
                                method="post"
                                size="lg"
                            >
                                logout
                            </Link>
                        )}
                        {item === "Profile" && user && (
                            <Link
                                className="w-full"
                                color="foreground"
                                href="/profile"
                                size="lg"
                            >
                                {item}
                            </Link>
                        )}
                        {item === "Dashboard" && user && (
                            <Link
                                className="w-full"
                                color="foreground"
                                href="/dashboard"
                                size="lg"
                            >
                                {item}
                            </Link>
                        )}
                        {index < 4 && (
                            <Link
                                className="w-full"
                                color={
                                    index === 2
                                        ? "warning"
                                        : index === menuItems.length - 1
                                        ? "danger"
                                        : "foreground"
                                }
                                href={
                                    index !== 0
                                        ? `/${item
                                              .toLowerCase()
                                              .replaceAll(" ", "")}`
                                        : "/"
                                }
                                size="lg"
                            >
                                {item}
                            </Link>
                        )}
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
