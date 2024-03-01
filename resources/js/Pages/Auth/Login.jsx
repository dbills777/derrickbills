import { Head } from "@inertiajs/react";
import LoginAndRegister from "@/Pages/Auth/LoginAndRegister";

export const Login = () => {
    return (
        <div className="flex flex-col items-center mt-20">
            <Head title="Log in" />
            <LoginAndRegister />
        </div>
    );
};
export default Login;
