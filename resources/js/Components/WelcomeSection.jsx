export const WelcomeSection = () => {
    return (
        <div className="flex flex-col gap-2 py-20 px-6 mx-auto lg:flex-row max-w-screen-xl">
            <section className="flex flex-col space-y-12 ">
                <h2 className="text-5xl md:text-6xl xl:text-7xl font-thin min-w-full">
                    Deployment Process
                </h2>
                <p className="md:max-w-screen-md">
                    Application server and MySQL Database is hosted using a
                    DigitalOcean Droplet via Laravel Forge. Deployment is
                    automated on every push to the main branch.
                </p>

                <h3 className="text-orange-700 bold text-4xl">
                    "TODO: Add Github Actions for CI/CD"
                </h3>
                <h3 className="text-gray-500 bold text-2xl border-l border-l-info ps-8">
                    Dark/Light Mode is available with NextUI, click the icon in
                    the top right corner! Additional Themeing is used on
                    specific components. Those themes are provided by Daisy UI.
                </h3>
                <h3 className="text-gray-500 font-light text-4xl">
                    Implemented 2 UI Libraies to demonstrate the ability to use
                    multiple UI libraries in a single application.
                </h3>
            </section>
        </div>
    );
};
