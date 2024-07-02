import ContentWrapper from "@/common/ContentWrapper";
import ServiceHeading from "./service-heading";
import ServiceCard from "./service-card";
import {
  BadgeDollarSign,
  BadgeIndianRupee,
  FileCheck2,
  Landmark,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import shape01 from "../../../public/shape/blob.svg";
import shape02 from "../../../public/shape/blob(1).svg";
import shape03 from "../../../public/shape/block01.svg";

const ServiceSection = () => {
  return (
    <div className="mt-[120px] relative">
      <Image
        src={shape01}
        alt=""
        className="absolute top-[-200px] right-[-450px] opacity-50 size-[800px]"
      />
      <Image
        src={shape02}
        alt=""
        className="absolute top-[-50px] left-12 opacity-50 rotate-180 size-[300px]"
      />
      <Image
        src={shape03}
        alt=""
        className="absolute bottom-[-200px] right-64 opacity-50 rotate-180 size-[200px]"
      />
      <ContentWrapper>
        <div className="flex flex-col">
          <ServiceHeading />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-[60px] px-4 md:px-[140px]">
            <ServiceCard
              title="GST Registration"
              des="Lorem ipsum consectetur adipisicing elit. Blanditiis dolores fuga,
          facilis"
              icon={<BadgeDollarSign className="text-primary" size={40} />}
            />
            <ServiceCard
              title="Company Registration"
              des="Lorem ipsum consectetur adipisicing elit. Blanditiis dolores fuga,
          facilis"
              icon={<Landmark className="text-primary" size={40} />}
            />
            <ServiceCard
              title="ITR Filing"
              des="Lorem ipsum consectetur adipisicing elit. Blanditiis dolores fuga,
          facilis"
              icon={<BadgeIndianRupee className="text-primary" size={40} />}
            />
            <ServiceCard
              title="Udamy Registration"
              des="Lorem ipsum consectetur adipisicing elit. Blanditiis dolores fuga,
          facilis"
              icon={<FileCheck2 className="text-primary" size={40} />}
            />

            <ServiceCard
              title="NGO Registration"
              des="Lorem ipsum consectetur adipisicing elit. Blanditiis dolores fuga,
          facilis"
              icon={<ShieldCheck className="text-primary" size={40} />}
            />
            <ServiceCard
              title="Demo"
              des="Lorem ipsum consectetur adipisicing elit. Blanditiis dolores fuga,
          facilis"
              icon={<Rocket className="text-primary" size={40} />}
            />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default ServiceSection;
