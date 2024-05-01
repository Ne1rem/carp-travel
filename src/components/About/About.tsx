import { aboutText } from "@/jsonData/about";
import { FC } from "react";

const About: FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="padding-x max-width">
        <div className="padding-y grid  md:grid-flow-row md:auto-rows-max xl:grid-flow-row xl:auto-rows-max">
          <h2 className="header-2 mb-[8px] md:mb-0 col-span-3 md:col-span-2 xl:col-span-2 xl:min-w-[606px]">
            {aboutText.title}{" "}
            <span className="font-medium">{aboutText.subtitle}</span>
          </h2>

          <div className="flex flex-col gap-[20px] md:gap-[16px] mb-[40px] col-span-2 md:mb-[64px] xl:mb-[72px] md:mt-[9px] md:row-span-2  md:col-start-3 md:col-span-1 md:ml-[76px] md:max-w-[435px] xl:row-span-1 xl:col-start-3 md:justify-self-end  xl:col-span-1 xl:ml-[24px] xl:mt-[21px]">
            <p className="">
              <span className="font-normal">a team of enthusiasts</span>{" "}
              {aboutText.description1}
            </p>
            <p className="">
              <span className="font-normal">We believe</span>{" "}
              {aboutText.description2}{" "}
            </p>
          </div>
          <div className="flex flex-col max-w-[250px] self-end mb-[40px] col-span-2 col-start-2 md:mb-[64px] xl:max-w-none  md:col-start-1 xl:order-last xl:col-start-4 xl:col-span-1 xl:mb-0 ">
            <span className="uppercase font-normal">From vacationers </span>
            <span className="uppercase font-normal self-end">
              to active travelers
            </span>
            <span className="tracking-[-0.14px] md:tracking-[0.32px] xl:tracking-[2.16px]">
              we have a tour for everyone.
            </span>
          </div>
          <p className="col-span-3 md:col-span-2  md:align-self-end md:col-start-2  md:justify-self-end md:max-w-[463px] xl:max-w-[605px] xl:col-start-1 xl:col-span-2 xl:justify-self-start">
            <span className="font-normal">We use methods</span>{" "}
            {aboutText.description3}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
