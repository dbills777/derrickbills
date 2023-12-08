import { Link, Head } from "@inertiajs/react";
import { Tabs, Tab } from "@nextui-org/react";
import { useState } from "react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [selected, setSelected] = useState(route().current());
    const handleClick = (e) => {
        setSelected(route().current());
    };
    return (
        <>
            <Head title="Welcome" />
            <div className="container max-w-7xl mx-auto">
                <>
                    <div className="flex w-full flex-col">
                        {!auth.user ? (
                            <Tabs
                                selectedKey={selected}
                                aria-label="Options"
                                color="primary"
                                variant="underlined"
                                classNames={{
                                    tabList:
                                        "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                                    cursor: "w-full bg-[#22d3ee]",
                                    tab: "max-w-fit px-0 h-12",
                                    tabContent:
                                        "group-data-[selected=true]:text-[#06b6d4]",
                                }}
                            >
                                <Tab
                                    key="home"
                                    as={Link}
                                    id="/home"
                                    href="/"
                                    onClick={() => handleClick("/home")}
                                    title={"Home"}
                                />
                                <Tab
                                    key="login"
                                    as={Link}
                                    id="/login"
                                    href={route("login")}
                                    onClick={() => handleClick("/login")}
                                    title={"Login"}
                                />
                                <Tab
                                    key="register"
                                    as={Link}
                                    id="/register"
                                    href={route("register")}
                                    onClick={() => handleClick("/register")}
                                    title={"Register"}
                                />
                            </Tabs>
                        ) : (
                            <Tabs
                                selectedKey={selected}
                                aria-label="Options"
                                color="primary"
                                variant="underlined"
                                classNames={{
                                    tabList:
                                        "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                                    cursor: "w-full bg-[#22d3ee]",
                                    tab: "max-w-fit px-0 h-12",
                                    tabContent:
                                        "group-data-[selected=true]:text-[#06b6d4]",
                                }}
                            >
                                <Tab
                                    key="home"
                                    as={Link}
                                    id="/home"
                                    href="/"
                                    onClick={() => handleClick("/home")}
                                    title={"Home"}
                                />
                                <Tab
                                    key="dashboard"
                                    as={Link}
                                    id="/dashboard"
                                    href={route("dashboard")}
                                    onClick={() => handleClick("/dashboard")}
                                    title={"Dashboard"}
                                />
                            </Tabs>
                        )}
                    </div>
                </>
            </div>
        </>
    );
}

