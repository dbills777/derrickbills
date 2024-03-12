import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import EndPoints from "@/Components/Endpoints";

const Api = () => {
    return (
        <>
            <Layout>
                <Head title="About" />
                <EndPoints />
            </Layout>
        </>
    );
};
export default Api;
