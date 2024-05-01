import React from "react";
import { Card, CardBody, Link } from "@nextui-org/react";

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
            </section>
            <div className="flex flex-col w-full lg:flex-row my-48">
                <div className="grid flex-grow min-h-[400px] card bg-background rounded-box place-items-center space-y-4">
                    <h1 className="text-3xl mb-4 md:text-5xl xl:text-6xl font-thin ">
                        Customer endpoints
                    </h1>
                    <Card className="mockup-code max-w-sm md:max-w-2xl">
                        <div className="flex gap-4">
                            <Link
                                className="ms-8"
                                size="lg"
                                color="primary"
                                isExternal
                                href="/api/v1/customers"
                                showAnchorIcon
                            >
                                /api/v1/customers
                            </Link>
                        </div>
                        <CardBody>
                            <pre data-prefix="1">
                                <code>Get all customers</code>
                            </pre>
                            <pre data-prefix="2">
                                <code>Customers with invoices</code>
                            </pre>
                            <pre>
                                {`    
    {
        "id": 1,
        "accountType": "i",
        "name": "Maeve Boyle",
        "dateOfBirth": "1997-06-25",
        "email": "john@example.net",
        "phoneNumber": "8018018011",
        "state": "TX",
        "city": "East Carlosburgh",
        "street": "Lakin Cape",
        "postalCode": "97174"
        "invoicesCount": 36,
        "invoices": [
            {
            "id": 1,
            "customerId": 1,
            "status": "void",
            "amount": 837,
            "billedDate": "2001-12-20 19:19:46"",
            "paidDate": "1971-08-17 11:46:09"
            "created_at": 
            "2024-03-13T15:47:48.000000Z",
            "updated_at": 
            "2024-03-13T15:47:48.000000Z"
            }
        ],
    }
    `}
                            </pre>
                        </CardBody>
                    </Card>
                    <Card className="mockup-code max-w-sm md:max-w-2xl">
                        <div className="flex gap-4">
                            <Link
                                className="ms-8"
                                size="lg"
                                color="primary"
                                isExternal
                                href="/api/v1/customers/33"
                                showAnchorIcon
                            >
                                /api/v1/customers/33
                            </Link>
                        </div>
                        <CardBody>
                            <pre data-prefix="1">
                                <code>Get customer</code>
                            </pre>
                            <pre data-prefix="2">
                                <code>Customer with invoice(s)</code>
                            </pre>
                            <pre>
                                {`    
    {
        "accountType": "b",
        "name": "Fidel Barrows",
        "dateOfBirth": "2010-02-03",
        "email": "kub.jett@example.org",
        "phoneNumber": "+1 (262) 808-2460",
        "state": "MT",
        "city": "South Jakobburgh",
        "street": "Kutch Creek",
        "postalCode": "58586"
        "invoices": [
            {
            "id": 1,
            "customerId": 33,
            "status": "paid",
            "amount": 421,
            "billedDate": "2002-09-14 03:23:44",
            "paidDate": "1994-07-27 14:35:27"
            "created_at": 
            "2024-03-13T15:47:49.000000Z",
            "updated_at": 
            "2024-03-13T15:47:49.000000Z"
            }
        ],
    }
    `}
                            </pre>
                        </CardBody>
                    </Card>

                    <div className="mockup-code bg-primary-500/80 text-primary-content">
                        <pre id="json" className="font-krypton">
                            <p> POST: /api/v1/customers</p>
                            <code>
                                {`
    {
    "accountType": "i",
    "name": "John Doe",
    "dateOfBirth": "1990-01-01",
    "email": "john@example.net",
    "phoneNumber": "8018018011",
    "state": "UT",
    "city": "EM",
    "street": "1234 s State",
    "postalCode": "12345"
    }
`}
                            </code>
                        </pre>
                    </div>
                    <div className="mockup-code bg-primary-500/80 text-primary-content">
                        <pre id="json" className="font-krypton">
                            <p> PUT: /api/v1/customers/4</p>
                            <code>
                                {`
    {
    "accountType": "i",
    "name": "John Doe",
    "dateOfBirth": "1990-01-01",
    "email": "john@example.net",
    "phoneNumber": "8018018011",
    "state": "UT",
    "city": "EM",
    "street": "1234 s State",
    "postalCode": "12345"
    }
`}
                            </code>
                        </pre>
                    </div>
                    <div className="mockup-code bg-primary-500/80 text-primary-content">
                        <pre id="json" className="font-krypton">
                            <p> PATCH: /api/v1/customers/4</p>
                            <code>
                                {`
    {
    "email": "john@example.net",
    "phoneNumber": "8018018011",
    "street": "1234 s State",
    "postalCode": "12345"
    }
`}
                            </code>
                        </pre>
                    </div>

                    <div className="mockup-code bg-red-600/80 text-primary-content p-5">
                        <pre id="json" className="font-krypton">
                            <p> DELETE: /api/v1/customers/4</p>
                        </pre>
                    </div>
                </div>

                <div className="divider lg:divider-horizontal">API</div>
                <div className="grid flex-grow  card bg-background rounded-box place-items-center">
                    <h1 className="text-3xl md:text-5xl xl:text-7xl font-thin lg:mb-32">
                        Invoice endpoints
                    </h1>

                    <Card className="mockup-code max-w-sm md:max-w-2xl">
                        <div className="flex gap-4">
                            <Link
                                className="ms-8"
                                size="lg"
                                color="primary"
                                isExternal
                                href="/api/v1/invoices"
                                showAnchorIcon
                            >
                                /api/v1/invoices
                            </Link>
                        </div>
                        <CardBody>
                            <pre data-prefix="1">
                                <code>Get all invoices</code>
                            </pre>

                            <pre>
                                {`    
    {
        "data": [
            {
            "InvoiceId": 994,
            "status": "paid",
            "billedDate": "1998-12-13 05:41:52",
            "total": 110,
            "balance": null,
            notes: null, 
            items: null,
            "customerId": 1,
            }
        ],
    }
    `}
                            </pre>
                        </CardBody>
                    </Card>
                    <Card className="mockup-code max-w-sm md:max-w-2xl">
                        <div className="flex gap-4">
                            <Link
                                className="ms-8"
                                size="lg"
                                color="primary"
                                isExternal
                                href="/api/v1/invoices/59"
                                showAnchorIcon
                            >
                                /api/v1/invoices/591
                            </Link>
                        </div>
                        <CardBody>
                            <pre data-prefix="1">
                                <code>Get an invoice</code>
                            </pre>

                            <pre>
                                {`    
   {
    "data": {
      "invoiceId": 591,
      "status": "void",
      "billedDate": "1983-10-25 19:52:27",
      "paidDate": "2007-10-23 05:47:41",
      "total": 556,
      "balance": null,
      "notes": null,
      "items": null,
      "customerId": 20
    }
  }
    `}
                            </pre>
                        </CardBody>
                    </Card>

                    <div className="mockup-code bg-green-600/60 text-primary-content px-11">
                        <pre id="json" className="font-krypton">
                            <p> GET: /api/v1/invoices/4</p>
                        </pre>
                    </div>
                    <div className="mockup-code bg-primary-500/80 text-primary-content mt-8 lg:mb-[500px]">
                        <pre id="json" className="font-krypton">
                            <p> POST: /api/v1/invoices/bulk</p>
                            <code>
                                {`
    {
    "customerId": 2,
    "status": "paid",
    "amount": 55555,
    "billedDate": "2023-01-01 19:19:46",
    "paidDate": "2023-01-02 11:46:09"
    },
    {
    "customerId": 1,
    "status": "void",
    "amount": 88888,
    "billedDate": "2010-80-18 19:19:46",
    "paidDate": "2010-08-17 11:46:09"
    }
`}
                            </code>
                        </pre>
                    </div>
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
                        href="/api/v1/search?d_o_b=1991-06"
                        color="primary"
                        size="lg"
                    >
                        /api/v1/search?d_o_b=1991-06
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
