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
                        <div className="text-lg font-black">
                            Pharmacy Technician
                        </div>
                        Minus, modi consequatur, fuga hic rerum, quidem tempore
                        quasi sint cum aspernatur similique pariatur eligendi?
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
                        <div className="text-lg font-black">
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
                        <div className="text-lg font-black">
                            CHG Healthcare - Sofwtware Engineer I
                        </div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Repellat nulla sequi aperiam esse quasi
                        necessitatibus, id sint rerum accusamus ab dolores
                        dolorem qui, odio harum earum voluptate blanditiis
                        ducimus doloremque quas? Modi odio reiciendis animi!
                        Minus, modi consequatur, fuga hic rerum, quidem tempore
                        quasi sint cum aspernatur similique pariatur eligendi?
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
                        <div className="text-lg font-black">
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
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Suscipit corporis ullam inventore expedita
                            iure corrupti laboriosam laborum praesentium, ipsam
                            cum molestias beatae id quidem placeat, iste debitis
                            nesciunt rerum fugiat similique possimus velit? Quo
                            modi vel tenetur ea, ad corrupti? Perspiciatis sequi
                            pariatur odio enim cum a quasi vitae tenetur.
                        </p>
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
                        <div className="text-lg font-black">Open to work</div>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Natus perferendis adipisci, obcaecati dicta quia
                        culpa accusamus architecto ratione repellendus corporis
                        sint dolorum optio, nobis velit nostrum! Possimus est
                        eligendi fugit corporis dolorum, aliquam quos similique,
                        reiciendis provident dignissimos ad cum earum! Error
                        expedita alias qui culpa impedit? Id numquam sint
                        temporibus porro asperiores minima quibusdam, et dicta
                        mollitia qui voluptatibus atque, maiores impedit eveniet
                        sapiente aliquid eligendi dolore cum perspiciatis
                        consequatur est ratione molestias? Dolor?
                    </div>
                </li>
            </ul>
        </div>
    );
};
