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
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/react";
import ThemeSwitch from "./ThemeSwitch.jsx";
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

    const menuItems = ["Welcome", "About", "Profile", "Dashboard"];

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
        user: (
            <TagUser
                className="text-orange-500"
                fill="currentColor"
                size={50}
            />
        ),
        edit: (
            <EditDocumentIcon
                className="text-green-500"
                fill="currentColor"
                size={30}
            />
        ),
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
                    "data-[active=true]:'text-primary-500'",
                ],
            }}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                />
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-8" justify="center">
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
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
                            key="supreme_support"
                            href={"/profile"}
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
                <ThemeSwitch className="leading-8" />
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
                        <DropdownSection
                            title="Need to update your profile?"
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
                        <DropdownItem className="w-[64px]" key="login">
                            {(!user && (
                                <Button
                                    className="w-full"
                                    type="submit"
                                    isIconOnly
                                    variant="light"
                                    as={Link}
                                    href={"/login"}
                                    startContent={<LogIn />}
                                ></Button>
                            )) || (
                                <Button
                                    className="w-full"
                                    type="submit"
                                    isIconOnly
                                    variant="light"
                                    as={Link}
                                    href={"/logout"}
                                    method="post"
                                    startContent={<LogOut />}
                                ></Button>
                            )}
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
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
