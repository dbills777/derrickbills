import { Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Link,
    Image,
    Input,
} from "@nextui-org/react";
export default function About({ auth }) {
    return (
        <Layout>
            <Head title="About" />
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-center">About</h1>
                <p className="text-center">
                    This is a complete reworkig of the Laravel Breeze,
                    Inertia.js & React stack with NextUI.
                </p>
            </div>

            <div className="py-20 flex justify-evenly">
                <Button color="default">Default</Button>
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="success">Success</Button>
                <Button color="warning">Warning</Button>
                <Button color="danger">Danger</Button>
            </div>
            <div className="py-20 flex justify-evenly">
                <button className="btn">Button</button>
                <button className="btn btn-neutral">Neutral</button>
                <button className="btn btn-primary">Primary</button>
                <button className="btn btn-secondary">Secondary</button>
                <button className="btn btn-accent">Accent</button>
                <button className="btn btn-ghost">Ghost</button>
                <button className="btn btn-link">Link</button>
            </div>
            <Card isPressable className="max-w-[400px] my-20 mx-auto">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md">NextUI</p>
                        <p className="text-small text-default-500">
                            nextui.org
                        </p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>
                        Make beautiful websites regardless of your design
                        experience.
                    </p>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        href="https://github.com/nextui-org/nextui"
                    >
                        Visit source code on GitHub.
                    </Link>
                </CardFooter>
            </Card>
        </Layout>
    );
}
