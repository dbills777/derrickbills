import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { WelcomeHero } from "@/Components/WelcomeHero";
import { WelcomeSection } from "@/Components/WelcomeSection";
import { MotionIcons } from "@/Components/MotionIcons";
import { WelcomeCards } from "@/Components/WelcomeCards";
import { Timeline } from "@/Components/Timeline";
import { Image } from "@nextui-org/react";

const Welcome = () => {
    return (
        <>
            <Layout>
                <Head title="Welcome" />
                <Image
                    width={300}
                    alt="NextUI hero Image"
                    src="images/login.gif"
                    // src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                />
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
