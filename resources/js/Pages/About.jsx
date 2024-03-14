import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { Stats } from "@/Components/Stats";
import { Timeline } from "@/Components/Timeline";
import { AboutHero } from "@/Components/AboutHero";
import { WelcomeCards } from "@/Components/WelcomeCards";

const About = ({ auth }) => {
    return (
        <Layout>
            <Head title="About" />
            <AboutHero />
            <section className="min-h-screen">
                <div className="flex flex-col items-center justify-center py-10">
                    <Stats />
                </div>
                
            </section>
        </Layout>
    );
};
export default About;
