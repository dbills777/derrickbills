import { Head } from "@inertiajs/react";
import LoginAndRegister from "./LoginAndRegister";

export const Register = () => {
    return (
        <div className="flex flex-col items-center mt-20">
            <Head title="Register" />
            <LoginAndRegister />
        </div>
    );
};
export default Register;
