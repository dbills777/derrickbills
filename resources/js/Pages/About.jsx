import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { Button } from "@nextui-org/react";
import WelcomeHero from "@/Components/AboutHero";
import { ButtonVariant } from "@/Components/Variants/ButtonVariant";
import { Stats } from "@/Components/Stats";
import Timeline from "@/Components/Timeline";

export default function About({ auth }) {
    return (
        <Layout>
            <Head title="About" />
            <WelcomeHero />
            <section className="">
                <div className="flex flex-col items-center justify-center py-10">
                    <Stats />
                </div>
                <div className="flex flex-col items-center justify-center py-10">
                    <Timeline />
                </div>
            </section>
        </Layout>
    );
}
