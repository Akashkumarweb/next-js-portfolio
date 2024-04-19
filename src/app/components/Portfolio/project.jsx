"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const tagVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Project = ({ title, description, tags, imageSrc, link }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1 // Trigger the animation when the tag is 10% in view
  });

  return (
    <motion.div
      ref={ref}
      className="max-w-4xl mx-auto my-8 p-4 border border-gray-800 rounded-lg"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.1, delayChildren: inView ? 0 : 0.5 }}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-gray-400">{description}</p>
          <motion.div
            className="flex flex-wrap gap-2 my-4"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                className="bg-gray-700 text-xs rounded px-2 py-1"
                custom={index}
                variants={tagVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: index * 0.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
        <div className="md:w-1/2">
          <Image className="rounded-lg shadow-lg" src={imageSrc} alt={title} width={500} height={500} />
        </div>
      </div>
      <a href={link} className="text-indigo-500 hover:underline">Visit site →</a>
    </motion.div>
  );
}

export default Project;
