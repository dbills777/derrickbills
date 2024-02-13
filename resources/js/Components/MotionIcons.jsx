import { motion } from "framer-motion";
import { LaravelLogo, ReactLogo, TailWind } from "./Icons";

export const MotionIcons = () => {
    const heroBgUrl = "http://localhost:8000/images/section-bg-h-half.jpg";

    return (
        <div
            className="w-full hero lg:h-[17rem] my-4 "
            style={{
                backgroundImage: `url(${heroBgUrl})`,
                position: "relative",
                margintop: "",
            }}
        >
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
    );
};
