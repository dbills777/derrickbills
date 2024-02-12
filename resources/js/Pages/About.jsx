import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { Button } from "@nextui-org/react";
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
            </div>
            <div className="flex justify-center ">
                <p className="mx-3">Custom Variant Button</p>
                <ButtonVariant color="ufo">UFO</ButtonVariant>
            </div>
        </Layout>
    );
}
