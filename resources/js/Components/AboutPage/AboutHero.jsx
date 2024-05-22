import { motion } from "framer-motion";
import { ButtonVariant } from "@/Components/Variants/ButtonVariant";

export const AboutHero = () => {
    return (
        <>
            <motion.div
                className="hero h-[40rem]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 10 }}
            >
                <div className="hero-overlay bg-opacity-55"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="space-y-4 max-w-md">
                        <h1 className="text-5xl md:text-6xl xl:text-8xl font-extralight">
                            Derrick Bills
                        </h1>
                        <h2 className="text-2xl md:text-4xl font-light">
                            Full Stack Developer
                        </h2>
                        <div className="space-y-2 mt-6 font-medium">
                            <p>
                                The application is built using the Laravel
                                framework, powerful foundation for the
                                application. This foundation leverages
                                InertiaJS, ReactJS, TailwindCSS.
                            </p>
                            <p>
                                It also uses Nextui, DaisyUI with responsive
                                design in mind.
                            </p>
                            <p>
                                Animations and some transitions are implemented
                                with framer motion.
                            </p>
                            <ButtonVariant>NextUI Variant</ButtonVariant>
                        </div>
                        <div className="hero-content min-h-unit-11"></div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};
