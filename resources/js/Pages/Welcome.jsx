import Layout from "@/Layouts/Layout";
import Footer from "@/Layouts/Footer";
import { Head } from "@inertiajs/react";
import { WelcomeHero } from "@/Components/WelcomeHero";
import { WelcomeSection } from "@/Components/WelcomeSection";
import { MotionIcons } from "@/Components/MotionIcons";
import { WelcomeCards } from "@/Components/WelcomeCards";

export default function Welcome({ auth }) {
    return (
        <>
            <Layout>
                <Head title="Welcome" />
                <WelcomeHero />
                <WelcomeSection />
                <WelcomeCards />
                <MotionIcons />
                <div>
                    <Footer />
                </div>
            </Layout>
        </>
    );
}
