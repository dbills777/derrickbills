import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { Button } from "@nextui-org/react";
import WelcomeHero from "@/Components/AboutHero";
import { ButtonVariant } from "@/Components/Variants/ButtonVariant";
import { Stats } from "@/Components/Stats";

export default function About({ auth }) {
    return (
        <Layout>
            <Head title="About" />
            <WelcomeHero />
            <section className="">
                <div className="flex flex-col items-center justify-center py-10">
                    <Stats />
                    <h1 className="text-4xl text-center font-thin my-6">
                        About
                    </h1>
                    <p className="text-center">
                        About section stuff goes here. Lorem ipsum dolor sit
                        amet
                    </p>

                    <div className="flex flex-col mt-20 items-center gap-3">
                        <Button className="primary">Default</Button>
                        <Button color="primary">Primary</Button>
                        <Button color="secondary">Secondary</Button>
                        <Button color="greenie">Secondary</Button>
                        <Button color="success">Success</Button>
                        <Button color="warning">Warning</Button>

                        <Button color="danger">Danger</Button>
                        <ButtonVariant color="ufo">
                            Custom Variant
                        </ButtonVariant>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
