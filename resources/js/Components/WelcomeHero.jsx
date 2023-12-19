import React from "react";
import { ReactLogo, VsCode } from "./Icons.jsx";
import ApplicationLogo from "./ApplicationLogo";
import { motion } from "framer-motion";
const WelcomeHero = () => {
    const imgURL = "http://localhost:8000/images/Circle.jpg";
    const imgURL2 = "http://localhost:8000/images/AnimatedLockAndKey.gif";
    const imgURL3 = "http://localhost:8000/images/text-gradient.avif";
    function template({ rotate, x }) {
        return `rotate(${rotate}) translateX(${x})`;
    }
    return (
        <>
            {/* <div className="relative bg-base-100 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg
                            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                            fill="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>

                        <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">
                                        Welcome to{" "}
                                    </span>
                                    <span className="block text-indigo-600 xl:inline">
                                        Laravel
                                    </span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quas cupiditate
                                    laboriosam fugiat.
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <a
                                            href="#"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                        >
                                            Get started
                                        </a>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <a
                                            href="#"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                                        >
                                            Live demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src={imgURL}
                        alt=""
                    />
                </div>
            </div> */}
            <motion.div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        // "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
                        "url(http://localhost:8000/images/Hero.png)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 10 }}
                
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </motion.div>
        </>
    );
};
export default WelcomeHero;
