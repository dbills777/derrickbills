import { useEffect, useState } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Checkbox,
    Input,
    Tab,
    Tabs,
} from "@nextui-org/react";
import { PasswordIcon } from "@/Components/Icons";

export const LoginAndRegister = (status, canResetPassword) => {
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
        post(route("register", data));
    };

    const handleLoginClick = (e) => {
        e.preventDefault();
        post(route("login", data));
    };

    return (
        <div className="">
            <Card>
                <CardHeader>
                    <section className="mx-auto">
                        <PasswordIcon height={350} width={350} />
                    </section>
                </CardHeader>
                <CardBody>
                    <Tabs
                        fullWidth
                        size="lg"
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
                            <form className="flex flex-col space-y-5 h-[300px]">
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
                                <div className="flex  justify-between">
                                    <div className="block mt-4">
                                        <label className="flex items-center">
                                            <Checkbox
                                                color="primary"
                                                radius="md"
                                                name="remember"
                                                checked={data.remember}
                                                onChange={(e) =>
                                                    setData(
                                                        "remember",
                                                        e.target.checked
                                                    )
                                                }
                                            />
                                            <span className="ms-2 text-sm -600">
                                                Remember me
                                            </span>
                                        </label>
                                    </div>

                                    <div className="flex items-center justify-end mt-4">
                                        <Button
                                            type="submit"
                                            color="primary"
                                            variant="bordered"
                                            disabled={processing}
                                            onKeyDown={handleLoginClick}
                                            onClick={handleLoginClick}
                                            fullWidth
                                        >
                                            Login
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </Tab>
                        <Tab
                            as={Link}
                            id="/register"
                            key="/register"
                            href={route("register")}
                            title="Register"
                        >
                            <form className="flex flex-col space-y-5 [300px]">
                                <Input
                                    errorMessage={errors.name}
                                    isRequired
                                    label="Name"
                                    placeholder="Enter your name"
                                    type="name"
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                <Input
                                    errorMessage={errors.email}
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
                                    isRequired
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                                <Input
                                    errorMessage={errors.password_confirmation}
                                    isRequired
                                    label="Confirm Password"
                                    placeholder="Confirm your password"
                                    type="password"
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                />
                                <div className="flex gap-2 justify-end">
                                    <Button
                                        type="submit"
                                        color="primary"
                                        variant="ghost"
                                        disabled={processing}
                                        onClick={handleRegistrationClick}
                                        onKeyDown={handleRegistrationClick}
                                        fullWidth
                                    >
                                        Register
                                    </Button>
                                </div>
                            </form>
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>
        </div>
    );
};
export default LoginAndRegister;
