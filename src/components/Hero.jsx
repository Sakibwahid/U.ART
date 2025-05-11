import React from 'react';
import Navbar from './navbar';
import ImageCarousel from './ImageCarousel';


const Hero = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="hero">
                <div className="hero-content my-4">
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='font-playfair mb-4 text-4xl md:text-6xl font-thin text-center'>Every Click Matters</h1>
                        <p className='font-poppins text-gray-500 text-center'>Relive your moments with an aesthetic touch of vision. Experince your art with a better perspective </p>
                    </div>
                </div>

            </div>
            <ImageCarousel></ImageCarousel>
            <div className="px-6  mt-8 hidden md:flex items-end justify-between md:block">
                <div>
                    <div className="avatar-group -space-x-6 rtl:space-x-reverse grayscale hover:grayscale-0 transition-all duration-300">
                        <div className="avatar">
                            <div className="w-8">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-8">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-8">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="avatar placeholder">
                            <div className="bg-neutral text-neutral-content w-8">
                                <span>+9</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="scroll-icon-container p-1 scroll-icon animate-bounce inline-flex  border-2 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4V20M12 20L8 16M12 20L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>


        </>
    );
};

export default Hero;