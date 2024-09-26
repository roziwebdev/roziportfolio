"use client";

import { FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Typography, IconButton } from "@material-tailwind/react";

function Contacts() {
  return (
    <section className="relative px-8 py-16">


      <div className="relative z-10 mx-auto flex flex-col justify-center items-center px-6">
        {/* Heading */}
        <Typography
                  variant="h2"
                  color="blue-gray"
                  className="mb-8 text-3xl lg:text-4xl font-extrabold !leading-tight text-center animate-typing overflow-hidden whitespace-nowrap border-r-4 border-blue-500 pr-5"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          Contact Us
        </Typography>

        {/* Contact Info */}
        <div className="flex  gap-6 items-center text-center">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <IconButton
                          color="white"
                          className="rounded-full p-3 shadow-lg hover:bg-blue-500 hover:text-white transition-transform duration-300 hover:scale-110"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              <FaPhoneAlt size={20} />
            </IconButton>
            <Typography variant="h5" className="text-gray-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              +1 234 567 890
            </Typography>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <IconButton
                          color="white"
                          className="rounded-full p-3 shadow-lg hover:bg-blue-500 hover:text-white transition-transform duration-300 hover:scale-110"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              <FaEnvelope size={20} />
            </IconButton>
            <Typography variant="h5" className="text-gray-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              email@example.com
            </Typography>
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-4">
            <IconButton
                          color="white"
                          className="rounded-full p-3 shadow-lg hover:bg-blue-500 hover:text-white transition-transform duration-300 hover:scale-110"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              <FaInstagram size={20} />
            </IconButton>
            <Typography variant="h5" className="text-gray-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              @instagramhandle
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
