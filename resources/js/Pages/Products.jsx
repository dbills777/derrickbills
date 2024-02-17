import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import Product from "@/Components/Product";

const Products = () => {
    return (
        <>
            <Layout>
                <Head title="About" />
                <Product />
            </Layout>
        </>
    );
};
export default Products;
