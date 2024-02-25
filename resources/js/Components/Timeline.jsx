import { Button, Link } from "@nextui-org/react";
import { GitHubGradientIcon } from "./Icons.jsx";

export const Timeline = () => {
    return (
        <div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical px-4 mx-auto max-w-7xl">
                <li>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="#a11acd"
                            className="h-8 w-8"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">2000 - 2021</time>
                        <div className="my-2 text-3xl font-thin md:text-5xl">
                            Pharmacy Technician
                        </div>
                    </div>

                    <hr className="bg-secondary" />
                </li>
                <li>
                    <hr className="bg-secondary" />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="#0e32d8"
                            className="h-8 w-8"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">2018-2021</time>
                        <div className="my-2 text-3xl font-thin md:text-5xl">
                            Utah Valley University - Associates & Bachelors
                            Degree
                        </div>
                        Completed an Associates Degree in Web Design and
                        Development and a Bachelors Degree Web Design and
                        Development
                    </div>
                    <hr className="bg-primary" />
                </li>
                <li>
                    <hr className="bg-primary" />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="#EA8000"
                            className="h-8 w-8"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">2021-2023</time>
                        <div className="my-2 text-3xl font-thin md:text-5xl">
                            CHG Healthcare - Software Engineer I
                        </div>
                        <div className="space-y-2">
                            <p>
                                Creation of API's and full stack apppcations
                                using Laravel, MySQL JavaScript and AlpineJS
                            </p>
                            <p>
                                Migrated consumption of source data to Kafka,
                                including building endpoints, Controllers,
                                Models, Schemas and tables
                            </p>
                            <p>
                                Experienced with Jira, Git, Figma, Sketch,
                                Laravel Forge, Jenkins, GitHub Actions, Digital
                                Ocean and Rack Space. Including exposure to AWS
                                Kubernetes
                            </p>
                            <p>Built customer facing and internal tools.</p>
                            <p>
                                implemented NodeJS service worker to post data
                                to an API endpoint
                            </p>
                            <p>
                                Wrote unit and feature tests using Pest and PHP
                                Unit and Jest
                            </p>
                            <p>
                                Worked closely with cross functional teams to
                                achieve business objectives
                            </p>
                        </div>
                    </div>
                    <hr className="bg-[#EA8000]" />
                </li>
                <li>
                    <hr className="bg-[#EA8000]" />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="#36FF6F"
                            className="h-8 w-8"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">2023 - 2024 </time>
                        <div className="my-2 text-3xl font-thin md:text-5xl">
                            derrickbills.com
                        </div>
                        <Button
                            variant="text"
                            isIconOnly
                            as={Link}
                            target="_blank"
                            href="https://github.com/dbills777/derrickbills"
                            radius="full"
                            className="flex swap swap-rotate items-center justify-center"
                            whilehover="hover"
                            endContent={<GitHubGradientIcon />}
                        ></Button>
                        <div className="space-y-2">
                            <p>
                                Built a personal web application to familiarize
                                myself with the latest versions of React to
                                build accessible, responsive pages using
                                Tailwind‑ CSS and various UI libraries
                            </p>
                            <p>
                                Laravel 10, InertiaJs, Laravel Breeze, and React
                            </p>
                            <p>
                                UI Components build with TailwindCSS, NextUI and
                                DaisyUI
                            </p>
                            <p>Dark / Light mode Themes</p>
                            <p>
                                Hosted via Digital Ocean droplet using Nginx and
                                NodeJs
                            </p>
                            <p>Site deployment managed with Laravel Forge</p>
                            <p>
                                Laravel Breeze for User Creation and
                                Authentication{" "}
                                <p>
                                    Refactored boilerplate pages with react SSR
                                    Components
                                </p>
                                <p>Routing done with Inertia</p>
                            </p>
                        </div>
                    </div>
                    <hr className="bg-[#36FF6F]" />
                </li>
                <li>
                    <hr className="bg-[#36FF6F]" />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="#B1B1B0"
                            className="h-8 w-8"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">Present</time>
                        <div className="my-2 text-3xl font-thin md:text-5xl">
                            Open to work
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};
