export const WelcomeSection = () => {
    return (
        <div className="my-40 flex flex-col gap-2 px-6 mx-auto lg:flex-row max-w-screen-xl">
            <section className="flex flex-col space-y-12 ">
                <h2 className="text-5xl md:text-6xl xl:text-7xl font-thin min-w-full">
                    Full Stack Web Developer
                </h2>
                <p className="md:max-w-screen-md">
                    This is a Full Stack Web Application built with Laravel,
                    InertiaJS, React, and TailwindCSS. The application
                    demonstrates the integration and use of multiple UI
                    libraries within a single project, showcasing the power and
                    flexibility of combining these technologies to create a
                    cohesive and dynamic user experience. Additionally, it
                    includes a DevOps pipeline using DigitalOcean with an Nginx
                    Ubuntu server and Forge as the deployment tool, ensuring
                    seamless and efficient deployment and management of the
                    application.
                </p>
                <h3 className="text-orange-700 bold text-4xl"></h3>
                <h3 className="text-gray-500 bold text-2xl border-l border-l-info ps-8">
                    I’m Derrick Bills, a dedicated and skilled Full Stack
                    Developer specializing in React, Laravel, MySQL and NODE, based
                    in Eagle Mountain, UT with interest in opportunities in the
                    Salt Lake City area and/or Relocating to Austin, TX. With 2
                    years of experience in Full Stack Web Application
                    Development, I am passionate about building robust and
                    dynamic web applications that deliver seamless user
                    experiences.
                </h3>
            </section>
        </div>
    );
};
