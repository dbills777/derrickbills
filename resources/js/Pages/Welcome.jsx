import React from "react";
import { motion } from "framer-motion";
import Layout from "@/Layouts/Layout";
import { MotionIcons } from "@/Components/MotionIcons";
import Footer from "@/Layouts/Footer";
import { Head } from "@inertiajs/react";
import LandingPageCard from "@/Components/LandingPageCard";
import { ReactLogo } from "@/Components/Icons";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Divider,
    Image,
    Tooltip,
} from "@nextui-org/react";
import WelcomeHero from "@/Components/WelcomeHero";
export default function Welcome({ auth }) {
    return (
        <>
            <Layout>
                <Head title="Welcome" />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 2 } }}
                    className="flex flex-col gap-2 items-center max-w-screen-xl
                >
                    mx-auto lg:flex-row"
                >
                    <section className="flex flex-col space-y-8 ms-6 ">
                        <div>
                            <h1 className="text-5xl font md:text-7xl">
                                Welcome Hero Section
                            </h1>
                            <h2 className="text-3xl font-medium">Subheading</h2>
                        </div>
                        <p className="sm:w-3/4">
                            The application is built using the Laravel
                            framework, which provides a unique and powerful
                            foundation for the application. This foundation
                            leverages InertiaJS, ReactJS, Tailwind CSS.
                        </p>
                        <p className=" sm:w-3/4">
                            Using a monolithic architecture, allows for a single
                            code base Creating a more efficient and maintainable
                            application.
                        </p>
                        <div className="space-x-4">
                            <Tooltip
                                className="ms-3"
                                placement="top"
                                color="primary"
                                content={
                                    <p className="text-tiny">
                                        {" "}
                                        This Button is a Tooltip{" "}
                                    </p>
                                }
                            >
                                <Button
                                    radius="full"
                                    variant="ghost"
                                    color="primary"
                                >
                                    Get Started
                                </Button>
                            </Tooltip>
                            <Tooltip
                                className="ms-3 "
                                offset={2}
                                placement="right"
                                color="primary"
                                content={
                                    <>
                                        <p className="text-small font-bold">
                                            Custimizable
                                        </p>
                                        <p className="text-tiny">
                                            {" "}
                                            This Button is a Tooltip{" "}
                                        </p>
                                    </>
                                }
                            >
                                <Button
                                    variant="light"
                                    color="primary"
                                    radius="full"
                                >
                                    Learn More
                                </Button>
                            </Tooltip>
                        </div>
                    </section>
                    <section className="opacity-70 mx-auto lg:me-6">
                        <ReactLogo height={200} width={200} />
                    </section>
                </motion.div>
                <div className="flex flex-col mt-12 gap-2 items-center max-w-screen-xl mx-auto">
                    <section className="flex flex-col justify-center space-y-8 ms-6">
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Unde facere fuga minus molestias quam sit
                            porro consectetur ea quo quisquam? Veritatis
                            asperiores nulla iure alias ipsam. Ea rem
                            exercitationem sit.
                        </h3>
                        <div className="flex flex-col md:flex-row-reverse max-w-7xl mx-auto items-center justify-between ">
                            <section>
                                <Card className="min-w-[480px] ">
                                    <CardHeader className="flex gap-3">
                                        <div className="flex flex-col mx-auto">
                                            <p></p>
                                            <p className="text-md ">NextUI</p>
                                            <p className="text-small text-default-500">
                                                company name
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
