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
      desc: "Proyek ini bertujuan untuk membangun website company profile yang modern dan informatif, dilengkapi dengan fitur e-commerce untuk memudahkan transaksi jual-beli produk perusahaan secara online. ",
    href:"https://arjayaprint.vercel.app/"
  },
  {
    type:"Next JS",
    img: "/image/project/admindashboard.png",
    title: "Admin Dashboard E-Commerce",
      desc: "Proyek ini bertujuan untuk membangun sistem admin berbasis website yang memungkinkan administrator mengelola produk dan pengguna dalam platform e-commerce. Sistem ini mencakup fitur-fitur penting sebagai berikut: Managemen Produk dan Pengguna, Dashboard Statistik dan Laporan, dan lain sebagainya",
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
