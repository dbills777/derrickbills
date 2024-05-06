import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

export const AboutPageCard = () => {
    return (
        <Card
            radius="lg"
            className="bg-base-200 border-none p-3 min-w-[300px] max-w-[300px] "
        >
            <CardBody className="text-center bg-base-100 rounded-large">
                <Image alt="Avatar" src="https://robohash.org/564564.png" />
            </CardBody>
            <CardFooter className=" justify-center">
                <p className=" text-foreground/40 font-light font-neon">
                    Full Stack Web Developer
                </p>
            </CardFooter>
        </Card>
    );
};
