"use client";

import ProjectCard from "@/components/ProjectCard";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    type:"Laravel PHP",
    img: "/image/project/arjayasite.png",
    title: "System Management",
    desc: "Proyek ini bertujuan untuk membangun sebuah sistem manajemen berbasis website yang komprehensif dan terintegrasi guna mendukung berbagai aspek operasional bisnis perusahaan. Sistem ini akan mencakup modul-modul penting seperti : Purchase Order, Product Decelopment, Sales, HRGA, Inventory dan masih banyak lagi.",
    href:"https://rozi.arjaya.site/",
  },
  {
    type:"Next JS",
    img: "/image/project/companyprofile.png",
    title: "Company Profile & E-Commerce",
      desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
    href:"https://arjayaprint.vercel.app/"
  },
  {
    type:"Next JS",
    img: "/image/project/admindashboard.png",
    title: "Admin Dashboard E-Commerce",
      desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
    href:"https://admindashboard-rozi.vercel.app/"
  }
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          My Projects
        </Typography>
        <Typography
                  variant="lead"
                  className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
    </section>
  );
}

export default Projects;
