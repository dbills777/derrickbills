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
                    I’m Derrick Bills, a dedicated and skilled Full Stack
                    Developer specializing in React, Laravel, and MySQL, based
                    in Eagle Mountain, UT with interest in opportunities in the
                    Salt Lake City area and/or Relocating to Austin, TX. With 2
                    years of experience in Full Stack Web Application
                    Development, I am passionate about building robust and
                    dynamic web applications that deliver seamless user
                    experiences. Beyond coding, I am a coffee lover and art
                    enthusiast, always looking for inspiration to infuse
                    creativity into my projects.
                </h3>
                
            </section>
        </div>
    );
};
