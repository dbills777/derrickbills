import { Avatar, AvatarIcon, Card, CardBody } from "@nextui-org/react";
const IntroCard = () => {
    return (
        <>
            <div className="flex items-center justify-center">
                <Card className="min-w-[360px]">
                    <CardBody className="space-y-4 ">
                        <Avatar
                            icon={<AvatarIcon />}
                            classNames={{
                                base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                                icon: "text-black/80",
                            }}
                        />
                        <h1 className="text-3xl">
                            Welcome to my portfolio!
                        </h1>
                        <p className="md:text-2xl font-extralight text-foreground-400">
                            Derrick Bills &bull; Full Stack Developer
                        </p>
                    </CardBody>
                </Card>
            </div>
        </>
    );
};

export default IntroCard;
