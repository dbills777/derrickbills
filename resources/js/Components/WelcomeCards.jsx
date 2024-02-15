import LandingPageCard from "@/Components/LandingPageCard";

export const WelcomeCards = () => {
    return (
        <>
            <div className="flex flex-col w-full mt-20 px-6 mx-auto gap-2 lg:flex-row max-w-7xl ">
                <div className="flex   lg:w-1/2 gap-2">
                    <LandingPageCard />
                    <LandingPageCard />
                </div>

                <div className="flex flex-col lg:w-1/2">
                    <LandingPageCard />
                </div>
            </div>
            <div className="flex flex-col w-full mt-2 mb-24 px-6 mx-auto gap-2 lg:flex-row max-w-7xl ">
                <div className="flex flex-col lg:w-1/2">
                    <LandingPageCard />
                </div>
                <div className="flex w-full  lg:w-1/2 gap-2">
                    <LandingPageCard />
                    <LandingPageCard />
                </div>
            </div>
        </>
    );
};
