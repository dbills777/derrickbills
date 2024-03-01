import { useState, useEffect } from "react";
import {
    Checkbox,
    Tabs,
    Tab,
    Input,
    CardHeader,
    Button,
    Card,
    CardBody,
    Image,
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
        // console.log(data);
        e.preventDefault();
        post(route("register", data));
    };

    const handleLoginClick = (e) => {
        e.preventDefault();
        post(route("login", data));
    };

    return (
        <div className=" h-full grid gap-2 grid-cols-1 grid-rows-1 place-content-center place-items-center ">
            <Card>
                <CardHeader>
                    <Image
                        alt="animated login lock and key gif"
                        type="image/x-icon"
                        src="http://localhost:8000/images/login.gif"
                        width={390}
                    />
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
                                    {/* <div className="block mt-4">
                                        <label className="flex items-center">
                                            <Checkbox
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
                                        {canResetPassword && (
                                            <Link
                                                href={route("password.request")}
                                                className="underline text-sm -600 hover:-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Forgot your password?
                                            </Link>
                                        )}

                                        <PrimaryButton
                                            className="ms-4"
                                            disabled={processing}
                                        >
                                            Log in
                                        </PrimaryButton>
                                    </div> */}
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
                            title="Sign up"
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
                                    label="Password"
                                    placeholder="Confirm your password"
                                    type="password"
                                    onChange={(e) =>
                                        setData("password_confirmation", e.target.value)
                                    }
                                />
                                <div className="flex gap-2 justify-end">
                                    <Button
                                        type="submit"
                                        color="nui-primary"
                                        variant="bordered"
                                        disabled={processing}
                                        onClick={handleRegistrationClick}
                                        onKeyDown={handleRegistrationClick}
                                        fullWidth
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
