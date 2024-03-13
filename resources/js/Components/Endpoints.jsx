import React from "react";
import { Link } from "@nextui-org/react";
import FileExplorer from "@/Components/FileExplorer";

export default function EndPoints() {
    return (
        <>
            <section className="max-w-3xl mx-auto space-y-10 mt-32">
                <h1 className="text-xl md:text-2xl xl:text-4xl font-thin text-center">
                    Customer and Invoice endpoints
                </h1>
                <p>
                    The following endpoints use laravel resource controllers to
                    and collections to return data. The data is mutated using
                    the controllers and returned as a collection in a json
                    format.
                </p>
                <p>
                    All api controllers and resources are versioned allowing for
                    updates and changes to be made without breaking existing api
                    calls.
                </p>
                {/* <FileExplorer /> */}
            </section>
            <div className="flex flex-col w-full my-32 lg:flex-row my-48">
                <div className="grid flex-grow min-h-[400px] card bg-background rounded-box place-items-center">
                    <h1 className="text-3xl md:text-5xl xl:text-6xl font-thin ">
                        Customer endpoints
                    </h1>
                    <p>
                        post:
                        <Link
                            isBlock
                            isDisabled
                            className="ms-6"
                            href="#"
                            color="primary"
                            size="lg"
                        >
                            /api/v1/customers
                        </Link>
                    </p>
                    <p>
                        put:
                        <Link
                            isBlock
                            isDisabled
                            className="ms-6"
                            href="#"
                            color="primary"
                            size="lg"
                        >
                            /api/v1/customers/1
                        </Link>
                    </p>
                    <p>
                        patch:
                        <Link
                            isBlock
                            isDisabled
                            className="ms-6"
                            href="#"
                            color="primary"
                            size="lg"
                        >
                            /api/v1/customers/1
                        </Link>
                    </p>
                    <p>
                        delete:
                        <Link
                            isDisabled
                            isBlock
                            className="ms-6"
                            href="/api/v1/customers/1"
                            color="primary"
                        >
                            /api/v1/customers/1
                        </Link>
                    </p>
                    <p>
                        get:
                        <Link
                            isBlock
                            className="ms-6"
                            href="/api/v1/customers"
                            color="primary"
                            size="lg"
                        >
                            /api/v1/customers
                        </Link>
                    </p>

                    <p>
                        get:
                        <Link
                            isBlock
                            className="ms-6"
                            href="/api/v1/customers/1"
                            color="primary"
                        >
                            /api/v1/customers/1
                        </Link>
                    </p>
                </div>
                <div className="divider lg:divider-horizontal">API</div>
                <div className="grid flex-grow min-h-[400px] card bg-background rounded-box place-items-center">
                    <h1 className="text-3xl md:text-5xl xl:text-7xl font-thin ">
                        Invoice endpoints
                    </h1>
                    <p>
                        get:
                        <Link
                            className="ms-6"
                            isBlock
                            href="/api/v1/invoices"
                            color="primary"
                            size="lg"
                        >
                            /api/v1/invoices
                        </Link>
                    </p>
                    <p>
                        post:
                        <Link
                        isDisabled
                            className="ms-6"
                            isBlock
                            href="#"
                            color="primary"
                            size="lg"
                        >
                            /api/v1/invoices/bulk
                        </Link>
                    </p>
                    <p>
                        post:
                        <Link
                        isDisabled
                            className="ms-6"
                            isBlock
                            href="#"
                            color="primary"
                            size="lg"
                        >
                            /api/v1/invoices
                        </Link>
                    </p>
                    <p>
                        get:
                        <Link
                            className="ms-6"
                            href="/api/v1/invoices/1"
                            color="primary"
                            isBlock
                        >
                            /api/v1/invoices/1
                        </Link>
                    </p>
                </div>
            </div>
            <div className="grid flex-grow min-h-[800px] card bg-background rounded-box place-items-center">
                <h1 className="text-3xl md:text-5xl xl:text-7xl font-thin ">
                    Search
                </h1>
                <p>all search params can be chained</p>
                <p>
                    get:
                    <Link
                        className="ms-6"
                        isBlock
                        href="/api/v1/search?d_o_b=1991"
                        color="primary"
                        size="lg"
                    >
                        /api/v1/search?d_o_b=1991
                    </Link>
                    <Link
                        className="ms-6"
                        isBlock
                        href="/api/v1/search?d_o_b=1991-01-02"
                        color="primary"
                        size="lg"
                    >
                        /api/v1/search?d_o_b=1991-01-02
                    </Link>
                </p>
                <p>
                    get:
                    <Link
                        className="ms-6"
                        isBlock
                        href="/api/v1/search?email=org"
                        color="primary"
                        size="lg"
                    >
                        /api/v1/search?email=org"
                    </Link>
                </p>
                <p>
                    get:
                    <Link
                        className="ms-6"
                        isBlock
                        href="api/v1/search?name=john"
                        color="primary"
                        size="lg"
                    >
                        api/v1/search?name=john"
                    </Link>
                </p>
                <p>
                    get:
                    <Link
                        className="ms-6"
                        isBlock
                        href="/api/v1/search?account_type=i"
                        color="primary"
                        size="lg"
                    >
                        /api/v1/search?account_type=i
                    </Link>
                </p>
                <p>
                    get:
                    <Link
                        className="ms-6"
                        isBlock
                        href="/api/v1/search?city=minas tirith"
                        color="primary"
                        size="lg"
                    >
                        /api/v1/search?city=minas tirith
                    </Link>
                </p>
                <p>
                    get:
                    <Link
                        className="ms-6"
                        href="/api/v1/search?phone=539"
                        color="primary"
                        isBlock
                    >
                        /api/v1/search?phone=539"
                    </Link>
                </p>
                <p>
                    get:
                    <Link
                        className="ms-6"
                        href="/api/v1/search?phone=539"
                        color="primary"
                        isBlock
                    >
                        /api/v1/search?phone=539"
                    </Link>
                </p>
                <p>
                    get:
                    <Link
                        className="ms-6"
                        href="/api/v1/search?state=CA"
                        color="primary"
                        isBlock
                    >
                        /api/v1/search?state=CA"
                    </Link>
                </p>
                <p>
                    get:
                    <Link
                        className="ms-6"
                        href="/api/v1/search?postal_code=84"
                        color="primary"
                        isBlock
                    >
                        /api/v1/search?postal_code=84"
                    </Link>
                </p>
            </div>
        </>
    );
}
