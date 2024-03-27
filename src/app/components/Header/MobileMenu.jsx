import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { NAV_LINKS } from '@/app/constants';

const MobileMenu = ({ isOpen, onClose }) => {
  const sidebarVariants = {
    hidden: {
      x: '100%',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.25,
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          variants={sidebarVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed top-0 right-0 h-full z-40 w-64 bg-gray-800 shadow-xl"
        >
          <button
            onClick={onClose}
            className="text-white absolute top-4 right-4"
          >
            Close
          </button>
          <nav className="flex flex-col items-start p-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key}>
                <a
                  className="text-white py-2 px-4 w-full text-left"
                  onClick={onClose}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </nav>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;