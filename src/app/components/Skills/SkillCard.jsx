import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SkillCard = ({ iconSrc, title, description }) => {
    const cardVariants = {
        initial: {
            scale: 0.95,
            opacity: 0.8
        },
        hover: {
            scale: 1.05,
            rotateY: 10,
            transition: { 
                type: 'spring', 
                stiffness: 300 
            },
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
        }
    };
    

    return (
        <motion.div
            className="transform transition duration-500 cursor-pointer rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-gray-700 via-gray-900 to-black"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
        >
            <div className="flex flex-col items-center p-6 text-white">
                <Image src={iconSrc} alt={title} width={64} height={64} className="p-2"/>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="text-center mt-2 text-sm">{description}</p>
            </div>
        </motion.div>
    );
};

export default SkillCard;
