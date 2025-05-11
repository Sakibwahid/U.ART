const FeatureSection = () => {
    return (
        <div className="my-20 flex flex-col lg:flex-row justify-between w-full ">
            {/* Left Side: Video */}
            <div className="w-full lg:w-[50%]">
                <video
                    src="/Feature.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-[100%] lg:h-[850px] object-cover mx-auto"
                />
            </div>

            {/* Right Side: Features Grid */}
            <div className="font-poppins text-gray-600 w-full lg:w-1/2 p-6">
                <h2 className="text-3xl font-poppins text-gray-500 ">"Art<br></br>Memories<br></br>Technology <br></br> & YOU"</h2>
                <div className="mt-10 lg:mt-0 break-words text-pretty grid grid-cols-1 lg:grid-cols-2 grid-rows-5 gap-4 lg:pr-14">
                    
                    {/* Row 1 - Content on Right */}
                    <div className="hidden lg:block col-span-1 row-span-1"></div>
                    <div className="col-span-1 row-span-1 flex items-center">
                        <p className="text-clip">
                            <strong className="font-semibold text-gray-500">Personalized Art Gallery</strong><br />
                            <span className="text-sm">
                                Create your own digital space, where your photos and videos come to life. Upload, organize, and curate your collection with ease.
                            </span>
                        </p>
                    </div>

                    {/* Row 2 - Content on Right */}
                    <div className="hidden lg:block col-span-1 row-span-1"></div>
                    <div className="col-span-1 row-span-1 flex items-center">
                        <p>
                            <strong className="font-semibold text-gray-500">Unique Display Styles</strong><br />
                            <span className="text-sm">
                                Unlike traditional galleries, your images are showcased in a truly immersive way, making every piece feel alive.
                            </span>
                        </p>
                    </div>

                    {/* Row 3 - Content on Left */}
                    <div className="col-span-1 row-span-1 flex items-center">
                        <p>
                            <strong className="font-semibold text-gray-500">Mood Boards & Favorites</strong><br />
                            <span className="text-sm">
                                Collect, categorize, and curate mood boards with your favorite artworks, inspirations, and themes.
                            </span>
                        </p>
                    </div>
                    <div className="hidden lg:block col-span-1 row-span-1"></div>

                    {/* Row 4 - Content on Left */}
                    <div className="col-span-1 row-span-1 flex items-center">
                        <p>
                            <strong className="font-semibold text-gray-500">Seamless Sharing</strong><br />
                            <span className="text-sm">
                                Share your masterpieces with the world through unique links, making collaboration and appreciation easier than ever.
                            </span>
                        </p>
                    </div>
                    <div className="hidden lg:block col-span-1 row-span-1"></div>

                    {/* Row 5 - Content on Right */}
                    <div className="hidden lg:block col-span-1 row-span-1"></div>
                    <div className="col-span-1 row-span-1 flex items-center">
                        <p>
                            <strong className="font-semibold text-gray-500">Cinematic Display Mode</strong><br />
                            <span className="text-sm">
                                Experience your gallery like never before with a cinematic full-screen viewing experience.
                            </span>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default FeatureSection;
