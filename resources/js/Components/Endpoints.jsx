import React from "react";
import { Link } from "@nextui-org/react";

export default function EndPoints() {
    const image = Math.floor(Math.random() * 1000);
    return (
        <>
            <div className="flex flex-col w-full my-32 lg:flex-row my-64">
                <div className="grid flex-grow min-h-[400px] card bg-background rounded-box place-items-center">
                    <h1 className="text-3xl md:text-5xl xl:text-6xl font-thin ">
                        Customer endpoints
                    </h1>
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

            {/* <section className="flex flex-col mx-auto  space-y-4 max-w-7xl">
                <Link href="/api/v1/city" color="primary" underline>
                    /api/v1/city
                </Link>
                <Link
                    href="/api/v1/search?d_o_b=1980"
                    color="primary"
                    underline
                >
                    /api/v1/search?d_o_b=1980
                </Link>
                <br />
                <Link
                    href=" /api/v1/search?email=org"
                    color="primary"
                    underline
                >
                    /api/v1/search?email=org
                </Link>
                <br />
                <br />
                <Link href="/api/v1/name" color="primary" underline>
                    /api/v1/name
                </Link>
                <br />
                <Link href="/api/v1/phone" color="primary" underline>
                    /api/v1/phone
                </Link>
                <br />
                <Link href="/api/v1/customers/1" color="primary" underline>
                    /api/v1/customers/1
                </Link>
                <br />
                <Link href="/api/v1/invoices" color="primary" underline>
                    /api/v1/invoices
                </Link>
                <br />
                <Link href="/api/v1/invoices/1" color="primary" underline>
                    /api/v1/invoices/1
                </Link>
                <br />
                <Link href="/api/v1/search?name=john" color="primary" underline>
                    /api/v1/search?name=jonn
                </Link>
                <br />
                <Link href="/api/v1/search?email=org" color="primary" underline>
                    /api/v1/search?email=org
                </Link>
                <br />
                <Link
                    href=" api/v1/search?d_o_b=01-01&name=hillary"
                    color="success"
                >
                    api/v1/search?d_o_b=01-01&name=hillary
                </Link>
            </section> */}
        </>
    );
}
