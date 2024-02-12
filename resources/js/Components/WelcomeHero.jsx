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
