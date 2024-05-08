import { Avatar, AvatarIcon, Card, CardBody } from "@nextui-org/react";
const IntroCard = () => {
    return (
        <>
            <div className="flex items-center justify-center my-4">
                <Card className="min-w-[360px]">
                    <CardBody className="space-y-4 ">
                        <h2 className="text-2xl md:text-3xl text-foreground-400">
                            Title
                        </h2>
                        <h3 className="text-2xl">
                         Full Stack Developer
                        </h3>
                    </CardBody>
                </Card>
            </div>
        </>
    );
};

export default IntroCard;
