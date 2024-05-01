import { FC } from "react";
import { CareerForm } from "./CareerForm";
import { careerText } from "@/jsonData/career";

const Career: FC = () => {
  return (
    <section id="career" className="career-section">
      <div className="padding-x max-width">
        <div className="padding-y grid grid-cols-3">
          <h2 className="header-2 col-span-3  md:col-span-2 mb-6 ">
            {careerText.title} <span className="font-medium">{careerText.subtitle}</span>
          </h2>
          <p className="text-justify min-w-[179px] col-span-2 col-start-2 md:col-start-3 md:row-start-1 md:col-span-1 md:max-w-[293px] md:content-center">
            {careerText.opportunity}
          </p>
          <h3 className="my-9 text-3xl font-extralight leading-[normal] uppercase col-span-1 col-start-2 md:col-span-1 md:col-start-1 md:mt-[12px] md:mb-[56px] md:text-center">
            Why us?
          </h3>
          <ul className="col-span-2 flex flex-col text-right gap-4 md:gap-6 mb-[112px] md:col-span-1 md:col-start-1 md: mr-[20px]">
            <li>
              <h4 className="header-4 mb-[8px]">{careerText.reason1}</h4>
              <p className="about-us">
              {careerText.textReason1}
              </p>
            </li>
            <li>
              <h4 className="header-4 mb-[8px]">{careerText.reason2}</h4>
              <p className="about-us">
              {careerText.textReason2}
              </p>
            </li>
            <li>
              <h4 className="header-4 mb-[8px]">{careerText.reason3}</h4>
              <p className="about-us">
              {careerText.textReason3}
              </p>
            </li>
            <li>
              <h4 className="header-4 mb-[8px]">{careerText.reason4}</h4>
              <p className="about-us">
              {careerText.textReason4}
              </p>
            </li>
          </ul>
          <div className="col-span-3 md:col-span-2 md:mr-[24px]">
            <div className="grid grid-cols-3 md:grid-cols-4">
              <p className="col-span-2 col-start-2 md:col-span-2">
                {careerText.opportunity}
              </p>
              <CareerForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
