import { Card, CardBody } from "@nextui-org/react";
import { Activity, Flash, TagUser, Sync } from "./Icons.jsx";
export const AboutPageSkills = () => {
    return (
        <>
            <section className="flex flex-col items-center my-16 mx-4 space-y-6">
                <p className="text-md light text-gray-500/80 lg:text-2xl">
                    SKILLS SECTION
                </p>
                <h1 className="font-neon font-thin text-3xl md:text-5xl lg:text-7xl">
                    Skills and Expertise
                </h1>
            </section>
            <section className="flex flex-col  min-w-3xl items-center gap-4 lg:flex-row justify-center  max-w-6xl mx-auto">
                <section className="space-y-4 max-w-sm sm:max-w-md lg:max-w-2xl">
                    <Card className="">
                        <CardBody className="space-y-2">
                            <TagUser className="text-primary" size={30} />
                            <h1 className="font-thin text-2xl lg:text-4xl">
                                Attention to Detail
                            </h1>
                            <p className="text-lg font-light text-gray-500/80">
                                As a Full Stack Web Developer, my attention to
                                detail ensures seamless integration and
                                functionality of both front-end and back-end
                                components. I maintain high code quality through
                                consistent practices and thorough testing,
                                ensure pixel-perfect UI/UX design, optimize
                                performance, and adhere to robust security
                                measures. By meticulously analyzing project
                                requirements and maintaining clear communication
                                with stakeholders, I deliver reliable,
                                user-friendly, and maintainable web
                                applications.
                            </p>
                        </CardBody>
                    </Card>
                    <Card className="">
                        <CardBody className="space-y-2">
                            <Activity
                                className="text-orange-500"
                                fill="currentColor"
                                size={30}
                            />
                            <h1 className="font-thin text-2xl lg:text-4xl">
                                Transparent Communication
                            </h1>
                            <p className="text-lg font-light text-gray-500/80">
                                Transparent communication is integral to my role
                                as a Full Stack Web Developer, fostering a
                                collaborative and efficient work environment. I
                                prioritize clear and open communication with all
                                stakeholders, ensuring that project goals,
                                timelines, and challenges are understood by
                                everyone involved. By providing regular updates
                                and promptly addressing any issues or changes, I
                                build trust and prevent misunderstandings. My
                                commitment to transparency enhances team
                                cohesion & ensures that clients are
                                well-informed and confident in the development
                                process, leading to successful project outcomes.
                            </p>
                        </CardBody>
                    </Card>
                </section>
                <section className="space-y-4 max-w-sm sm:max-w-md lg:max-w-2xl lg:space-y-16">
                    <Card className="">
                        <CardBody className=" flex">
                            <Flash size={30} className=" text-warning" />
                            <h1 className="font-thin text-2xl lg:text-4xl ">
                                Critical Thinking
                            </h1>
                            <p className="text-lg font-light text-gray-500/80">
                                Critical thinking is a cornerstone of my
                                approach as a Full Stack Web Developer, enabling
                                me to solve complex problems and make informed
                                decisions. By evaluating multiple perspectives
                                and considering potential impacts, I ensure that
                                my decisions are both innovative and practical.
                                This analytical mindset allows me adapt to
                                evolving project requirements, and continuously
                                improve the quality and efficiency of my work,
                                ultimately driving successful outcomes for the
                                projects I undertake
                            </p>
                        </CardBody>
                    </Card>
                    <Card className="">
                        <CardBody className="space-y-2">
                            <Sync className="text-success" size={30} />
                            <h1 className="font-thin text-2xl lg:text-4xl">
                                Learning
                            </h1>
                            <p className="text-lg font-light text-gray-500/80">
                                Continuous learning is essential to my growth
                                and effectiveness as a Full Stack Web Developer.
                                I stay current with the latest technologies,
                                frameworks, and industry best practices through
                                regular research, online courses, and
                                participation in developer communities. By
                                proactively seeking out new knowledge and
                                skills, I can apply innovative solutions to
                                complex problems and keep my work aligned with
                                the rapidly evolving tech landscape. This
                                commitment to learning not only enhances my
                                technical proficiency but also allows me to
                                contribute fresh ideas and maintain a
                                competitive edge in delivering high-quality,
                                modern web applications.
                            </p>
                        </CardBody>
                    </Card>
                </section>
            </section>
        </>
    );
};
