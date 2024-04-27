import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import UpdateProfileInformation from "./Partials/UpdateProfileInformationForm";

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <Layout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl leading-tight">Profile</h2>
            }
        >
            <Head title="Profile" />
            <section className="min-h-screen">
                <div className="max-w-7xl md:p-6 mt-6 mx-auto shadow sm:rounded-lg ">
                    <UpdateProfileInformation
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                    />
                </div>
            </section>
        </Layout>
    );
}
