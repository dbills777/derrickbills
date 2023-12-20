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
import { ReactLogo, VsCode } from "@/Components/Icons";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { ButtonVariant } from "@/Components/Variants/ButtonVariant";
export default function About({ auth }) {
    return (
        <Layout>
            <Head title="About" />
            <div className="flex flex-col items-center justify-center ">
                <h1 className="text-4xl text-center">About</h1>
                <p className="text-center">
                    About section stuff goes here. Lorem ipsum dolor sit amet
                </p>
            </div>

            <div className="py-20 flex w-50 first:rounded-xl justify-around ">
                <Button className="primary">Default</Button>
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="greenie">Secondary</Button>
                <Button color="success">Success</Button>
                <Button color="warning">Warning</Button>
                <Button color="danger">Danger</Button>
                <ButtonVariant color="ufo">UFO</ButtonVariant>
            </div>
            <div className="py-20 flex w-50 first:rounded-xl justify-around">
                <VsCode />
                <ReactLogo />
                <ApplicationLogo />
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="greenie">Secondary</Button>
                <Button color="success">Success</Button>
                <Button color="warning">Warning</Button>
                <Button color="danger">Danger</Button>
            </div>
            <div className="py-20 flex justify-between">
                <button className="btn">Button</button>
                <button className="btn btn-neutral">Neutral</button>
                <button className="btn btn-primary">Primary</button>
                <button className="btn btn-secondary">Secondary</button>
                <button className="btn btn-accent">Accent</button>
                <button className="btn btn-ghost">Ghost</button>
                <button className="btn btn-link">Link</button>
            </div>
            <div className="flex flex-col mx-auto w-full">
                <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3 ">
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
            </div>
        </Layout>
    );
}
