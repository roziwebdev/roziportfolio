import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

interface ProjectCardProps {
  img: string;
  type: string;
  title: string;
    desc: string;
    href: string;
}

export function ProjectCard({ img, title, desc,type, href }: ProjectCardProps) {
  return (
    <Card
      className="my-5 w-full p-8 lg:flex-row bg-blue-50 rounded-r-none"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      {/* Fixed size for image to prevent resizing when text is long */}
      <CardHeader
        shadow={false}
        floated={false}
        className="lg:w-1/3 w-full flex-shrink-0 bg-blue-50 rounded-r-none "
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <a href={href} className="cursor-pointer" target="_blank">
          <Image
            width={600}
            height={600}
            src={img}
            alt={title}
            className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </a>
      </CardHeader>

      {/* Text content area */}
      <CardBody
        className="flex-1 lg:ml-8"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography
          variant="paragraph"
          color="gray"
          className="text-sm mb-4 uppercase flex items-center gap-2"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <PencilSquareIcon className="h-5 w-5" />
          {type}
        </Typography>
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-2"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {title}
        </Typography>
        {/* Wrap long description text */}
        <Typography
          color="gray"
          className="mb-8 font-normal break-words"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {desc}
        </Typography>
        <a href={href} target="_blank" className="inline-block">
          <Button
            variant="text"
            className="flex items-center gap-2 text-blue-500"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
