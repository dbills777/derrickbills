export const WelcomeSection = () => {
    return (
        <div className="my-40 flex flex-col gap-2 px-6 mx-auto lg:flex-row max-w-screen-xl">
            <section className="flex flex-col space-y-12 ">
                <h2 className="text-5xl md:text-6xl xl:text-7xl font-thin min-w-full">
                    Full Stack Web Apllication
                </h2>
                <p className="md:max-w-screen-md">
                    This is a Full Stack Web Application built with Laravel,
                    InertiaJS, React, and TailwindCSS. The application is a
                    demonstration of using multiple UI libraries in a single
                    application.
                </p>
                <h3 className="text-orange-700 bold text-4xl"></h3>
                <h3 className="text-gray-500 bold text-2xl border-l border-l-info ps-8">
                    Seeking a Full Stack Developer position to leverage my
                    skills in Laravel, InertiaJS, React,MySQL and TailwindCSS.
                </h3>
                <p className="text-gray-500 font-light text-4xl">
                    I love Building responsive, dynamic interfaces and using
                    data from varius types of databases to achieve desired
                    outcomes.
                </p>
            </section>
        </div>
    );
};
