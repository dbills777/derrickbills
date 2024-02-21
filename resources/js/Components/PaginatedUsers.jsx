import { useState, useMemo } from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Pagination,
    getKeyValue,
    User,
} from "@nextui-org/react";
import UserList from "./UsersList";

export default function App({ users }) {
    const [page, setPage] = useState(1);
    const rowsPerPage = 25;

    const pages = Math.ceil(users.length / rowsPerPage);

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return users.slice(start, end);
    }, [page, users]);

    return (
        <>
            <Table
                className="flex flex-col w-full max-w-7xl mx-auto mt-4"
                aria-label="client-side pagination table example"
                bottomContent={
                    <div className="flex w-full justify-center">
                        <Pagination
                            showControls
                            showShadow
                            color="primary"
                            page={page}
                            total={pages}
                            onChange={(page) => setPage(page)}
                        />
                    </div>
                }
            >
                <TableHeader>
                    <TableColumn key="name">name</TableColumn>
                    <TableColumn key="email">email</TableColumn>
                    <TableColumn key="created_at">created </TableColumn>
                </TableHeader>

                <TableBody
                    items={items}
                    className="flex justify-between w-full max-w-7xl"
                >
                    {(item) => (
                        <TableRow key={item.email}>
                            {(columnKey) => (
                                <TableCell className="">
                                    {getKeyValue(item, columnKey)}
                                </TableCell>
                            )}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <UserList users={users} />
        </>
    );
}
