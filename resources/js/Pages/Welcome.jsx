import { Head } from "@inertiajs/react";
import Layout from "@/Layouts/Layout";
import { LaravelLogo, ReactLogo } from "../Components/Icons.jsx";
import { Carousel } from "@/Components/Carousel.jsx";

export default function Welcome({ auth }) {
    return (
        <Layout>
            <Head title="Welcome" />
            <h1>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum sunt nemo ullam ab? Obcaecati, itaque voluptatum? Sed
                ducimus neque vitae nisi ullam quisquam quas dolor architecto
                sequi. Minima, iste illo?
            </h1>
            <div className="flex flex-col w-full bg-base-200  lg:flex-row  bg-base-200/80">
                <div className="grid flex h-96 w-full place-items-center text-center lg:w-1/3">
                    <div className=" flex flex-row mx-auto">
                        <ReactLogo width={150} />
                        <LaravelLogo width={150} />
                    </div>
                </div>
                <section className="divider text-xl lg:divider-horizontal text-3xl">
                    Synergy
                </section>
                <div className="grid  w-1/2  place-items-center md: mx-auto w-1/2 ">
                    <div className=" mx-auto w-full stat lg:w-1/4">
                        <div className="stat-figure text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-8 h-8 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                ></path>
                            </svg>
                        </div>
                        <div className="stat-title font-bold text-8xl">
                            Page Views
                        </div>
                        <div className="text-bold text-9xl stat-value text-secondary">
                            2.6M
                        </div>
                        <div className="stat-desc">
                            21% more than last month
                        </div>
                    </div>
                    <p className="text-xl">
                        With Laravel providing a reliable backend foundation and
                        React enabling the creation of captivating user
                        interfaces, developers gain unparalleled flexibility.
                        This dynamic duo empowers you to tailor web applications
                        to your unique needs,
                    </p>
                </div>
            </div>
            <Carousel />
            <div className="flex flex-col w-full bg-base-200 py-20 lg:flex-row  bg-base-300 mx-auto justify-evenly">
                <div className="stats stats-vertical lg:stats-horizontal shadow space-x-20 ">
                    <div className="stat">
                        <div className="stat-title">Downloads</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">New Users</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
<div></div>;
