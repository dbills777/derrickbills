import { Card } from "@/Components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";

export default function SalesDisplay() {
    return (
        <Card className="p-4 md:m-8">
            <h1 className="text-2xl font my-4 ">Monthy Sales</h1>
            <div className="flex items-center">
                <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
                    <AvatarImage src="/avatars/01.png" alt="Avatar" />
                    <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                    <p className="text-sm font-medium leading-none mt-4">
                        Olivia Martin
                    </p>
                    <p className="text-sm text-muted-foreground">
                        olivia.martin@email.com
                    </p>
                </div>
                <div className="ml-auto font-medium">+$1,999.00</div>
            </div>
            <div className="flex items-center">
                <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
                    <AvatarImage src="/avatars/02.png" alt="Avatar" />
                    <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none mt-4">
                        Jackson Lee
                    </p>
                    <p className="text-sm text-muted-foreground">
                        jackson.lee@email.com
                    </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
            </div>
            <div className="flex items-center">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/03.png" alt="Avatar" />
                    <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none mt-4">
                        Isabella Nguyen
                    </p>
                    <p className="text-sm text-muted-foreground">
                        isabella.nguyen@email.com
                    </p>
                </div>
                <div className="ml-auto font-medium">+$299.00</div>
            </div>
            <div className="flex items-center">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/04.png" alt="Avatar" />
                    <AvatarFallback>WK</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none mt-4">
                        William Kim
                    </p>
                    <p className="text-sm text-muted-foreground">
                        will@email.com
                    </p>
                </div>
                <div className="ml-auto font-medium">+$99.00</div>
            </div>
            <div className="flex items-center">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/05.png" alt="Avatar" />
                    <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none mt-4">
                        Sofia Davis
                    </p>
                    <p className="text-sm text-muted-foreground">
                        sofia.davis@email.com
                    </p>
                </div>
                <div className="ml-auto font-medium">+$39.00</div>
            </div>
        </Card>
    );
}
