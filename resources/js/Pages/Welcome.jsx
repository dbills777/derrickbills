import Layout from "@/Layouts/Layout";
import Footer from "@/Layouts/Footer";
import { Head } from "@inertiajs/react";
import {WelcomeHero} from "@/Components/WelcomeHero";
import { MotionIcons } from "@/Components/MotionIcons";
import LandingPageCard from "@/Components/LandingPageCard";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function Welcome({ auth }) {
    return (
        <>
            <Layout>
                <Head title="Welcome" />
                <WelcomeHero />
                <div className="flex  mt-12 items-center mx-auto max-w-screen-xl ">
                    <section className="flex flex-col  space-y-8 ms-6">
                        <h2 className="text-5xl">Deployment Process</h2>
                        <p className="md:max-w-screen-md">
                            Application server and MySQL Database is hosted
                            using a DigitalOcean Droplet via Laravel Forge.
                            Deployment is automated on every push to the main
                            branch.
                        </p>

                        <h3 className="text-orange-700 bold text-4xl">
                            "TODO: Add Github Actions for CI/CD"
                        </h3>
                        <h3 className="text-gray-400 bold text-2xl border-l border-l-info ps-8">
                            Dark/Light Mode is available, click the icon in the
                            top right corner! Additional Themeing is used on
                            specific components. Those themes are provided by
                            Daisy UI.
                        </h3>
                        <div className="flex flex-col ">
                            <section>
                                <Card className="min-w-[480px] ">
                                    <CardHeader className="flex gap-3">
                                        <div className="flex flex-col mx-auto">
                                            <p className="text-md text-center ">
                                                Derrick Bills
                                            </p>
                                            <p className="text-small text-default-500">
                                                Company Name
                                            </p>
                                        </div>
                                    </CardHeader>
                                    <Divider />
                                    <CardBody>
                                        <p className="text-center">
                                            previous website architecture
                                        </p>
                                        <Divider className="my-8" />
                                        <p className="text-center">
                                            previous website architecture
                                        </p>
                                    </CardBody>
                                </Card>
                            </section>
                        </div>
                    </section>
                </div>

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
