import { Avatar, AvatarIcon, Card, CardBody } from "@nextui-org/react";
const IntroCard = () => {
    return (
        <>
            <div className="flex items-center justify-center">
                <Card className="w-[360px]">
                    <CardBody className="space-y-4 ">
                        <Avatar
                            icon={<AvatarIcon />}
                            size="lg"
                            classNames={{
                                base: "bg-gradient-to-br from-primary-500 to-primary-200",
                                icon: "text-black/80",
                            }}
                        />
                        <h1 className="text-2xl">
                            Welcome to my portfolio!
                        </h1>
                        <p className="md:text-xl font-extralight text-foreground-400">
                            {/* Derrick Bills &bull; Full Stack Developer */}
                            Derrick Bills Full Stack Developer
                        </p>
                    </CardBody>
                </Card>
            </div>
        </>
    );
};

export default IntroCard;
