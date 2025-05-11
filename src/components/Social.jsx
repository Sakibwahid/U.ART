import React from "react"; 
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Social = () => {

    const socialMediaIcons = [
        { icon: <FaInstagram />, link: "https://www.instagram.com" },
        { icon: <FaTwitter />, link: "https://www.twitter.com" },
        { icon: <FaGithub />, link: "https://www.github.com" }
    ]

    return (
        <div className="flex justify-center mt-4 gap-6 mb-5">
            {socialMediaIcons.map((social, index) => (
                <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {social.icon}
                </motion.a>
            ))}
        </div>
    );
};

export default Social;