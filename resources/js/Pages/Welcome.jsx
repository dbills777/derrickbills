import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { MotionIcons } from "@/Components/MotionIcons";
import { Timeline } from "@/Components/Timeline";
import IdCard from "@/Components/WelcomeIntroCards/IdCard";
import TitleCard from "@/Components/WelcomeIntroCards/TitleCard";
import LocationCard from "@/Components/WelcomeIntroCards/LocationCard";

const Welcome = () => {
    return (
        <>
            <Layout>
                <Head title="Welcome" />
                <div className="mt-32 flex flex-col xl:flex-row justify-center xl:space-x-6">
                    <IdCard />
                    <TitleCard />
                    <LocationCard />
                </div>
                <MotionIcons />
                <Timeline />
            </Layout>
        </>
    );
};
export default Welcome;
