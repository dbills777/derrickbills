const Intro = () => {
    // const imgURL = "https://source.unsplash.com/collection/495468/1600x900";
    // const imgURL = "http://localhost:5173/images/AnimatedLockAndKey.gif";
    return (
        <>
            <div
                className="w-full hero min-h-screen "
                style={{
                    backgroundImage: `url(${imgURL})`,
                }}
            >
                <div className="hero-overlay bg-opacity-60" />
                <div className="text-center hero-content text-neutral-content ">
                    <div className="w-full">
                        <h1 className="mb-6 text-5xl font-bold ">
                            Laravel, InertiaJS & React.js
                        </h1>
                        <h2>
                            No Page Loads... No Lag... Plus Server Side
                            Rendering...
                        </h2>
                        <small>
                            PSA - hese are random unsplash images. Who konws
                            what youll get
                        </small>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Intro;
