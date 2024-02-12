import React from "react";
import { motion } from "framer-motion";
import Layout from "@/Layouts/Layout";
import Footer from "@/Layouts/Footer";
import { Head } from "@inertiajs/react";
import LandingPageCard from "@/Components/LandingPageCard";
import { LaravelLogo, ReactLogo, TailWind } from "@/Components/Icons";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Divider,
    Image,
    Tooltip,
} from "@nextui-org/react";
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
                                Derrick Bills
                            </h1>
                            <h2 className="text-3xl font-medium">
                                Full Stack Web Developer
                            </h2>
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
                    <section className="opacity-70 mx-auto lg:me-6"></section>
                </motion.div>
                <div className="w-full hero lg:h-[17rem] my-4 ">
                    <div className="flex flex-col w-full lg:flex-row opacity-80 bg-background text-foreground place-content-center">
                        <div className="grid flex-grow card place-items-center ">
                            <div className="grid flex-grow h-[16rem] w-3/4  card text-foreground  place-items-center">
                                <motion.div
                                    className="text-4xl font-slabserrif font-bold lg:text-8xl"
                                    initial={{ opacity: 0, x: -400 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                        transition: { delay: 1, duration: 4 },
                                    }}
                                >
                                    <LaravelLogo height={200} width={200} />
                                </motion.div>
                            </div>
                        </div>
                        <div className="divider divider-primary font-mono lg:divider-horizontal ">
                            <h1 className="text-3xl">Inertia</h1>
                        </div>
                        <div className="grid flex-grow h-[16rem] card text-foreground place-items-center">
                            <motion.div
                                id="react-logo"
                                initial={{ opacity: 0 }}
                                animate={{
                                    rotate: 360,
                                    opacity: 1,
                                    transition: {
                                        delay: 5,
                                        duration: 10,
                                    },
                                }}
                            >
                                <ReactLogo height={200} width={200} />
                            </motion.div>
                        </div>
                        <div className="divider divider-primary lg:divider-horizontal">
                            <h1 className="text-3xl">And</h1>
                        </div>
                        <div className="grid flex-grow h-[16rem] card text-foreground  place-items-center">
                            <motion.div
                                className="text-4xl font-slabserrif font-bold lg:text-8xl"
                                initial={{ opacity: 0, x: 400 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    transition: { delay: 2, duration: 4 },
                                }}
                            >
                                <TailWind height={200} width={200} />
                            </motion.div>
                        </div>
                    </div>
                    <div />
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
                    <section className="w-full space-y-6 py-[48px] md:w-1/2">
                        <h2 className="text-5xl">Why use this architecture?</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odit consequatur consequuntur aspernatur
                            recusandae eaque quam placeat, est at obcaecati
                            voluptatibus, sed mollitia vel dolore iusto in ipsam
                            fugit illum veritatis.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odit consequatur consequuntur aspernatur
                            recusandae eaque quam placeat, est at obcaecati
                            voluptatibus, sed mollitia vel dolore iusto in ipsam
                            fugit illum veritatis.
                        </p>
                        <h3 className="text-orange-700 bold text-4xl">
                            "section of highlight text"
                        </h3>
                        <h3 className="text-gray-400 bold text-2xl border-l border-l-info ps-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Unde facere fuga minus molestias quam sit
                            porro consectetur ea quo quisquam? Veritatis
                            asperiores nulla iure alias ipsam. Ea rem
                            exercitationem sit.
                        </h3>
                    </section>
                </div>
                <div>
                    <Footer />
                </div>
            </Layout>
        </>
    );
}
