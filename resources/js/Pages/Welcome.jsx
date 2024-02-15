import Layout from "@/Layouts/Layout";
import Footer from "@/Layouts/Footer";
import { Head } from "@inertiajs/react";
import { WelcomeHero } from "@/Components/WelcomeHero";
import { MotionIcons } from "@/Components/MotionIcons";
import LandingPageCard from "@/Components/LandingPageCard";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function Welcome({ auth }) {
    return (
        <>
            <Layout>
                <Head title="Welcome" />
                <WelcomeHero />
                <section className="flex flex-col space-y-12 py-12 mx-auto max-w-screen-xl">
                    <h2 className="text-5xl md:text-6xl xl:text-7xl font-thin min-w-full">
                        Deployment Process
                    </h2>
                    <p className="md:max-w-screen-md">
                        Application server and MySQL Database is hosted using a
                        DigitalOcean Droplet via Laravel Forge. Deployment is
                        automated on every push to the main branch.
                    </p>

                    <h3 className="text-orange-700 bold text-4xl">
                        "TODO: Add Github Actions for CI/CD"
                    </h3>
                    <h3 className="text-gray-500 bold text-2xl border-l border-l-info ps-8">
                        Dark/Light Mode is available with NextUI, click the icon
                        in the top right corner! Additional Themeing is used on
                        specific components. Those themes are provided by Daisy
                        UI.
                    </h3>
                    <h3 className="text-gray-500 font-mono text-4xl">
                        Implemented 2 UI Libraies to demonstrate the ability to
                        use multiple UI libraries in a single application.
                    </h3>
                </section>

                <div className="flex flex-col w-full  mt-12 mx-auto gap-2 lg:flex-row max-w-7xl ">
                    <div className="flex   lg:w-1/2 gap-2">
                        <LandingPageCard />
                        <LandingPageCard />
                    </div>

                    <div className="flex flex-col lg:w-1/2">
                        <LandingPageCard />
                    </div>
                </div>
                <div className="flex flex-col w-full my-4 mx-auto gap-2 lg:flex-row max-w-7xl ">
                    <div className="flex flex-col lg:w-1/2">
                        <LandingPageCard />
                    </div>
                    <div className="flex w-full  lg:w-1/2 gap-2">
                        <LandingPageCard />
                        <LandingPageCard />
                    </div>
                </div>

                <MotionIcons />
                <div>
                    <Footer />
                </div>
            </Layout>
        </>
    );
}
