import { useState } from "react";
import Layout from "@/Layouts/Layout";
import { Head, usePage } from "@inertiajs/react";
import PagnatedUsers from "@/Components/PaginatedUsers";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const Users = ({ users }) => {
    const currentPage = usePage();
    const [isFollowed, setIsFollowed] = useState(false);

    const handleFollow = (e) => {
        // e.preventDefault();
        setIsFollowed(!isFollowed);
    };

    return (
        <>
            <Layout>
                <Head title="About" />
                <h1 className="text-3xl font-bold text-center">Users</h1>
                <PagnatedUsers users={users} />
            </Layout>
        </>
    );
};
export default Users;
