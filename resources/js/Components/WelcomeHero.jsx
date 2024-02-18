import { motion } from "framer-motion";
import { HeroCloudIcon } from "@/Components/Icons";
import { Button, Link, Tooltip } from "@nextui-org/react";
export const WelcomeHero = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
            className="flex flex-col gap-2 py-20 px-6  mx-auto lg:flex-row max-w-screen-xl "
        >
            <section className="flex flex-col space-y-8">
                <div>
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-thin min-w-full">
                        Laravel, MySQL, Inertia & React
                    </h1>
                    <h2 className="text-3xl  mt-6">Dark Mode Available</h2>
                </div>
                <p className="text-2xl font-light sm:w-3/4">
                    The application is built using the Laravel framework, which
                    provides a unique and powerful foundation for the
                    application. This foundation leverages InertiaJS, ReactJS,
                    Tailwind CSS & Framer motion.
                </p>
                <p className="text-2xl font-light sm:w-3/4">
                    Using a monolithic architecture, allows for a single code
                    base Creating a more efficient and maintainable application.
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
                        <Button radius="full" variant="ghost" color="primary">
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
                        <Button variant="light" color="primary" radius="full">
                            Learn More
                        </Button>
                    </Tooltip>
                    <Button
                        href="https://github.com/nextui-org/nextui"
                        as={Link}
                        color="primary"
                        showAnchorIcon
                        variant="faded"
                    >
                        Button Link
                    </Button>
                </div>
            </section>
            <section className="mx-auto lg:me-6">
                <HeroCloudIcon height={350} width={350} />
            </section>
        </motion.div>
    );
};
