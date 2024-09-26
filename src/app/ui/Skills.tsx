"use client";

import { Typography } from "@material-tailwind/react";
import {
    CommandLineIcon,
    WrenchIcon,
    CircleStackIcon,
    DocumentDuplicateIcon,
    ServerIcon,
    DocumentCheckIcon,
} from "@heroicons/react/24/solid";
import SkillCard from "@/components/SkillCard";

const SKILLS = [
    {
    icon: CommandLineIcon   , // tambahkan ikon yang sesuai jika diperlukan
    title: "FullStack Development",
    children:
      "From the front-end to the back-end, I build comprehensive and scalable applications that cover every layer of development. Whether it's user interfaces or server-side logic, I deliver seamless integration and robust solutions.",
  },
  {
    icon: CircleStackIcon, // tambahkan ikon yang sesuai jika diperlukan
    title: "Database Management",
    children:
        "I design, manage, and optimize databases to ensure efficient data storage and retrieval. Whether it's SQL, NoSQL, or cloud-based solutions, I maintain data integrity and performance.",
  },

  {
    icon: DocumentCheckIcon,
    title: "Testing and Quality Assurance",
    children:
      "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
  },

  {
    icon: DocumentDuplicateIcon, // tambahkan ikon yang sesuai jika diperlukan
    title: "Office Application",
    children:
      "I am proficient in utilizing office applications such as Word, Excel, and PowerPoint to enhance productivity, create detailed reports, manage data efficiently, and deliver compelling presentations.",
  },

  {
    icon: ServerIcon, // tambahkan ikon yang sesuai jika diperlukan
    title: "Networking",
    children:
      "I have expertise in setting up and managing networks, ensuring reliable communication between systems. From configuring routers to securing network infrastructures, I ensure smooth and secure connectivity for your projects.",
    },
  {
    icon: WrenchIcon, // tambahkan ikon yang sesuai jika diperlukan
    title: "IT Support",
    children:
        "I provide technical support and troubleshooting services to ensure the smooth operation of IT systems. From resolving hardware issues to software configurations, I help maintain operational continuity.",
},

];



export function Skills() {
  return (
    <section className="px-8 py-16 bg-gradient-to-r from-white to-blue-50">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase tracking-widest"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          my skills
        </Typography>
        <Typography variant="h2" color="blue-gray" className="mb-4 text-4xl font-extrabold"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          What I do
        </Typography>
        <Typography
                  variant="lead"
                  className="mx-auto w-full !text-gray-500 lg:w-8/12 lg:text-lg"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
            I’m your IT partner, specializing in crafting robust full-stack solutions and ensuring seamless operations. From networking and IT support to database management and quality assurance, I optimize every facet of your digital experience. Discover how I can enhance your technology landscape below.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
