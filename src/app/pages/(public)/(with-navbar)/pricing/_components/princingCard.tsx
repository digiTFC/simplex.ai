"use client";
import React, { ReactNode } from "react";
import Button from "../../../../../components/button";
import PrincingTile from "./princingTile";
import Link from "next/link";

interface pricingProps {
  icon: ReactNode;

  title: string;
  features: { title: string; isPresent: boolean }[];
  price: string;
  onClick: string;
}
const PricingCard: React.FC<pricingProps> = ({
  icon,
  title,
  features,
  price,
  onClick,
}) => {
  const style =
    "bg-gradient-to-r from-kpink to-kpurple text-white hover:from-pink-600 hover:to-purple-700  w-[139px] h-[44px]  rounded-[5px]  px-[32px]";

  return (
    <div className="text-white relative">
      <div className=" md:w-[400px] w-[320px] max-w-[90vw]   relative dark:bg-klightGrey bg-white flex flex-col justify-between  items-center  text-center  rounded-3xl px-[24px] py-8">
        <div className=" w-[76px] h-[76px] absolute   -translate-y-[50%] top-0  flex items-center justify-center rounded-full bg-kOnSecondary">
          <div className="translate-x-[8px] translate-y-[8px] scale-75">
            {icon}
          </div>
        </div>
        <h1 className="text-[20px] font-medium mt-4 text-black dark:text-white ">
          {title}
        </h1>
        <hr className=" w-full my-[20px] border-khr" />
        <div className="self-start">
          {features.map((_, idx) => {
            return (
              <PrincingTile
                key={idx}
                isPresent={features[idx].isPresent}
                title={features[idx].title}
              ></PrincingTile>
            );
          })}
        </div>
        <hr className="w-full py-2 border-khr " />
        <div className=" w-full flex items-center justify-between">
          <h1 className="text-[40px] text-klightGrey font-medium transition-all">
            ${price}
            <span className="text-[14px] font-normal text-klight">
              /mo
            </span>{" "}
          </h1>
            <Link href={onClick}>
              <Button label="Purchase" className={style}></Button>
            </Link>
        </div>
      </div>
    </div>
  );
};
export default PricingCard;
