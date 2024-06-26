import { FC } from "react";
import Link from "next/link";
import { heroText } from "@/jsonData/hero";


const Hero: FC = () => {
  return (
    <section className="hero-section">
      <div className="padding-x max-width">
        <div className="py-14 pt-[105px] md:pt-[123px] xl:pt-[130px]">
          <div className="flex flex-col gap-6 md:gap-x-12 md:gap-y-0 md:grid md:grid-rows-3 md:grid-cols-5 md:grid-flow-col">
            <h1 className="header-1 first-letter:font-medium w-[118px] ml-auto  md:col-span-2 hero-right">
              {heroText.title}
              <span className="tracking-[9.48px] text-xs font-light block leading-normal md:leading-none md:text-sm md:tracking-[25.9px] xl:text-base xl:tracking-[36.48px]">
              {heroText.spanTitle}
              </span>
            </h1>
            <div className="md:-order-1 md:row-span-3 md:col-span-3">
              <h2 className="header-2 first-line:font-medium mb-6 md:mb-[58px] max-w-xs  md:max-w-fit xl:max-w-[646px]">
                {heroText.subtitle}
              </h2>
              <p className="text-[10px] font-extralight leading-4 max-w-[157px] md:text-sm  md:tracking-[1.26px] md:max-w-[262px] xl:text-base xl:leading-6 xl:tracking-[1.44px] xl:md:max-w-full ">
              {heroText.places}
              </p>
            </div>
            <div className="md:row-span-2 col-span-2 flex flex-col justify-end hero-right">
              <p className="mb-[24px] placeholder:md:mb-[28px] text-sm text-justify md:text-base font-extralight md:leading-5 xl:text-lg xl:leading-6">
                {heroText.description}
              </p>
              <Link href="#contacts" className="button-hero">
                {heroText.buttonLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
