"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  { name: "html", src: "/image/tools/html.png" },
  { name: "css", src: "/image/tools/css.png" },
  { name: "javascript", src: "/image/tools/javascript.png" },
  { name: "react", src: "/image/tools/react.png" },
  { name: "nextjs", src: "/image/tools/nextjs.png" },
  { name: "php", src: "/image/tools/php.png" },
  { name: "laravel", src: "/image/tools/laravel.png" },
  { name: "figma", src: "/image/tools/figma.png" },
];

export function Tools() {
  return (
    <section className="px-8 py-28 bg-white">
      <div className="container mx-auto text-center">
        <Typography variant="h4" color="blue-gray" className="mb-8"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          The Technology I Use Day-to-Day
        </Typography>
        <Typography variant="paragraph" color="gray" className="mb-12"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          A collection of technologies and tools I work with daily in my projects.
        </Typography>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="relative group w-24 h-24 rounded-full flex justify-center items-center bg-blue-50 shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <Image
                alt={client.name}
                width={1024}
                height={1024}
                className="w-16 h-16 transition-transform duration-300 group-hover:scale-110"
                src={client.src}
              />
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 rounded-full transition-opacity duration-300 group-hover:opacity-60 blur-md"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tools;
