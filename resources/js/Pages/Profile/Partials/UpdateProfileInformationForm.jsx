import { Link } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { useForm, usePage } from "@inertiajs/react";
import { Button, Card, CardBody, CardFooter, CardHeader, Input } from "@nextui-org/react";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();
        patch(route("profile.update"));
    };
    return (
        <Card className="space-y-6">
            <CardHeader>
                <h3 className="block">Update Profile Information </h3>
            </CardHeader>
            <div className="ps-3">{user.name}</div>

            <Transition
                show={recentlySuccessful}
                enter="transition ease-in-out"
                enterFrom="opacity-0"
                leave="transition ease-in-out"
                leaveTo="opacity-0"
            >
                <div className="alert bg-backbround">
                    <span>Saved!</span>
                </div>
            </Transition>
            <CardBody>
                <form onSubmit={submit}>
                    <div className="grid md:w-3/4 lg:w-1/2 items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Input
                                id="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                                autoComplete="name"
                                placeholder="Update your name"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Input
                                id="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                                autoComplete="email"
                                placeholder="Update your email Address"
                            />
                        </div>
                        {mustVerifyEmail && user.email_verified_at === null && (
                            <div>
                                <p className="text-sm mt-2">
                                    Your email address is unverified.
                                    <Link
                                        href={route("verification.send")}
                                        method="post"
                                        as="button"
                                        className="underline text-sm -600 hover:-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Click here to re-send the verification
                                        email.
                                    </Link>
                                </p>

                                {status === "verification-link-sent" && (
                                    <div className="mt-2 font-medium text-sm text-green-600">
                                        A new verification link has been sent to
                                        your email address.
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </form>
            </CardBody>

            <CardFooter className="flex justify-start">
                <Button onClick={submit} clolor="primary">
                    Save
                </Button>
            </CardFooter>
        </Card>
    );
}
