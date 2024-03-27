"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
    {
        id: 'content1',
        img: "/images/testimonial/Vince-Stevenson.jpeg",
        altquote: "Vince Stevenson",
        name: "Vince Stevenson",
        role: "Trainer of Trainers and Executive Speech Coach",
        quote: "I've been working with Akash during his work at the college of public speaking website. Ive found him to be thorough, and reliable, and he goes that extra mile. He's talented and flexible. A good man to work with.",
    },
    {
        id: 'content2',
        img: "/images/testimonial/prashant-sutar.jpeg",
        altquote: "Prashant Suthar",
        name: "Prashant Suthar",
        role: "CEO & Founder Crawlmagic",
        quote: "It was a pleasure working with Akash. His tireless efforts ensured our website was both functional and visually appealing. My highest recommendation goes out to Akash for anyone looking for a reliable and capable web developer.",
    },
    {
        id: 'content4',
        img: "/images/testimonial/dummy-image.jpeg",
        altquote: "David Cole",
        name: "David Cole",
        role: "David Cole - CEO Netrix",
        quote: "Our website was enhanced beyond our expectations thanks to Akash work. It was a pleasure working with him because he was receptive, communicative, and always ready to provide professional insight to make our website as good as possible.",
    },
    {
        id: 'content5',
        img: "/images/testimonial/Anthony-Seminara.jpeg",
        altquote: "Anthony Seminara",
        name: "Anthony Seminara",
        role: "Creative Manager at Tempdent Recruitment & Training",
        quote: "Akash is a very professional person. All requests are handled quickly and efficiently. It's the sort of reliability we need in our busy work environment.",
    },
];

export default function Testimonials() {
    const [activeId, setActiveId] = useState(testimonials[0].id);

    return (
        <section className="bg-gradient-to-r from-slate-900 to-slate-700 font-inter antialiased pt-12 pb-12 md:pt-20 md:pb-20" id="testimonials">
            <div className="wrapper max-w-6xl mx-auto px-4">
                <h1 className="text-center text-2xl md:text-4xl font-semibold my-8">Testimonials</h1>
                <div className="flex flex-col items-center md:flex-row md:space-x-4">
                    <div className="flex justify-center md:justify-start flex-wrap">
                        {testimonials.map((testimonial) => (
                            <motion.div key={testimonial.id}
                                className={`shadow-xl cursor-pointer p-4 border rounded-lg my-2 mx-2 md:mx-0 md:my-4 flex items-center space-x-4 ${activeId === testimonial.id ? 'border-indigo-500 shadow-lg' : 'border-transparent'}`}
                                onClick={() => setActiveId(testimonial.id)}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <Image src={testimonial.img} alt={testimonial.altquote} width={56} height={56} className="rounded-full" unoptimized={true} />
                                <div className="text-left">
                                    <h3 className="font-semibold text-sm md:text-base">{testimonial.name}</h3>
                                    <p className="text-xs md:text-sm text-gray-400">{testimonial.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <AnimatePresence mode="wait">
                        {testimonials.filter((testimonial) => testimonial.id === activeId).map((testimonial) => (
                            <motion.div key={testimonial.id}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="shadow-xl max-w-xl py-12 mt-4 md:mt-0 p-4 md:p-8"
                            >
                                <h2 className="text-lg md:text-xl font-bold mb-2">{testimonial.quote}</h2>
                                <p className="text-gray-300 text-xs md:text-sm">- {testimonial.name}, {testimonial.role}</p>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
