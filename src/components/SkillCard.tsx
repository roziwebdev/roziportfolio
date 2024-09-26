import { Card, CardBody, Typography } from "@material-tailwind/react";
import "../app/globals.css";
interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  return (
    <Card
          color="white"
          shadow={true}
          className="transition-transform transform hover:scale-105 hover:shadow-xl shadow-lg rounded-xl fade-in-up"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}    >
      <CardBody className="flex flex-col items-center text-center p-8"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg">
          <Icon className="h-8 w-8" />
        </div>
        <Typography variant="h5" color="blue-gray" className="mb-2 font-semibold"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {title}
        </Typography>
        <Typography className="text-gray-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{children}</Typography>
      </CardBody>
    </Card>
  );
}

export default SkillCard;
