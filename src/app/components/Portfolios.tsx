"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const initialDisplayCount = 6;

  const portfolioItems = [
    {
      link: "https://www.gmb.org.uk/",
      imageSrc: "/images/portfolio/3.jpg",
      altText: "GMB Union",
      heading: "GMB Union",
    },
    {
      link: "https://www.crawlmagic.com/",
      imageSrc: "/images/portfolio/1.jpg",
      altText: "Crawlmagic",
      heading: "Crawlmagic",
    },
    {
      link: "https://www.collegeofpublicspeaking.co.uk/",
      imageSrc: "/images/portfolio/4.jpg",
      altText: "College of Public Speaking",
      heading: "College of Public Speaking",
    },
    {
      link: "https://soldiersecurityservices.com/",
      imageSrc: "/images/portfolio/2.jpg",
      altText: "Soldier Security Services",
      heading: "Soldier Security Services",
    },
    {
      link: "https://innov-8-2-create.eu/",
      imageSrc: "/images/portfolio/innov.png",
      altText: "Innov",
      heading: "Innov",
    },
    {
      link: "https://www.adea-fieberbrunn-austria.com/",
      imageSrc: "/images/portfolio/ADEA-Lifestyle-Suites.png",
      altText: "ADEA Lifestyle Suites",
      heading: "ADEA Lifestyle Suites",
    }
  ];

  // State to manage displayed items
  const [displayedItems, setDisplayedItems] = useState(portfolioItems.slice(0, initialDisplayCount));

  // Function to load more items
  const loadMoreItems = () => {
    setDisplayedItems(portfolioItems);
  };

  // Animation variants for the cards
  const cardVariants = {
    offscreen: {
      opacity: 0,
      y: 50
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section className="portfolio bg-slate-950 text-gainsboro pt-20 pb-20" id="portfolio">
      <div className="wrapper max-w-6xl mx-auto px-4">
        <header className="sec-head text-center mb-12">
          <h2 className="sec-head__h text-4xl font-bold">MY WORK</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item, index) => (
            <motion.div
              className="portfolio-card p-4 bg-chinese-black rounded-lg shadow-lg"
              key={index}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <Link href={item.link} passHref>
                <div className="portfolio-card__img-box mb-4 cursor-pointer">
                  <Image src={item.imageSrc} width={300} height={150} alt={item.altText} layout="responsive" className="rounded-lg" unoptimized={true} />
                </div>
                <h5 className="portfolio-card__head text-xl font-semibold text-violet">{item.heading}</h5>
              </Link>
            </motion.div>
          ))}
        </div>
        {displayedItems.length < portfolioItems.length && (
          <div className="text-center mt-8">
            <button onClick={loadMoreItems} className="px-6 py-2 bg-violet text-white font-semibold rounded hover:bg-purple-700 transition-colors duration-300">
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;

