import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { AboutHero } from "@/Pages/About/Partials/AboutHero";
import { Stats } from "@/Pages/About/Partials/Stats";
import { Timeline } from "@/Pages/About/Partials/Timeline";

const About = ({ auth }) => {
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
};
export default About;
