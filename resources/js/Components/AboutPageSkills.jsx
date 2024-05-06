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
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Accusantium dicta numquam
                                facilis necessitatibus ut mollitia debitis et
                                fuga, aliquam quis!
                            </p>
                            <p className="text-sm font-light text-gray-500/80">
                                Utilizing Resources
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
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Accusantium dicta numquam
                                facilis necessitatibus ut mollitia debitis et
                                fuga, aliquam quis!
                            </p>
                            <p className="text-sm font-light text-gray-500/80">
                                Communication
                            </p>
                        </CardBody>
                    </Card>
                </section>
                <section className="space-y-4 max-w-sm sm:max-w-md lg:max-w-2xl">
                    <Card className="">
                        <CardBody className="space-y-2 flex">
                            <Flash size={30} className=" text-warning" />
                            <h1 className="font-thin text-2xl lg:text-4xl ">
                                Critical Thinking
                            </h1>
                            <p className="text-lg font-light text-gray-500/80">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Accusantium dicta numquam
                                facilis necessitatibus ut mollitia debitis et
                                fuga, aliquam quis!
                            </p>
                            <p className="text-sm font-light text-gray-500/80">
                                Development
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
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Accusantium dicta numquam
                                facilis necessitatibus ut mollitia debitis et
                                fuga, aliquam quis!
                            </p>
                            <p className="text-sm font-light text-gray-500/80">
                                Responsibility
                            </p>
                        </CardBody>
                    </Card>
                </section>
            </section>
        </>
    );
};
