import { useState, useEffect } from "react";
import {
    Tabs,
    Tab,
    Input,
    CardHeader,
    Button,
    Card,
    CardBody,
    Image,
    Divider,
} from "@nextui-org/react";

import { usePage, Link, useForm } from "@inertiajs/react";

export default function LoginAndRegister(status, canResetPassword) {
    const [selected, setSelected] = useState("login");
    const pathName = usePage();
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const handleRegistrationClick = (e) => {
        e.preventDefault();
        post(route("register"));
    };
    const handleLoginClick = (e) => {
        e.preventDefault();
        console.log("login", data);
        post(route("login"));
    };

    return (
        <div className="flex flex-col items-center">
            <Card className="max-w-full w-[440px] h-[600px]">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        height={100}
                        width={100}
                        radius="sm"
                        src={
                            "https://robohash.org/4894891891843551e5.png?size100x100&set=set1"
                        }
                    />
                    <div className="flex flex-col">
                        <p className="text-md">Sign In</p>
                        <p className="text-small text-default-500">
                            Or Register
                        </p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody className="overflow-hidden space-y-10">
                    <Tabs
                        className="mt-8"
                        fullWidth
                        size="md"
                        aria-label="Tabs form"
                        selectedKey={pathName.url}
                        onSelectionChange={setSelected}
                    >
                        <Tab
                            as={Link}
                            id="/login"
                            key="/login"
                            href={route("login")}
                            title="Login"
                        >
                            <form className="flex flex-col space-y-8">
                                <Input
                                    errorMessage={errors.email}
                                    value={data.email}
                                    isRequired
                                    label="Email"
                                    placeholder="Enter your email"
                                    type="email"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                <Input
                                    errorMessage={errors.password}
                                    value={data.password}
                                    isRequired
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                                <div className="flex  justify-end">
                                    <Button
                                        onClick={handleLoginClick}
                                        fullWidth
                                        color="primary"
                                    >
                                        Login
                                    </Button>
                                </div>
                            </form>
                        </Tab>
                        <Tab
                            as={Link}
                            id="/register"
                            key="/register"
                            href={route("register")}
                            title="Sign up"
                        >
                            <form className="flex flex-col gap-4 h-[300px]">
                                <Input
                                    errorMessage={errors.name}
                                    isRequired
                                    label="Name"
                                    placeholder="Enter your name"
                                    type="password"
                                />
                                <Input
                                    errorMessage={errors.email}
                                    isRequired
                                    label="Email"
                                    placeholder="Enter your email"
                                    type="email"
                                />
                                <Input
                                    errorMessage={errors.password}
                                    isRequired
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                />
                                <div className="flex gap-2 justify-end">
                                    <Button
                                        onClick={handleRegistrationClick}
                                        fullWidth
                                        color="primary"
                                    >
                                        Registration
                                    </Button>
                                </div>
                            </form>
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>
        </div>
    );
}
