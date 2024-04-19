"use client";
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';

interface ServiceBoxProps {
    title: string;
    description: string;
    imgSrc: string;
    alt: string;
    variants: any;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
        },
    },
};

const Work = () => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="bg-eerie-black text-gainsboro py-16"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.h2 className="text-4xl font-bold text-violet mb-4" variants={itemVariants}>WHAT I DO</motion.h2>
                </div>
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-10" variants={containerVariants}>
                    <ServiceBox
                        title="Web Development"
                        description="As a professional web developer in London, I skillfully craft dynamic, functional, and responsive websites. Specializing in eCommerce web development and custom solutions, my work is tailored to elevate your digital presence."
                        imgSrc="/images/Web-Developer.png"
                        alt="Web Developer"
                        variants={itemVariants}
                    />
                    <ServiceBox
                        title="UI/UX Design"
                        description=" I believe in love at first site. Let's make your users fall head over heels with interfaces designed to enchant and engage."
                        imgSrc="/images/UI-Designer.png"
                        alt="UI/UX Designer"
                        variants={itemVariants}
                    />
                    <ServiceBox
                        title="Web Consultant"
                        description="As a digital agency expert and web consultant in London, I guide you through the evolving digital landscape, ensuring your online presence is impactful and far-reaching."
                        imgSrc="/images/Web-Consultant.png"
                        alt="Web Consultant"
                        variants={itemVariants}
                    />
                </motion.div>
            </div>
        </motion.section>
    );
};

const ServiceBox: React.FC<ServiceBoxProps> = ({ title, description, imgSrc, alt, variants }) => (
    <motion.div className="bg-gradient-to-r from-gray-700 to-gray-900 p-6 rounded-lg shadow-xl hover:bg-gradient-to-r hover:from-purple-700 hover:to-purple-900 transition-colors duration-300 ease-in-out" variants={variants}>
        <motion.div className="flex items-center mb-4">
            <Image src={imgSrc} width={30} height={30} alt={alt} unoptimized={true} />
            <h3 className="text-lg font-semibold text-white ml-4">{title}</h3>
        </motion.div>
        <p className="text-white">{description}</p>
    </motion.div>
);

export default Work;
