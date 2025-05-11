import React, { useState } from 'react';

const Showcase = () => {
    const landscape = [
        "/landscape1.jpg",
        "/landscape2.jpg",
        "/landscape3.jpg",
        "/landscape4.jpg",
        "/landscape5.jpg"
    ];

    const [current, setIndex] = useState(0);

    const prevImg = () => {
        setIndex((prev) => (prev === 0 ? landscape.length - 1 : prev - 1));
    };

    const nextImg = () => {
        setIndex((prev) => (prev === landscape.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className='mt-20 lg:mt-0 lg:h-screen flex justify-center items-center'>
            <div className="w-full relative flex flex-col items-center">
                {/* Marquee Text */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-32 w-full overflow-hidden">
                    <div className="z-1 flex whitespace-nowrap animate-slider">
                        <h2 className="text-[120px] font-playfair italic text-gray-500 opacity-35 mx-6">
                            U are ART • U are ART • U are ART
                        </h2>
                    </div>
                </div>

                {/* Image Slider */}
                <div className='relative flex justify-center items-center gap-6'>
                    <button className='text-xl md:text-3xl cursor-pointer' onClick={prevImg}>
                        ❮
                    </button>
                    <img className='z-10  w-[250px] h-[300px] md:w-[600px] md:h-[300px] object-cover shadow-xl' src={landscape[current]} alt={`Slide ${current + 1}`} />
                    <button className='text-xl lg:text-3xl cursor-pointer' onClick={nextImg}>
                        ❯
                    </button>
                </div>

                {/* Quote */}
                <p className='mt-6 text-center text-md font-poppins'>
                    "To love beauty is ordinary,<br /> To love the ordinary is the beauty".
                </p>
            </div>
        </div>
    );
};

export default Showcase;

