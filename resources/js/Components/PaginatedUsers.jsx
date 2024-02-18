import React from "react";

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
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 20;

    const pages = Math.ceil(users.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return users.slice(start, end);
    }, [page, users]);

    return (
        <>
        <Table
            aria-label="Example table with client side pagination"
            bottomContent={
                <div className="flex w-full justify-center">
                    <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="secondary"
                        page={page}
                        total={pages}
                        onChange={(page) => setPage(page)}
                    />
                </div>
            }
            classNames={{
                wrapper: "min-h-[855px]",
            }}
        >
            <TableHeader>
                <TableColumn key="name">name</TableColumn>
                <TableColumn key="email">email</TableColumn>
                {/* <TableColumn key="created_at">created </TableColumn> */}
            </TableHeader>

            <TableBody items={items}>
                {(item) => (
                    <TableRow key={item.email}>
                        {(columnKey) => (
                            <TableCell>
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
