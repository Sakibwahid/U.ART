import React from 'react';
import Artworks from './Artworks';
import { div } from 'framer-motion/client';
import { motion } from "framer-motion";
const About = () => {
    return (
        <div>
            <motion.div
                key={0}
                className="text-center"
                initial={{ opacity: 0, y: 100, }}
                animate={{ opacity: 2, y: 0, }}
                transition={{ duration: 0.5 }}
            >
                <div className='h-screen grid grid-cols-2 gap-4 '>
                    <div className='col-span-2 md:col-span-1 my-auto'>
                        <Artworks />
                        <button className="btn mt-8">Get started</button>
                    </div>
                    <div className='md:pr-12 order-1 md:order-2 mt-8 col-span-2 md:col-span-1 flex flex-col items-center justify-center'>
                        <div className='text-center px-4 md:text-start mb-8'>
                            <h2 className='text-3xl mb-2'>What is <span className='font-playfair italic font- text-gray-500'>
                                U.ART?</span></h2>
                            <p className='text-md text-start sm:text-center md:text-start  md:pr-12 font-poppins text-gray-500 '>U.ART is a fun website to showcase your photos in an aesthetically pleasant way. You can use it to store your photos and view them at any time.</p>
                        </div>
                        <div className='text-center md:text-start px-4 mt-8'>
                            <h2 className='text-3xl mb-2'>Another <span className='font-playfair text-gray-500  italic'>Online Gallery?</span> </h2>
                            <p className='text-md text-start sm:text-center md:text-start  md:pr-12 font-poppins text-gray-500'>
                                Not quite. U.ART isn’t just another collection of images on a screen. It’s a space where every piece tells a story, where creativity meets connection.
                                Here, art isn’t just displayed—it’s experienced. Dive into a world of expression, interact with unique masterpieces, and feel the emotions behind every stroke.
                                So, is this just another online gallery? We’ll let you decide.
                            </p>
                        </div>

                    </div>
                </div>

            </motion.div>

        </div>
    );
};

export default About;