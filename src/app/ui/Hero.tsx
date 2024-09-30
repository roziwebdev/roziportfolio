"use client";

import Image from "next/image";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { Button, Typography, IconButton } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="relative bg-gradient-to-r from-white to-blue-100 px-8 py-16 lg:py-1">
      {/* Background Shape */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-300 opacity-20 rounded-full top-0 right-0 transform translate-x-1/4 -translate-y-1/4 blur-3xl"></div>
        <div className="absolute w-72 h-72 bg-blue-500 opacity-10 rounded-full bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto flex flex-col lg:flex-row justify-between items-center min-h-screen px-1 lg:px-24">
        {/* Left Side (Text + Buttons) */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
          {/* Typing Effect */}
          <Typography
                      variant="h2"
                      color="blue-gray"
                      className="mb-4 lg:text-4xl text-2xl font-extrabold !leading-tight  animate-typing overflow-hidden lg:whitespace-nowrap border-r-4 border-blue-500 pr-5"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Welcome To My Portfolio!
          </Typography>
          <Typography
                      variant="lead"
                      className="mb-6 !text-gray-600 md:pr-16 xl:pr-28 fade-in-animation"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Welcome to My Portfolio!
            I&apos;m Rozi, an IT specialist focused on delivering effective solutions in development, networking, and support. Let’s work together to bring your projects to life!
          </Typography>
                  <div className="flex flex-col md:flex-row gap-4 items-center">
                      {/* Hire Me Button */}
                      <a href="https://wa.me/6285155322536" target="_blank">
                        <Button
                                    color="blue"
                                    className=" animate-bounce w-full md:w-auto px-8 py-2 shadow-lg hover:scale-110 transition-transform duration-300 hover:bg-blue-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
                        Hire Me !
                        </Button>
                      </a>
            <div className="flex gap-3 pb-4 md:pb-0">
              <a href="https://www.instagram.com/rozi25x/">
              <IconButton
                              color="white"
                              className="rounded-full p-3 shadow-lg hover:bg-blue-500 hover:text-white transition-transform duration-300 hover:scale-110"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                <FaInstagram size={20} />
              </IconButton>
              </a>
                <a href="https://github.com/roziwebdev">
                  <IconButton
                              color="white"
                              className="rounded-full p-3  shadow-lg hover:bg-blue-500 hover:text-white transition-transform duration-300 hover:scale-110"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                    <FaGithub size={20} />
                  </IconButton>
                </a>
              
            </div>
          </div>
        </div>

        {/* Right Side (Image with Animated Entry) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            width={512}
            height={512}
            alt="team work"
            src="/image/rozi.jpg"
            className="h-[26rem] w-[26rem] rounded-xl object-cover shadow-2xl transition-transform duration-500 ease-out hover:scale-105"
          />
        </div>
      </div>
    </header>
  );
}

export default Hero;
