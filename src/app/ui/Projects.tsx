"use client";

import ProjectCard from "@/components/ProjectCard";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    type:"Laravel PHP",
    img: "/image/project/arjayasite.png",
    title: "System Management",
    desc: "This project aims to develop a comprehensive and integrated web-based management system to support various aspects of the company's business operations.",
    href:"https://rozi.arjaya.site/",
  },
  {
    type:"Next JS",
    img: "/image/project/companyprofile.png",
    title: "Company Profile & E-Commerce",
      desc: "This project aims to build a modern and informative company profile website, equipped with e-commerce features to facilitate seamless online transactions for the company products.",
    href:"https://arjayaprint.vercel.app/"
  },
  {
    type:"Next JS",
    img: "/image/project/admindashboard.png",
    title: "Admin Dashboard E-Commerce",
      desc: "This project aims to build a web-based admin system that allows administrators to manage products and users within the e-commerce platform.",
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
          Several projects I’ve worked on prioritize efficient functionality and flexible design, ensuring optimal solutions for your digital needs.
        </Typography>
      </div>
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
    </section>
  );
}

export default Projects;
