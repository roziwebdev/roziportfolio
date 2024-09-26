"use client";

import { FaInstagram, FaGithub } from "react-icons/fa";
import { Typography } from "@material-tailwind/react";

function Footer() {
    const handleClick =(sectionId: string)=> (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = document.querySelector(sectionId);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - 100, // adjust offset if needed
        behavior: "smooth",
      });
    }
  };
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo or Brand Name */}
          <Typography variant="h6" className="text-gray-800 font-semibold"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            RoziPortfolio
          </Typography>

          {/* Navigation Links */}
          <div className="flex gap-6">
            <a onClick={handleClick("#hero")} href="#hero" className="text-gray-600 hover:text-blue-500 transition-colors">
              Home
            </a>
            <a onClick={handleClick("#skills")} href="#skills" className="text-gray-600 hover:text-blue-500 transition-colors">
              Skills
            </a>
            <a onClick={handleClick("#projects") } href="#projects" className="text-gray-600 hover:text-blue-500 transition-colors">
              Projects
            </a>
            <a onClick={handleClick("#contacts")} href="#contacts  " className="text-gray-600 hover:text-blue-500 transition-colors">
              Contacts
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="https://www.instagram.com/rozi25x/" target="_blank" rel="noopener noreferrer" className="group">
              <FaInstagram size={20} className="text-gray-500 group-hover:text-pink-600 transition-colors" />
            </a>
            <a href="https://github.com/roziwebdev" target="_blank" rel="noopener noreferrer" className="group">
              <FaGithub size={20} className="text-gray-500 group-hover:text-black transition-colors" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center">
          <Typography variant="small" className="text-gray-500"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            &copy; {new Date().getFullYear()} Roziportfolio. All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
