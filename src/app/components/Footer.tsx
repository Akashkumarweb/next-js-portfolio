"use client"
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-eerie-black text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {currentYear} Webdevakash. All rights reserved.</p>
        <div className="flex mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/theakashkumar/" target="_blank" rel="noopener noreferrer" className="text-white p-2">
            <FaLinkedin size="24" />
          </a>
          <a href="https://github.com/Akashkumarweb" target="_blank" rel="noopener noreferrer" className="text-white p-2">
            <FaGithub size="24" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
