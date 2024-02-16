import { motion } from "framer-motion";
import { ButtonVariant } from "@/Components/Variants/ButtonVariant";

const WelcomeHero = () => {
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
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold md:text-7xl">
                            Hello There
                        </h1>
                        <p className="mb-5">
                            The application is built using the Laravel
                            framework, powerful foundation for the application.
                            This foundation leverages InertiaJS, ReactJS,
                            Tailwind CSS.
                        </p>
                        <p className="mb-5">
                            It also uses Nextui, DaisyUI, and Framer Motion.
                        </p>
                        <ButtonVariant>NextUI Variant</ButtonVariant>
                        <div className="hero-content min-h-unit-11"></div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};
export default WelcomeHero;
