import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { WelcomeHero } from "@/Components/WelcomeHero";
import { WelcomeSection } from "@/Components/WelcomeSection";
import { MotionIcons } from "@/Components/MotionIcons";
import { WelcomeCards } from "@/Components/WelcomeCards";
import { Timeline } from "@/Components/Timeline";

const Welcome = () => {
    return (
        <>
            <Layout>
                <Head title="Welcome" />
                
                <WelcomeHero />
                <Timeline />
                <WelcomeSection />
                <WelcomeCards />
                <MotionIcons />
            </Layout>
        </>
    );
};
export default Welcome;
