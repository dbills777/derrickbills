import { motion } from "framer-motion";
import { ButtonVariant } from "@/Components/Variants/ButtonVariant";

export const AboutHero = () => {
    return (
        <>
            <motion.div
                className="hero min-h-screen "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 10 }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="space-y-6 max-w-md">
                        <h1 className="text-5xl md:text-6xl xl:text-7xl font-thin">
                            Derrick Bills
                        </h1>
                        <h2 className="text-2xl font-bold md:text-4xl font-thin">
                            Full Stack Developer
                        </h2>
                        <p>
                            The application is built using the Laravel
                            framework, powerful foundation for the application.
                            This foundation leverages InertiaJS, ReactJS,
                            TailwindCSS.
                        </p>
                        <p>It also uses Nextui, DaisyUI, and Framer Motion.</p>
                        <ButtonVariant>NextUI Variant</ButtonVariant>
                        <div className="hero-content min-h-unit-11"></div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};
