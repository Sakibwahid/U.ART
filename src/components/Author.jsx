import { ImageOff } from 'lucide-react';
import authorImage from '../assets/Author.jpg';
import { useContext } from 'react';
import { Context } from './Context';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Social from './Social';
import ImageCarousel from './ImageCarousel';


const Author = () => {
    const { theme, ThemeToggle } = useContext(Context);
    const [hovered, setHovered] = useState(false);


    return (
        <div className='text-center flex gap-4 flex-col mt-20 group'>
            <div
                className="relative lg:mt-20 flex flex-col items-center gap-3"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <p className="text-2xl lg:text-3xl mx-4 text-gray-500 font-lato">Designed and Coded By</p>
                {/* Line with hover fade effect */}
                {!hovered &&
                    <motion.div
                        className="h-[2px]  bg-gray-500 mx-8"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: hovered ? 0 : 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                }
                {/* Image appearing with dropdown effect */}
                {hovered &&
                    <motion.img
                        src={authorImage}
                        alt="author"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : -10 }}
                        transition={{
                            duration: hovered ? 0.5 : 1,
                            ease: hovered ? "easeOut" : "easeInOut"
                        }}
                        className="mx-auto py-4 lg: w-full"
                    />
                }

                <h2 className={`${theme === 'light' ? 'text-black' : 'text-white'} mx-2 text-5xl lg:text-[100px] font-lato`}>
                    Nurul Azim Sakib
                </h2>
                <p className=' m-4 text-wrap font-poppins text-gray-500 '>HI, fellas. My self <span className='font-semibold text-lg'>Nurul Azim Sakib</span>,designer and developer of this website. This website is made as a trial project for my my portfolio. It is still under development and forever will be as I am an one man team,lol. But kuddos. If you are reading this make sure to put an honest feedbak for overall designs and features. My socials are linked below so any trash talking is cordially acceptable. See yaa</p>
            </div>
            <div>
               <Social></Social>
            </div>
           
        </div>
    );
};

export default Author;

