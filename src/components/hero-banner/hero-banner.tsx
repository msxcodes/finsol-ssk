import ContentWrapper from "@/common/ContentWrapper";
import Image from "next/image";
import banner from "../../../public/hero/hero-banner.png";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import shape01 from "../../../public/shape/blob(3).svg";

const HeroBanner = () => {
  return (
    <div className="relative">
      <Image
        src={shape01}
        alt=""
        className="size-[1600px] absolute top-[-900px] rotate-[25deg] opacity-50 left-[-950px]"
      />
      <ContentWrapper>
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center gap-6 items-center">
            <div className="flex flex-col gap-4">
              <h2 className="text-6xl text-center font-bold">
                {" "}
                Welcome to
                <span className="text-[#DC143C]"> FinSol</span> <br /> Sampurna
                Suvidha Kendra
              </h2>
              <p className="text-sm text-center opacity-60">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex gap-2">
              <Button className="rounded-full px-8">
                Get Started{" "}
                <span>
                  <MoveRight size={18} className="ml-2" />
                </span>{" "}
              </Button>
              <Button className="rounded-full hover:bg-transparent px-8 bg-transparent border-2 border-black/70 dark:border-white/70 text-black dark:text-white">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center overflow-hidden">
            <Image src={banner} alt="banner" className=" scale-125" />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
