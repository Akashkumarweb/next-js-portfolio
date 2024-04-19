"use client"
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

const contactMethods = [
  {
    id: 1,
    name: 'Email',
    value: 'akashkmr2008@gmail.com',
    link: 'mailto:akashkmr2008@gmail.com',
    icon: <FiMail size="24" className="text-blue-500" />,
  },
  {
    id: 2,
    name: 'LinkedIn',
    value: '@theakashkumar',
    link: 'https://www.linkedin.com/in/theakashkumar/',
    icon: <FaLinkedinIn size="24" className="text-blue-500" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const boxVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  whileHover: { scale: 1.05, transition: { type: 'spring', stiffness: 300 } },
  whileTap: { scale: 0.95 },
};

const Contact = () => {
  return (
    <div className="dark" id='contact'>
      <Head>
        <title>Contact Info</title>
      </Head>
      <motion.div
        className="py-16 bg-gray-900 flex flex-col justify-center items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-4xl text-white font-bold mb-8">Contact Me</h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactMethods.map((method) => (
            <motion.a
              key={method.id}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={boxVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 cursor-pointer"
            >
              {method.icon}
              <div>
                <span className="text-white text-lg">{method.name}</span>
                <p className="text-gray-400">{method.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
