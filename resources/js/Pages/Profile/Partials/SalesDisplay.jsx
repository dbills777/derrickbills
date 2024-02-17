import { Avatar, Card } from "@nextui-org/react";

export default function SalesDisplay() {
    return (
        <div className="min-h-screen">
            <Card className="p-4 md:m-8">
                <h1 className="text-2xl font my-4">Monthy Sales</h1>
                <div className="flex items-center motion-safe:hover:scale-[1.01] transition-all duration-250 motion-safe:hover:text-primary">
                    <Avatar
                        isBordered
                        color="default"
                        src="https://robohash.org/456450644.png"
                    />
                    <div className="ml-4 ">
                        <p className="text-sm font-medium leading-none mt-4">
                            Olivia Martin
                        </p>
                        <p className="text-sm font-medium">
                            olivia.martin@email.com
                        </p>
                    </div>
                    <div className="ml-auto font-medium">+$1,999.00</div>
                </div>
                <div className="flex items-center motion-safe:hover:scale-[1.01] transition-all duration-250 motion-safe:hover:text-primary">
                    <Avatar
                        isBordered
                        color="primary"
                        src="https://robohash.org/sdfaesra.png"
                    />
                    <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none mt-4">
                            Jackson Lee
                        </p>
                        <p className="text-sm">jackson.lee@email.com</p>
                    </div>
                    <div className="ml-auto font-medium">+$39.00</div>
                </div>
                <div className="flex items-center motion-safe:hover:scale-[1.01] transition-all duration-250 motion-safe:hover:text-primary">
                    <Avatar
                        isBordered
                        color="secondary"
                        src="https://robohash.org/456484.png"
                    />
                    <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none mt-4">
                            Isabella Nguyen
                        </p>
                        <p className="text-sm">isabella.nguyen@email.com</p>
                    </div>
                    <div className="ml-auto font-medium">+$299.00</div>
                </div>
                <div className="flex items-center motion-safe:hover:scale-[1.01] transition-all duration-250 motion-safe:hover:text-primary">
                    <Avatar
                        isBordered
                        color="success"
                        src="https://robohash.org/dsfaesdfrs.png"
                    />
                    <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none mt-4">
                            William Kim
                        </p>
                        <p className="text-sm">will@email.com</p>
                    </div>
                    <div className="ml-auto font-medium">+$99.00</div>
                </div>
                <div className="flex items-center motion-safe:hover:scale-[1.01] transition-all duration-250 motion-safe:hover:text-primary">
                    <Avatar
                        isBordered
                        color="warning"
                        src="https://robohash.org/5456456468.png"
                    />
                    <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none mt-4">
                            Sofia Davis
                        </p>
                        <p className="text-sm">sofia.davis@email.com</p>
                    </div>
                    <div className="ml-auto font-medium">+$39.00</div>
                </div>
            </Card>
        </div>
    );
}
