import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { Stats } from "@/Components/Stats";
import { AboutPageCard } from "@/Components/AboutPageCard";
import { AboutPageSkills } from "@/Components/AboutPageSkills";

const About = ({ auth }) => {
    return (
        <Layout>
            <Head title="About" />
            <section className="flex flex-col items-center my-32 space-y-6">
                <p className="text-md light text-gray-500/80 lg:text-2xl">
                    ABOUT ME SECTION
                </p>
                <h1 className="text-3xl md:text-5xl lg:text-7xl">What I do</h1>
            </section>
            <section className="flex flex-col  my-32 min-w-3xl  items-center lg:flex-row lg:justify-center">
                <AboutPageCard />
                <div className="min-w-[300px] max-w-[300px] m-6">
                    <h2 className="text-2xl font-light text-gray-500/80 lg:text-5xl">
                        Derrick Bills
                    </h2>
                    <p className="text-gray-500/70">
                        The application is built using the Laravel framework,
                        powerful foundation for the application. This foundation
                        leverages InertiaJS, ReactJS, TailwindCSS. It also uses
                        Nextui, DaisyUI with responsive design in mind.
                        Animations and some transitions are implemented with
                        framer motion.
                    </p>
                </div>
            </section>
            <div className="flex flex-col items-center justify-center">
                <Stats />
            </div>
            <AboutPageSkills />
        </Layout>
    );
};
export default About;
