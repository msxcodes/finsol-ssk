import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MoveRight, Rocket } from "lucide-react";

interface CardProps {
  title: string;
  des: string;
  icon: any;
  link?: string;
}

const ServiceCard = ({ title, des, icon, link }: CardProps) => {
  return (
    <Card className="dark:bg-slate-900 dark:shadow-slate-950 dark:border-slate-600 rounded-[30px] pt-6 hover:shadow-xl transition-all duration-300 cursor-pointer ">
      <CardContent className="flex justify-center gap-1 items-center flex-col">
        {icon}
        <span className="font-semibold text-xl">{title}</span>
        <p className=" text-xs opacity-50 text-center">{des} </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="flex items-center text-xs font-medium text-primary gap-1 hover:underline cursor-pointer">
          View Details{" "}
          <span>
            <MoveRight size={14} />
          </span>{" "}
        </p>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
