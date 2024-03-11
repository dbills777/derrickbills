import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function App() {
    const image = Math.floor(Math.random() * 1000);
    return (
        <div className="flex flex-col items-center min-h-screen mt-20">
            <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col ">
                    <p className="text-tiny uppercase font-bold">product</p>
                    <small className="text-default-500">Product details</small>
                    <h4 className="font-bold text-large">Robot</h4>
                </CardHeader>
                <CardBody className="flex-col items-center overflow-visible">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={`https://robohash.org/${image}?bg1.png`}
                        width={270}
                    />
                </CardBody>
            </Card>
        </div>
    );
}
