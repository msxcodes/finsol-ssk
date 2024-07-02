import ContentWrapper from "@/common/ContentWrapper";
import poster from "../../../public/about/about-img.png";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="mb-[60px]">
      <ContentWrapper>
        <div className="grid md:grid-cols-2">
          <div className="md:pl-24">
            <Image src={poster} alt="About Us Poster" />
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="px-4 md:px-0">
              <h2 className="text-2xl font-semibold">What is SSK?</h2>
              <p className="text-sm md:pr-44 opacity-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                ipsam ea a consequatur impedit inventore, explicabo nisi iusto
                officia! Distinctio recusandae, tempore accusantium eos itaque
                minus adipisci dolorum at eius?
              </p>
            </div>
            <div className="px-4 md:px-0">
              <h2 className="text-2xl font-semibold">
                Why SSK is the best option?
              </h2>
              <p className="text-sm md:pr-44 opacity-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                ipsam ea a consequatur impedit inventore, explicabo nisi iusto
                officia! Distinctio recusandae, tempore accusantium eos itaque
                minus adipisci dolorum at eius?
              </p>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default AboutSection;
