"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SkillCard from './SkillCard'; // Ensure this is updated for modern design
import skillsData from './skillsData';

const Skills = () => {
    const { scrollYProgress } = useScroll();  // Changed from useViewportScroll to useScroll
    const bgOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.5]);

    return (
        <motion.article id="skills" className="relative pt-10 pb-20 min-h-screen overflow-hidden"
            style={{
                backgroundAttachment: 'fixed',
                backgroundImage: 'url("/images/bg-1.svg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <motion.div className="absolute inset-0 bg-black" style={{ opacity: bgOpacity }}></motion.div>

            <motion.section className="container mx-auto px-4 relative z-10" initial="hidden" animate="visible">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-white">Skills and Technologies</h2>
                    <p className="text-xl text-gray-200 mt-4">From Idea to Execution - Transforming Visions into Reality</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((skill, index) => (
                        <SkillCard key={skill.id} {...skill} />
                    ))}
                </div>
            </motion.section>
        </motion.article>
    );
};

export default Skills;
