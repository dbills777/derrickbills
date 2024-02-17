import Layout from "@/Layouts/Layout";
// import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import { Head } from "@inertiajs/react";
// import DeleteUserForm from "./Partials/DeleteUserForm";
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
                <div className="max-w-7xl md:p-6  mt-6 mx-auto shadow sm:rounded-lg ">
                    <UpdateProfileInformation
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                    />
                </div>
            </section>

            {/* <div className="max-w-7xl mx-auto p-4 my-6  sm:p-6 shadow sm:rounded-lg">
                <UpdatePasswordForm />
            </div>

            <div className="max-w-7xl mx-auto p-4 sm:p-6 shadow sm:rounded-lg">
                <DeleteUserForm />
            </div> */}
        </Layout>
    );
}
