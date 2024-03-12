import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import Product from "@/Components/Product";

const Api = () => {
    return (
        <>
            <Layout>
                <Head title="About" />
                <Product />
            </Layout>
        </>
    );
};
export default Api;
