import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { WelcomeHero } from "@/Components/WelcomeHero";
import { WelcomeSection } from "@/Components/WelcomeSection";
import { MotionIcons } from "@/Components/MotionIcons";
import { Timeline } from "@/Components/Timeline";
import IdCard from "@/Components/IdCard";
import TitleCard from "@/Components/TitleCard";
import LocationCard from "@/Components/LocationCard";

const Welcome = () => {
    return (
        <>
            <Layout>
                <Head title="Welcome" />
                <div className="flex flex-col md:flex-row justify-center md:space-x-6">
                    <IdCard />
                    <TitleCard />
                    <LocationCard />
                </div>
                <WelcomeHero />
                <MotionIcons />
                <Timeline />
                <WelcomeSection />
            </Layout>
        </>
    );
};
export default Welcome;
