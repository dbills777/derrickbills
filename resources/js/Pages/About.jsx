import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { AboutHero } from "@/Components/AboutHero";
import { Stats } from "@/Components/Stats";
import Timeline from "@/Components/Timeline";

export default function About({ auth }) {
    return (
        <Layout>
            <Head title="About" />
            <AboutHero />
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
