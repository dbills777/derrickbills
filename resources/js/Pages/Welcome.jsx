import { Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import { LaravelLogo, ReactLogo } from "../Components/Icons.jsx";

export default function Welcome({ auth }) {
    return (
        <Layout>
            <Head title="Welcome" />
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-96 card bg-base-300 rounded-box place-items-center text-center">
                    <h1 className="text-3xl">Synergy</h1>

                    <div className="flex gap-30">
                        <ReactLogo width={150} />
                        <LaravelLogo width={150} />
                    </div>
                </div>
                <progress
                    value={100}
                    className="divider progress lg:divider-horizontal"
                >
                    OR
                </progress>
                <div className="grid  w-1/4  place-items-">
                    <h1 className="text-3xl md:text5xl lg:text7xl pt-20">Synergy</h1>
                    <p>
                        With Laravel providing a reliable backend foundation and
                        React enabling the creation of captivating user
                        interfaces, developers gain unparalleled flexibility.
                        This dynamic duo empowers you to tailor web applications
                        to your unique needs,
                    </p>
                </div>
            </div>
        </Layout>
    );
}
<div></div>;
