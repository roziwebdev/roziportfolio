"use client";

import {  FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { Typography } from "@material-tailwind/react";

function Contacts() {
  return (
    <section className="relative px-8 py-16 bg-white">
      <div className="relative z-10 mx-auto flex flex-col justify-center items-center px-6 max-w-3xl">
        {/* Heading */}
        <Typography
                  variant="h2"
                  color="blue-gray"
                  className="mb-12 text-4xl font-semibold text-center text-gray-800" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          Contact Us
        </Typography>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
          {/* Phone */}
          <a href="https://wa.me/6285155322536" className="group">
            <div className="flex flex-col items-center gap-4 p-6 border rounded-lg transition-all duration-300 hover:border-green-500 hover:bg-green-50">
              <FaWhatsapp size={30} className="text-green-500 group-hover:text-green-600" />
              <Typography
                              variant="h6"
                              className="text-gray-700 group-hover:text-green-600 font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                085 155 322 536
              </Typography>
            </div>
          </a>
          {/* Email */}
          <a href="mailto:roziwebdev@gmail.com" className="group">
            <div className="flex flex-col items-center gap-4 p-6 border rounded-lg transition-all duration-300 hover:border-blue-500 hover:bg-blue-50">
              <FaEnvelope size={30} className="text-blue-500 group-hover:text-blue-600" />
              <Typography
                              variant="h6"
                              className="text-gray-700 group-hover:text-blue-600 font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                roziwebdev@gmail.com
              </Typography>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
