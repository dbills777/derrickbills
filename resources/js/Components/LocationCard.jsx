import { Avatar, AvatarIcon, Card, CardBody } from "@nextui-org/react";
const LocationCard = () => {
    return (
        <>
            <div className="flex items-center justify-center my-4">
                <Card className="w-[360px]">
                    <CardBody className="space-y-4 ">
                        <h2 className="text-2xl md:text-3xl text-foreground-400">
                            Based in
                        </h2>
                        <h3 className="text-xl">Eagle Mountain, UT</h3>
                        <p className="text-foreground-400">
                            Seeking opportunities in the Austin TX, <br></br>Salt Lake
                            City UT areas.
                        </p>
                    </CardBody>
                </Card>
            </div>
        </>
    );
};

export default LocationCard;
