import { useEffect } from "react";
import LoginAndRegister from "@/Pages/Auth/LoginAndRegister";
import { Head, Link, useForm } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Login({ status, canResetPassword }) {
    // const { data, setData, post, processing, errors, reset } = useForm({
    //     email: "",
    //     password: "",
    //     remember: false,
    // });

    // useEffect(() => {
    //     return () => {
    //     reset("password");
    // };
    // }, []);

    // const submit = (e) => {
    //     e.preventDefault();

    //     post(route("login"));
    // };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <LoginAndRegister />

            {/* <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm -600">Remember me</span>
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

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div> */}
        </GuestLayout>
    );
}
