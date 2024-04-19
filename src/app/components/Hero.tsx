"use client";
import React from 'react';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

const imageVariants = {
    floating: {
        y: ["-5%", "5%"],
        transition: {
            y: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 5,
                ease: "easeInOut"
            }
        }
    }
};

const Hero = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start("floating");
    }, [controls]);
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1.5 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };
    return (
        <motion.article
            className="bg-center bg-repeat-x bg-auto px-4 sm:px-6 md:px-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.section
                className="container mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="flex flex-wrap items-center -mx-4 ">
                    <div className="w-full md:w-1/2 px-4">
                        <header className="text-4xl mb-10">
                            <hgroup>
                                <span className="text-lg">Hi, I am </span>
                                <motion.h1
                                    variants={itemVariants}
                                    className='text-5xl lg:text-6xl text-gradient font-bold'>
                                    Akash Kumar
                                </motion.h1>
                            </hgroup>
                        </header>
                        <h2 className="text-xl mb-10">London based web developer and designer</h2>
                        <p className="mb-10">With over 5 years of experience, I specialize in creating digital experiences that not only meet expectations but consistently exceed them. My custom web design services and development expertise ensure your project stands out in the vibrant London tech scene.</p>
                        <div className="grid grid-cols-3 gap-4 mb-10">
                            <div>
                                <h3 className="text-2xl">5+ Years</h3>
                                <p>Experience</p>
                            </div>
                            {/* <div className="text-center">
                                <h4 className="text-2xl">99.8%</h4>
                                <p>Satisfaction</p>
                            </div> */}
                            {/* <div>
                                <h4 className="text-2xl">50+</h4>
                                <p>Clients</p>
                            </div> */}
                        </div>
                        {/* <div className="text-center">
                            <Link href="#contact">
                                <p className="bg-gray-800 text-white py-3 px-6">Contact Me!</p>
                            </Link>
                        </div> */}
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <motion.div
                            className="image-container"
                            variants={imageVariants}
                            animate={controls}
                        >
                            <Image src={'https://ctfmcoptba.cloudimg.io/images/hero-image-akash.webp'} alt="Akash Kumar" width={600} height={1000} priority />
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </motion.article>
    )
}

export default Hero;
