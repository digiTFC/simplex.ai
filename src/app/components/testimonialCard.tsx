import React from "react";
import Paragraph from "./text";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Titles } from "./Titles";

interface testimonialProps {
  name: string;
  profession: string;
  rating?: number;
}

const TestimonialCard: React.FC<testimonialProps> = ({}) => {
  return (
    <div>
      <div className="w-[540px] h-[337px] flex flex-col justify-between bg-klightGrey rounded-2xl px-[40px] py-8 pb-8">
        <Paragraph chidlren="Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve. Loren"></Paragraph>
        <hr className="border-khr " />
        <div className="flex items-center justify-between">
          <div className="flex ">
            <div className=" mr-4 w-[50px] h-[50px] rounded-full bg-klight">
              {" "}
            </div>
            <Titles
              title="Jane Doe"
              TitleStyle="md:text-[20px] font-semibold"
              subtitleStyle="md:text-[14px]"
              subTitle="CEO of ledoux"
            ></Titles>
          </div>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <div key={index} className="ml-2 text-amber-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-yellow-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
