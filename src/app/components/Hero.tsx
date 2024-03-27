"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image'



const Hero = () => {
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
                        <h3 className="text-xl mb-10">Web Specialist based in London</h3>
                        <p className="mb-10">As an experienced web developer and designer, I am dedicated to
                            creating digital experiences
                            that make a lasting impact. My unique approach weaves technology with a touch of creativity,
                            resulting in websites that
                            not only meet expectations but consistently exceed them.</p>
                        <div className="grid grid-cols-3 gap-4 mb-10">
                            <div className="text-center">
                                <h4 className="text-2xl">5+ Years</h4>
                                <p>Experience</p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-2xl">99.8%</h4>
                                <p>Satisfaction</p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-2xl">50+</h4>
                                <p>Clients</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <Link href="#contact">
                                <p className="bg-gray-800 text-white py-3 px-6">Contact Me!</p>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <Image src={'/images/hero-image.png'} alt="Akash Kumar" width={600} height={1000} />
                    </div>
                </div>
            </motion.section>
        </motion.article>
    )
}

export default Hero;
