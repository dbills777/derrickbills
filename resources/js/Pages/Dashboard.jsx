import { Head } from "@inertiajs/react";
import SalesDisplay from "./Profile/Partials/SalesDisplay";
import Layout from "@/Layouts/Layout";
export default function Dashboard({ auth }) {
    return (
        <Layout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl -800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <SalesDisplay />
            <div className="text-foreground bg-background">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-background overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">You're logged in!</div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
